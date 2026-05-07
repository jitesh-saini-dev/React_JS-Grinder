import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="details">
      <button onClick={() => navigate(-1)} className="backbtn">
        Back
      </button>
      <h2>{post.id}</h2>

      <h2>{post.title}</h2>
      <p>
        <strong>Body:</strong> {post.body}
      </p>
      <p>
        <strong>User ID:</strong> {post.userId}
      </p>
      <p>
        <strong>Tags:</strong> {post.tags?.join(", ")}
      </p>
      <p>
        <strong>Views:</strong> {post.views}
      </p>
      <p>
        <strong>Likes:</strong> {post.reactions?.likes}
      </p>
      <p>
        <strong>Dislikes:</strong> {post.reactions?.dislikes}
      </p>
    </div>
  );
};

export default Posts;
