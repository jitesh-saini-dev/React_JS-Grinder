import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Slice/apislice";

const Home = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="100" />

          <h2>{item.title}</h2>

          <h3>{item.price}</h3>

          <p>{item.description}</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
