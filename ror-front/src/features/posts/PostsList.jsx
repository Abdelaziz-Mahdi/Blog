import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";

function PostsList(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("An error occurred. Awkward...");
                console.log("An error occurred:", 0);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    },[]);

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
                <p>{post.body}</p>
            </div>
        ))}
        </div>;
}

export default PostsList;
