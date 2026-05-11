import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setProducts, setLoading } from "../Slice/Product";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // PRODUCTS REDUX
  const { users, products, loading } = useSelector((state) => state.products);

  // AUTH REDUX
  const { isLogin } = useSelector((state) => state.auth);

  // LOCAL STATE
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isTable, setIsTable] = useState(false);

  // USERS API
  const fetchUsers = async () => {
    dispatch(setLoading(true));

    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    dispatch(setUsers(data.users));
    dispatch(setLoading(false));
  };

  // PRODUCTS API
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    dispatch(setProducts(data.products));
  };

  // USE EFFECT
  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  // SEARCH
  const filteredData = users.filter((x) =>
    x.username.toLowerCase().includes(search.toLowerCase()),
  );

  // SORT
  const sorteddata = [...filteredData];

  if (sort === "lowtohigh") {
    sorteddata.sort((a, b) => a.age - b.age);
  } else if (sort === "hightolow") {
    sorteddata.sort((a, b) => b.age - a.age);
  } else if (sort === "atoz") {
    sorteddata.sort((a, b) => a.username.localeCompare(b.username));
  } else if (sort === "ztoa") {
    sorteddata.sort((a, b) => b.username.localeCompare(a.username));
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* SEARCH + SORT */}
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          placeholder="Search User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">Sort</option>
          <option value="atoz">A-Z</option>
          <option value="ztoa">Z-A</option>
          <option value="lowtohigh">Age Low</option>
          <option value="hightolow">Age High</option>
        </select>

        <button
          onClick={() => setIsTable(!isTable)}
          className="bg-blue-500 text-white px-4 rounded-lg"
        >
          {isTable ? "Card View" : "Table View"}
        </button>
      </div>

      {/* LOADING */}
      {loading ? (
        <h1 className="text-2xl text-center">Loading...</h1>
      ) : isTable ? (
        // TABLE VIEW
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-3">Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {sorteddata.map((x) => (
                <tr key={x.id} className="text-center border-b">
                  <td className="p-3">
                    <LazyLoadImage
                      src={
                        products.find((p) => p.id === x.id)?.thumbnail ||
                        x.image
                      }
                      alt={x.username}
                      effect="blur"
                      className="w-14 h-14 rounded-full mx-auto"
                    />
                  </td>

                  <td>{x.username}</td>
                  <td>{x.email}</td>
                  <td>{x.age}</td>

                  <td>
                    <button
                      onClick={() =>
                        isLogin ? navigate(`/user/${x.id}`) : navigate("/login")
                      }
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // CARD VIEW
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sorteddata.map((x) => (
            <div key={x.id} className="bg-white p-5 rounded-2xl shadow-lg">
              <LazyLoadImage
                src={products.find((p) => p.id === x.id)?.thumbnail || x.image}
                alt={x.username}
                effect="blur"
                className="w-24 h-24 rounded-full mx-auto"
              />

              <h2 className="text-center text-xl font-bold mt-3">
                {x.username}
              </h2>

              <p className="text-center text-gray-500">{x.email}</p>

              <p className="text-center mt-2">Age : {x.age}</p>

              <div className="flex flex-col gap-2 mt-4">
                {/* USER */}
                <button
                  onClick={() =>
                    isLogin ? navigate(`/user/${x.id}`) : navigate("/login")
                  }
                  className="bg-green-500 text-white py-2 rounded-lg"
                >
                  View Details
                </button>

                {/* CART */}
                <button
                  onClick={() =>
                    isLogin ? navigate(`/cart/${x.id}`) : navigate("/login")
                  }
                  className="bg-orange-500 text-white py-2 rounded-lg"
                >
                  Cart
                </button>

                {/* RECIPES */}
                <button
                  onClick={() =>
                    isLogin ? navigate(`/recipes/${x.id}`) : navigate("/login")
                  }
                  className="bg-purple-500 text-white py-2 rounded-lg"
                >
                  Recipes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
