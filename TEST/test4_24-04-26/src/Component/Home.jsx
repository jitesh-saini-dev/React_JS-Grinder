import React, { useState } from "react";
import Child from "./Child";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  function handledata(data) {
    console.log(data);
    setData(data);
  }

  const filtereddata = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sorteddata = [...filtereddata];

  if (sort === "atoz") {
    sorteddata.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  } else if (sort === "ztoa") {
    sorteddata.sort((a, b) =>
      b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
    );
  } else if (sort === "rating") {
    sorteddata.sort((a, b) => b.rating - a.rating);
  } else if (sort === "Review") {
    sorteddata.sort((a, b) => b.reviewCount - a.reviewCount);
  }

  return (
    <>
      <Child setAllData={handledata} />

      <div>
        <input
          type="text"
          placeholder="search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <select
          name=""
          id=""
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">sort</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
          <option value="rating">Rating (High → Low)</option>
          <option value="Review ">Review Count (High → Low)</option>
        </select>
      </div>

      {sorteddata.length === 0 ? (
        <div>
          <h2>No data found</h2>
        </div>
      ) : (
        sorteddata.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} alt={item.name} className="itemimg" />
            </div>
            <h2>{item.name}</h2>
            <h3>{item.rating}</h3>
            <h3>{item.reviewCount}</h3>
            <button>View Detail</button>
          </div>
        ))
      )}
    </>
  );
};

export default Home;
