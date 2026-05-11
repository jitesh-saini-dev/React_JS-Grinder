import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import {
  setUser,
  setLoading,
} from "../Slice/userSlice";

const UserDetail = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX DATA
  const {
    user,
    loading,
  } = useSelector((state) => state.user);

  // STATE
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  // FETCH USER
  const fetchUser = async () => {

    dispatch(setLoading(true));

    const res = await fetch(
      `https://dummyjson.com/users/${id}`
    );

    const data = await res.json();

    dispatch(setUser(data));

    dispatch(setLoading(false));
  };

  // USE EFFECT
  useEffect(() => {

    fetchUser();

  }, [id]);

  // LOADING
  if (loading || !user) {

    return (
      <div className="flex justify-center items-center h-screen text-2xl animate-pulse">
        Loading...
      </div>
    );
  }

  // FILTER
  const filteredData = [user].filter((u) =>

    `${u.firstName} ${u.lastName} ${u.maidenName || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // SORT
  const sortedData = [...filteredData];

  if (sort === "lowtohigh") {

    sortedData.sort(
      (a, b) => a.age - b.age
    );

  }

  else if (sort === "hightolow") {

    sortedData.sort(
      (a, b) => b.age - a.age
    );

  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-100">

      <div className="max-w-5xl mx-auto">

        {/* SEARCH + SORT */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded-2xl shadow-lg">

          <input
            type="text"
            placeholder="Search User"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 p-3 border rounded-xl"
          />

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            className="p-3 border rounded-xl"
          >

            <option value="">
              Sort
            </option>

            <option value="lowtohigh">
              Age Low
            </option>

            <option value="hightolow">
              Age High
            </option>

          </select>

        </div>

        {/* DATA */}
        {sortedData.length > 0 ? (

          sortedData.map((user) => (

            <div
              key={user.id}
              className="bg-white shadow-xl rounded-2xl p-6"
            >

              {/* BACK */}
              <button
                onClick={() => navigate(-1)}
                className="mb-5 bg-black text-white px-4 py-2 rounded-lg"
              >
                ← Back
              </button>

              {/* PROFILE */}
              <div className="flex flex-col items-center mb-6">

                <LazyLoadImage
                  src={user.image}
                  alt={user.username}
                  effect="blur"
                  className="w-32 h-32 rounded-full border-4 border-blue-500 mb-3"
                />

                <h1 className="text-3xl font-bold">

                  {user.firstName}{" "}
                  {user.lastName}{" "}
                  {user.maidenName}

                </h1>

                <p className="text-gray-500">

                  @{user.username}

                </p>

              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* BASIC */}
                <div className="bg-gray-100 p-4 rounded-xl">

                  <h2 className="font-bold mb-3">
                    Basic Info
                  </h2>

                  <p>Email : {user.email}</p>

                  <p>Phone : {user.phone}</p>

                  <p>Age : {user.age}</p>

                  <p>Gender : {user.gender}</p>

                  <p>Blood : {user.bloodGroup}</p>

                  <p>Height : {user.height}</p>

                  <p>Weight : {user.weight}</p>

                </div>

                {/* ADDRESS */}
                <div className="bg-gray-100 p-4 rounded-xl">

                  <h2 className="font-bold mb-3">
                    Address
                  </h2>

                  <p>
                    {user.address?.address}
                  </p>

                  <p>
                    {user.address?.city}
                  </p>

                  <p>
                    {user.address?.state}
                  </p>

                  <p>
                    {user.address?.country}
                  </p>

                </div>

                {/* COMPANY */}
                <div className="bg-gray-100 p-4 rounded-xl">

                  <h2 className="font-bold mb-3">
                    Company
                  </h2>

                  <p>
                    {user.company?.name}
                  </p>

                  <p>
                    {user.company?.department}
                  </p>

                  <p>
                    {user.company?.title}
                  </p>

                </div>

                {/* BANK */}
                <div className="bg-gray-100 p-4 rounded-xl">

                  <h2 className="font-bold mb-3">
                    Bank
                  </h2>

                  <p>
                    {user.bank?.cardType}
                  </p>

                  <p>
                    {user.bank?.cardExpire}
                  </p>

                  <p>
                    {user.bank?.currency}
                  </p>

                </div>

                {/* CRYPTO */}
                <div className="bg-gray-100 p-4 rounded-xl">

                  <h2 className="font-bold mb-3">
                    Crypto
                  </h2>

                  <p>
                    {user.crypto?.coin}
                  </p>

                  <p>
                    {user.crypto?.network}
                  </p>

                </div>

                {/* OTHER */}
                <div className="bg-gray-100 p-4 rounded-xl">

                  <h2 className="font-bold mb-3">
                    Other
                  </h2>

                  <p>
                    IP : {user.ip}
                  </p>

                  <p>
                    MAC : {user.macAddress}
                  </p>

                </div>

              </div>

            </div>
          ))
        ) : (

          <div className="text-center text-2xl font-bold mt-20">
            No Data Found
          </div>
        )}

      </div>

    </div>
  );
};

export default UserDetail;