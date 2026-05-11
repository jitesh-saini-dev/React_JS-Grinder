import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Slice/productslice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectcategory, setselectcategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.prods.data);
  console.log(selector);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const filtereddata = selector.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase()),
  );

  const categories = [...new Set(selector.map((x) => x.category))];

  const genders = selectcategory
    ? filtereddata.filter((x) => x.category === selectcategory)
    : filtereddata;

  const sorteddata = [...genders];

  if (sort === "lowtohigh") {
    sorteddata.sort((a, b) => a.price - b.price);
  } else if (sort === "hightolow") {
    sorteddata.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <input
        type="text"
        placeholder="search here..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="lowtohigh">low to high</option>
        <option value="hightolow">High to Low</option>
      </select>

      <button onClick={() => setselectcategory("")}>All</button>
      {categories.map((cat, i) => (
        <button key={i} onClick={() => setselectcategory(cat)}>
          {cat}
        </button>
      ))}
      <div>
        {sorteddata.map((x) => (
          <div key={x.id}>
            <p>{x.id}</p>
            <p>{x.title}</p>
            <button onClick={() => navigate(`/user/${x.id}`)}>
              view detail
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
