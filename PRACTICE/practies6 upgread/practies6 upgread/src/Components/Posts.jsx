import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setPost, setLoading } from "../Slice/postSlice";

const Posts = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX DATA
  const { post, loading } = useSelector((state) => state.post);

  // FETCH POST
  const fetchPost = async () => {
    dispatch(setLoading(true));

    const res = await fetch(`https://dummyjson.com/posts/${id}`);

    const data = await res.json();

    dispatch(setPost(data));

    dispatch(setLoading(false));
  };

  // USE EFFECT
  useEffect(() => {
    fetchPost();
  }, [id]);

  // LOADING
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mb-5 bg-black text-white px-4 py-2 rounded-lg"
        >
          ← Back
        </button>

        {/* TITLE */}
        <h2 className="text-sm text-gray-500 mb-1">Post ID : {post?.id}</h2>

        <h1 className="text-3xl font-bold text-blue-600 mb-5">{post?.title}</h1>

        {/* BODY */}
        <p className="text-gray-700 leading-relaxed mb-6">{post?.body}</p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-gray-500 text-sm">User</p>

            <p className="font-bold">{post?.userId}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-gray-500 text-sm">Views</p>

            <p className="font-bold">{post?.views}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-gray-500 text-sm">Likes</p>

            <p className="font-bold text-green-500">
              👍 {post?.reactions?.likes}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-gray-500 text-sm">Dislikes</p>

            <p className="font-bold text-red-500">
              👎 {post?.reactions?.dislikes}
            </p>
          </div>
        </div>

        {/* TAGS */}
        <div>
          <h2 className="font-bold mb-3">Tags</h2>

          <div className="flex flex-wrap gap-2">
            {post?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
