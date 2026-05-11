import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { signupUser } from "../Slice/authSlice";

const Signup = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const [error, setError] = useState({});

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    const err = {};

    if (!form.name) {

      err.name = "Name Required";

    }

    if (!form.email) {

      err.email = "Email Required";

    }

    if (!form.password) {

      err.password = "Password Required";

    }

    setError(err);

    // SUCCESS
    if (Object.keys(err).length === 0) {

      dispatch(signupUser(form));

      alert("Signup Success");

      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-br from-blue-50 to-purple-100">

      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <h1 className="text-3xl font-bold text-center">
            Signup
          </h1>

          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {error.name && (

            <p className="text-red-500 text-sm">
              {error.name}
            </p>
          )}

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {error.email && (

            <p className="text-red-500 text-sm">
              {error.email}
            </p>
          )}

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {error.password && (

            <p className="text-red-500 text-sm">
              {error.password}
            </p>
          )}

          {/* AGE */}
          <input
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) =>
              setForm({
                ...form,
                age: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {/* PHONE */}
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {/* CITY */}
          <input
            type="text"
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({
                ...form,
                city: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {/* STATE */}
          <input
            type="text"
            placeholder="State"
            value={form.state}
            onChange={(e) =>
              setForm({
                ...form,
                state: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {/* COUNTRY */}
          <input
            type="text"
            placeholder="Country"
            value={form.country}
            onChange={(e) =>
              setForm({
                ...form,
                country: e.target.value,
              })
            }
            className="p-3 border rounded-xl"
          />

          {/* BUTTON */}
          <button className="bg-purple-500 text-white py-3 rounded-xl">
            Signup
          </button>

        </form>

      </div>

    </div>
  );
};

export default Signup;