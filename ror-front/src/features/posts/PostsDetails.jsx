import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../../constants'

export default function PostsDetails() {
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`${API_URL}/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
    }, [id])
    
    const handleDelete = () => {
        fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        })
        .then(() => navigate('/'))
    }

    return (
        <div>
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
