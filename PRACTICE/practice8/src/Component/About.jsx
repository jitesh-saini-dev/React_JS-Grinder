import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Slice/productslice";

const About = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.products.data);
  console.log(selector);
  return (
    <>
      {selector.map((x) => (
        <div key={x.id}>
          <p>{x.title}</p>
        </div>
      ))}
    </>
  );
};

export default About;
