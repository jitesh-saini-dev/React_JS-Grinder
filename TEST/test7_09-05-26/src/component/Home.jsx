// import { useDispatch, useSelector } from "react-redux";
// import { fetchdata } from "../Slice/productslice";
// import { useEffect, useState } from "react";
// import Productform from "./Productform";

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [formdata, setFormdata] = useState([]);

//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state.product.data);
//   console.log(selector);

//   useEffect(() => {
//     dispatch(fetchdata());
//   }, []);

//   function handleformdata(data) {
//     setFormdata(data);
//   }
//   const alldata = [...selector, formdata];

//   const filtereddata = alldata.filter((x) =>
//     x.title?.toLowerCase().includes(search.toLowerCase()),
//   );

//   console.log(filtereddata);

//   const sorteddata = [...filtereddata];

//   if (sort === "lowtohigh") {
//     sorteddata.sort((a, b) => a.price - b.price);
//   } else if (sort === "hightolow") {
//     sorteddata.sort((a, b) => b.price - a.price);
//   } else if (sort === "atoz") {
//     sorteddata.sort((a, b) => a.title.localeCompare(b.title));
//   } else if (sort === "ztoa") {
//     sorteddata.sort((a, b) => b.title.localeCompare(a.title));
//   }

//   return (
//     <>
//       <Productform setPass={handleformdata} />
//       <input
//         type="text"
//         placeholder="search here..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <select value={sort} onChange={(e) => setSort(e.target.value)}>
//         <option value="">sort</option>
//         <option value="lowtohigh">Low to High</option>
//         <option value="hightolow">High to Low</option>
//         <option value="atoz">A to Z</option>
//         <option value="ztoa">Z to A</option>
//       </select>

//       <div>
//         {filtereddata.length === 0 ? (
//           <div>No Result Found</div>
//         ) : sorteddata.length === 0 ? (
//           <div>No Data Found</div>
//         ) : (
//           sorteddata.map((x) => (
//             <div key={x.id}>
//               <h1>{x.id}</h1>
//               <h2>{x.title}</h2>
//               <img src={x.image} alt={x.title} style={{ width: "100px" }} />
//               <h3>{x.price}</h3>
//               <p>{x.description}</p>
//               <h4>{x.category}</h4>
//               <hr />
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../Slice/productslice";
import { useEffect, useState } from "react";
import Productform from "./Productform";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [extradata, setExtradata] = useState([]); // ← ADD

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  function handleformdata(data) {
    setExtradata([...extradata, data]); // ← ADD
  }

  const alldata = [...selector, ...extradata]; // ← ADD

  const filtereddata = alldata.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase()),
  );

  const sorteddata = [...filtereddata];

  if (sort === "lowtohigh") {
    sorteddata.sort((a, b) => a.price - b.price);
  } else if (sort === "hightolow") {
    sorteddata.sort((a, b) => b.price - a.price);
  } else if (sort === "atoz") {
    sorteddata.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "ztoa") {
    sorteddata.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <>
      <Productform setPass={handleformdata} />
      <input
        type="text"
        placeholder="search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">sort</option>
        <option value="lowtohigh">Low to High</option>
        <option value="hightolow">High to Low</option>
        <option value="atoz">A to Z</option>
        <option value="ztoa">Z to A</option>
      </select>

      <div>
        {filtereddata.length === 0 ? (
          <div>No Result Found</div>
        ) : sorteddata.length === 0 ? (
          <div>No Data Found</div>
        ) : (
          sorteddata.map((x, index) => (
            <div key={x.id || index}>
              {/* ← form data mein id "" hai isliye index fallback */}
              <h1>{x.id}</h1>
              <h2>{x.title}</h2>
              <img src={x.image} alt={x.title} style={{ width: "100px" }} />
              <h3>{x.price}</h3>
              <p>{x.description}</p>
              <h4>{x.category}</h4>
              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
