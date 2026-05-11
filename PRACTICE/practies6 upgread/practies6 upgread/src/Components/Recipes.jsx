import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import { useDispatch, useSelector } from "react-redux";

import {
  setRecipe,
  setPost,
  setLoading,
} from "../Slice/recipeSlice";

const Recipes = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX DATA
  const {
    recipe,
    post,
    loading,
  } = useSelector((state) => state.recipe);

  // STATE
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const [showpost, setshowpost] = useState(false);

  // FETCH RECIPE
  const fetchRecipe = async () => {

    dispatch(setLoading(true));

    const res = await fetch(
      `https://dummyjson.com/recipes/${id}`
    );

    const data = await res.json();

    dispatch(setRecipe(data));

    dispatch(setLoading(false));
  };

  // FETCH POST
  const fetchPost = async (id) => {

    const res = await fetch(
      `https://dummyjson.com/posts/${id}`
    );

    const data = await res.json();

    dispatch(setPost(data));

    setshowpost(true);
  };

  // USE EFFECT
  useEffect(() => {

    fetchRecipe();

  }, [id]);

  // LOADING
  if (loading) {

    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  // SEARCH
  const searchText = search.toLowerCase();

  const isMatch =
    recipe?.name?.toLowerCase().includes(searchText) ||
    recipe?.cuisine?.toLowerCase().includes(searchText) ||
    recipe?.tags?.some((t) =>
      t.toLowerCase().includes(searchText)
    ) ||
    recipe?.mealType?.some((m) =>
      m.toLowerCase().includes(searchText)
    ) ||
    recipe?.ingredients?.some((i) =>
      i.toLowerCase().includes(searchText)
    ) ||
    recipe?.instructions?.some((ins) =>
      ins.toLowerCase().includes(searchText)
    );

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <div className="max-w-5xl mx-auto">

        {/* SEARCH */}
        <div className="flex gap-3 mb-5">

          <input
            type="text"
            placeholder="Search Recipe"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border p-2 rounded-lg flex-1"
          />

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            className="border p-2 rounded-lg"
          >
            <option value="">
              Sort
            </option>

            <option value="asc">
              A-Z
            </option>

            <option value="desc">
              Z-A
            </option>

          </select>

        </div>

        {/* NO DATA */}
        {!isMatch ? (

          <h1 className="text-center text-2xl">
            No Data Found
          </h1>

        ) : (

          <div className="bg-white rounded-2xl shadow-lg p-6">

            {/* BACK */}
            <button
              onClick={() => navigate(-1)}
              className="bg-black text-white px-4 py-2 rounded-lg mb-5"
            >
              Back
            </button>

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-center mb-5">
              {recipe?.name}
            </h1>

            {/* IMAGE */}
            <div className="flex justify-center mb-5">

              <LazyLoadImage
                src={recipe?.image}
                alt={recipe?.name}
                effect="blur"
                className="w-72 h-72 object-cover rounded-2xl"
              />

            </div>

            {/* INFO */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">

              <div className="bg-gray-100 p-3 rounded-xl text-center">
                Cuisine
                <p className="font-bold">
                  {recipe?.cuisine}
                </p>
              </div>

              <div className="bg-gray-100 p-3 rounded-xl text-center">
                Difficulty
                <p className="font-bold">
                  {recipe?.difficulty}
                </p>
              </div>

              <div className="bg-gray-100 p-3 rounded-xl text-center">
                Rating
                <p className="font-bold">
                  ⭐ {recipe?.rating}
                </p>
              </div>

            </div>

            {/* TAGS */}
            <div className="mb-5">

              <h2 className="text-xl font-bold mb-3">
                Tags
              </h2>

              <div className="flex flex-wrap gap-2">

                {recipe?.tags?.map((tag, i) => (

                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>

            {/* INGREDIENTS */}
            <div className="mb-5">

              <h2 className="text-xl font-bold mb-3">
                Ingredients
              </h2>

              <div className="grid md:grid-cols-2 gap-3">

                {recipe?.ingredients?.map((ing, i) => (

                  <p
                    key={i}
                    className="bg-gray-100 p-2 rounded-lg"
                  >
                    {ing}
                  </p>
                ))}

              </div>

            </div>

            {/* INSTRUCTIONS */}
            <div className="mb-5">

              <h2 className="text-xl font-bold mb-3">
                Instructions
              </h2>

              <div className="flex flex-col gap-3">

                {recipe?.instructions?.map((step, i) => (

                  <p
                    key={i}
                    className="bg-gray-100 p-3 rounded-lg"
                  >
                    {i + 1}. {step}
                  </p>
                ))}

              </div>

            </div>

            {/* SHOW POST */}
            <div className="flex justify-center">

              <button
                onClick={() =>
                  showpost
                    ? setshowpost(false)
                    : fetchPost(recipe.id)
                }
                className="bg-purple-500 text-white px-6 py-2 rounded-xl"
              >
                {showpost
                  ? "Hide Post"
                  : "Show Post"}
              </button>

            </div>

          </div>
        )}

        {/* POST */}
        {showpost && post && (

          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

            <h1 className="text-2xl font-bold mb-3">
              {post.title}
            </h1>

            <p className="text-gray-600 mb-5">
              {post.body}
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-gray-100 p-3 rounded-xl text-center">
                Views
                <p>{post.views}</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-xl text-center">
                Likes
                <p>
                  👍 {post.reactions?.likes}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default Recipes;