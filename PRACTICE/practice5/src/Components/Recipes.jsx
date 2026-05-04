// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const Recipes = () => {
//   const { id } = useParams(); // user ki id
//   const navigate = useNavigate();
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       const res = await fetch(`https://dummyjson.com/recipes/${id}`); // same id
//       const data = await res.json();
//       setRecipe(data);
//       setLoading(false);
//     };
//     fetchRecipe();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="details">
//       <button onClick={() => navigate(-1)} className="backbtn">
//         Back
//       </button>
//       <h2>{recipe.id}</h2>

//       <LazyLoadImage
//         src={recipe.image}
//         alt={recipe.name}
//         style={{ width: "200px", borderRadius: "10px" }}
//         effect="blur"
//         wrapperProps={{
//           style: { transitionDelay: "1s" },
//         }}
//       />
//       <h2>{recipe.name}</h2>
//       <p>
//         <strong>Cuisine:</strong> {recipe.cuisine}
//       </p>
//       <p>
//         <strong>Difficulty:</strong> {recipe.difficulty}
//       </p>
//       <p>
//         <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
//       </p>
//       <p>
//         <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
//       </p>
//       <p>
//         <strong>Servings:</strong> {recipe.servings}
//       </p>
//       <p>
//         <strong>Calories:</strong> {recipe.caloriesPerServing} kcal
//       </p>
//       <p>
//         <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount}
//         reviews)
//       </p>
//       <p>
//         <strong>Meal Type:</strong> {recipe.mealType?.join(", ")}
//       </p>
//       <p>
//         <strong>Tags:</strong> {recipe.tags?.join(", ")}
//       </p>
//       <h3> Ingredients</h3>
//       <div>
//         {recipe.ingredients.map((ing, i) => (
//           <p key={i}>{ing}</p>
//         ))}
//       </div>
//       <h3> Instructions</h3>
//       <div>
//         {recipe.instructions.map((step, i) => (
//           <p key={i}>{step}</p>
//         ))}
//       </div>

//       <button
//         onClick={() => navigate(`/posts/${recipe.id}`)}
//         className="backbtn"
//       >
//         Posts
//       </button>
//     </div>
//   );
// };

// export default Recipes;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState(null);
  const [postsLoading, setPostsLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // Posts ke liye alag search aur sort state
  const [postSearch, setPostSearch] = useState("");
  const [postSort, setPostSort] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setRecipes([data]);
      setLoading(false);
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  // Recipe filter by name
  const filteredData = recipes.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedData = [...filteredData];

  if (sort === "lowtohigh") {
    sortedData.sort((a, b) => a.rating - b.rating);
  } else if (sort === "hightolow") {
    sortedData.sort((a, b) => b.rating - a.rating);
  } else if (sort === "atoz") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "ztoa") {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Posts filter by title
  const filteredPosts = posts
    ? posts.filter((p) =>
        p.title.toLowerCase().includes(postSearch.toLowerCase()),
      )
    : [];

  const sortedPosts = [...filteredPosts];

  if (postSort === "atoz") {
    sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (postSort === "ztoa") {
    sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (postSort === "lowtohigh") {
    sortedPosts.sort((a, b) => a.views - b.views);
  } else if (postSort === "hightolow") {
    sortedPosts.sort((a, b) => b.views - a.views);
  }

  return (
    <div className="details">
      <button onClick={() => navigate(-1)} className="backbtn">
        Back
      </button>

      {/* Recipe Search */}
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

      {/* Recipe Sort */}
      <div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
          <option value="lowtohigh">Rating: Low to High</option>
          <option value="hightolow">Rating: High to Low</option>
        </select>
      </div>

      {/* Recipe Map */}
      {sortedData.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.id}</h2>

          <LazyLoadImage
            src={recipe.image}
            alt={recipe.name}
            style={{ width: "200px", borderRadius: "10px" }}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
          />

          <h2>{recipe.name}</h2>

          <p>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </p>
          <p>
            <strong>Difficulty:</strong> {recipe.difficulty}
          </p>
          <p>
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
          </p>
          <p>
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
          <p>
            <strong>Calories:</strong> {recipe.caloriesPerServing} kcal
          </p>
          <p>
            <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount}{" "}
            reviews)
          </p>
          <p>
            <strong>Meal Type:</strong> {recipe.mealType?.join(", ")}
          </p>
          <p>
            <strong>Tags:</strong> {recipe.tags?.join(", ")}
          </p>

          <h3>Ingredients</h3>
          <div>
            {recipe.ingredients.map((ing, i) => (
              <p key={i}>{ing}</p>
            ))}
          </div>

          <h3>Instructions</h3>
          <div>
            {recipe.instructions.map((step, i) => (
              <p key={i}>{step}</p>
            ))}
          </div>

          {/* Posts Button */}
          <button
            onClick={async () => {
              const next = !showPosts;
              setShowPosts(next);

              if (next && !posts) {
                setPostsLoading(true);
                // recipe.id ko userId maanke us user ke saare posts fetch
                const res = await fetch(
                  `https://dummyjson.com/posts/user/${recipe.id}`,
                );
                const data = await res.json();
                setPosts(data.posts); // array milega
                setPostsLoading(false);
              }
            }}
            className="backbtn"
          >
            {showPosts ? "Hide Posts" : "Posts"}
          </button>

          {/* Posts Section */}
          {showPosts && (
            <div className="details" style={{ marginTop: "20px" }}>
              <h3>Posts</h3>

              {postsLoading && <p>Loading posts...</p>}

              {posts && (
                <>
                  {/* Posts Search */}
                  <div className="searchbox">
                    <input
                      type="text"
                      placeholder="Search by title..."
                      value={postSearch}
                      onChange={(e) => setPostSearch(e.target.value)}
                      className="search"
                    />
                  </div>

                  {/* Posts Sort */}
                  <div>
                    <select
                      value={postSort}
                      onChange={(e) => setPostSort(e.target.value)}
                    >
                      <option value="">Sort</option>
                      <option value="atoz">A - Z</option>
                      <option value="ztoa">Z - A</option>
                      <option value="lowtohigh">Views: Low to High</option>
                      <option value="hightolow">Views: High to Low</option>
                    </select>
                  </div>

                  {/* Posts Map */}
                  {sortedPosts.length === 0 ? (
                    <p>No data found.</p>
                  ) : (
                    sortedPosts.map((post) => (
                      <div key={post.id}>
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
                    ))
                  )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Recipes;
