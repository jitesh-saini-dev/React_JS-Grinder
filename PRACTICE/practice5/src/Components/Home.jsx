import { useState, useEffect } from "react";
import "./Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [isTable, setIsTable] = useState(false);

  const navigate = useNavigate();

  const dataimg = [
    { id: 1, image_url: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, image_url: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, image_url: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, image_url: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, image_url: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, image_url: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 7, image_url: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 8, image_url: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 9, image_url: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 10, image_url: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 11, image_url: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 12, image_url: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: 13, image_url: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 14, image_url: "https://randomuser.me/api/portraits/women/14.jpg" },
    { id: 15, image_url: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 16, image_url: "https://randomuser.me/api/portraits/women/16.jpg" },
    { id: 17, image_url: "https://randomuser.me/api/portraits/men/17.jpg" },
    { id: 18, image_url: "https://randomuser.me/api/portraits/women/18.jpg" },
    { id: 19, image_url: "https://randomuser.me/api/portraits/men/19.jpg" },
    { id: 20, image_url: "https://randomuser.me/api/portraits/women/20.jpg" },
    { id: 21, image_url: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 22, image_url: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 23, image_url: "https://randomuser.me/api/portraits/men/23.jpg" },
    { id: 24, image_url: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 25, image_url: "https://randomuser.me/api/portraits/men/25.jpg" },
    { id: 26, image_url: "https://randomuser.me/api/portraits/women/26.jpg" },
    { id: 27, image_url: "https://randomuser.me/api/portraits/men/27.jpg" },
    { id: 28, image_url: "https://randomuser.me/api/portraits/women/28.jpg" },
    { id: 29, image_url: "https://randomuser.me/api/portraits/men/29.jpg" },
    { id: 30, image_url: "https://randomuser.me/api/portraits/women/30.jpg" },
  ];

  // ✅ Fix 2: fallback null rakha, x scope mein nahi hai yahan
  const getImage = (id) => {
    const found = dataimg.find((item) => item.id === id);
    return found ? found.image_url : null;
  };

  const fetchdata = async () => {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/users");
    const datas = await res.json();
    setData(datas.users);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const filteredData = data.filter((x) =>
    x.username.toLowerCase().includes(search.toLowerCase()),
  );

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
    <>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search by username or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

      <div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
          <option value="lowtohigh">Age: Low to High</option>
          <option value="hightolow">Age: High to Low</option>
        </select>
      </div>

      <button className="btns" onClick={() => setIsTable(!isTable)}>
        {isTable ? "Card View" : "Table View"}
      </button>

      <main>
        {loading ? (
          <div>Loading...</div>
        ) : filteredData.length === 0 ? (
          <p>No Data Found</p>
        ) : isTable ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Username</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorteddata.map((x) => (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>
                    {/* ✅ Fix 3: Table view mein bhi getImage lagaya */}
                    <LazyLoadImage
                      src={getImage(x.id)}
                      alt={x.username}
                      effect="blur"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{x.username}</td>
                  <td>{x.email}</td>
                  <td>{x.age}</td>
                  <td>{x.phone}</td>
                  <td>
                    <button
                      className="btns"
                      onClick={() => {
                        const token = localStorage.getItem("user");
                        if (!token) {
                          navigate("/login");
                        } else {
                          navigate(`/user/${x.id}`);
                        }
                      }}
                    >
                      View
                    </button>
                    <button
                      className="btns"
                      onClick={() => {
                        const token = localStorage.getItem("user");
                        if (!token) {
                          navigate("/login");
                        } else {
                          navigate(`/recipes/${x.id}`);
                        }
                      }}
                    >
                      Recipes
                    </button>
                    <button
                      className="btns"
                      onClick={() => {
                        const token = localStorage.getItem("user");
                        if (!token) {
                          navigate("/login");
                        } else {
                          navigate(`/cart/${x.id}`);
                        }
                      }}
                    >
                      Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          // ✅ Fix 1: dataimg.map() loop hataya, seedha getImage(x.id) use kiya
          sorteddata.map((x) => (
            <div key={x.id} className="card">
              <LazyLoadImage

              className="cardimg"
                src={getImage(x.id)}
                alt={x.username}
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "1s" } }}
              />
              <h3>{x.username}</h3>
              <h4>{x.email}</h4>
              <h4>Age: {x.age}</h4>
              <p>{x.phone}</p>

              <div className="cardbtns">
                <button
                  className="btns"
                  onClick={() => {
                    const token = localStorage.getItem("user");
                    if (!token) {
                      navigate("/login");
                    } else {
                      navigate(`/user/${x.id}`);
                    }
                  }}
                >
                  View Details
                </button>

                <button
                  className="btns"
                  onClick={() => {
                    const token = localStorage.getItem("user");
                    if (!token) {
                      navigate("/login");
                    } else {
                      navigate(`/cart/${x.id}`);
                    }
                  }}
                >
                  Cart
                </button>

                <button
                  className="btns"
                  onClick={() => {
                    const token = localStorage.getItem("user");
                    if (!token) {
                      navigate("/login");
                    } else {
                      navigate(`/recipes/${x.id}`);
                    }
                  }}
                >
                  Recipes
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default Home;
