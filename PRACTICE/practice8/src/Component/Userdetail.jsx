import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../Slice/productslice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Userdetail = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.products.singleid);
  console.log(selector);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id]);

  return (
    <>
      {
        <div>
          <p>{selector.id}</p>
          <p>{selector.title}</p>
        </div>
      }
    </>
  );
};

export default Userdetail;
