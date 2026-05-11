import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../Slice/productslice";
import { addtocart } from "../Slice/cartslice";
const Userdetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sely = useSelector((state) => state.prods.singledata);
  console.log(sely);
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id]);
  return (
    <>
      <div>
        <div key={sely.id}>
          <p>{sely.id}</p>
          <p>{sely.title}</p>
          <button onClick={() => dispatch(addtocart(sely))}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Userdetail;
