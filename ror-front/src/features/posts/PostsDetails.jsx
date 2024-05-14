import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPosts, deletePost as deletePostApi } from "../../services/postService";

export default function PostsDetails() {
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function loadPost() {
            try {
                const json = await getPosts(id);
                setPost(json);
            } catch (e) {
                setError("An error occurred. Awkward...");
            }
        }
        loadPost();
    }, [id])
    
    const handleDelete = () => {
        async (id) => {
            try {
                await deletePostApi(id);
                navigate("/")
            } catch (e) {
                setError("An error occurred:", e);
            }
        }
    }

    return (
        <div>
            <div>{error}</div>
            {!post.title ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit</Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )
            }
            <Link to="/">Back</Link>
        </div>
    )
}
