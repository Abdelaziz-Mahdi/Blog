import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost as deletePostApi } from "../../services/postService";

function PostsList(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function loadPosts() {
            try {
                const json = await getPosts();
                setPosts(json);
                setLoading(false);
            } catch (e) {
                setError("An error occurred. Awkward...");
                setLoading(false);
            }
        }
        loadPosts();
    },[]);

    const deletePost = async (id) => {
        try {
            await deletePostApi(id);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (e) {
            setError("An error occurred:", e);
        }
    }

    return <div>
        <div>{loading}</div>
        <div>{error}</div>
        {posts.map((post)=>(
            <div key={post.id} className="post-container">
                <h2>
                    <Link to={`/posts/${post.id}`} className="post-title">
                        {post.title}
                    </Link>
                </h2>
                <div className="post-links">
                    <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    {"  |  "}
                    <button onClick={() => deletePost(post.id)} >Delete</button>
                </div>
            </div>
        ))}
        </div>;
}

export default PostsList;
