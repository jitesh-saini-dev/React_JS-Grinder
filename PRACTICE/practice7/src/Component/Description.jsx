// import React from "react";
// import { useSelector } from "react-redux";

// const Description = () => {
//   const sely = useSelector((state) => state.products.data);
//   return (
//     <>
//       {sely.length === 0 ? (
//         <h1>No Data</h1>
//       ) : (
//         sely.map((x) => (
//           <div key={x.id}>
//             <h2>{x.id}</h2>
//             <h2>{x.description}</h2>
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default Description;

// refresh k bad bhi data show krana ho toh -------------

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prod } from "../Slice/apislice";

const Description = () => {
  const dispatch = useDispatch();

  const sely = useSelector((state) => state.products.data);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const result = await res.json();

    dispatch(prod(result));
  };

  useEffect(() => {
    if (sely.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <>
      {sely.map((x) => (
        <div key={x.id}>
          <h2>{x.id}</h2>

          <p>{x.description}</p>
        </div>
      ))}
    </>
  );
};

export default Description;
