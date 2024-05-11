import { API_URL } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostEditForm() {
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const [,setError] = useState(null)
    const [,setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        // fetch the current post by id
        const fetchCurrentPost = async () => {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (response.ok) {
                const data = await response.json();
                setPost(data);
            } else {
                throw response;
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    fetchCurrentPost();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: post.title,
                    body: post.body,
                }),
            });
            if (response.ok) {
                navigate(`/posts/${id}`);
            } else {
                throw response;
            }
        } catch (error) {
            setError(error);
        }
    }

    if (!post) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>
            EditPostForm
        </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="post-title">Title</label>
                <input type="text" id="post-title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
            </div>
            <div>
                <label htmlFor="post-body">Content</label>
                <textarea id="post-body" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
            </div>
            <button type="submit">Update Post</button>
            <button type="button" onClick={() => navigate(-1)}>Cancel</button>
        </form>
        </div>
    )
    }