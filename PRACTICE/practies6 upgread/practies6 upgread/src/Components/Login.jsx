import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { loginUser, logoutUser } from "../Slice/authSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX DATA
  const { users, user, isLogin } = useSelector((state) => state.auth);

  // STATE
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // FIND USER
    const existUser = users.find(
      (x) => x.email === form.email && x.password === form.password,
    );

    // INVALID
    if (!existUser) {
      alert("Invalid Email or Password");

      return;
    }

    // LOGIN
    dispatch(loginUser(existUser));

    alert("Login Success");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center">Login</h1>

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

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full p-3 border rounded-xl"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* BUTTON */}
          <button className="bg-blue-500 text-white py-3 rounded-xl">
            Login
          </button>
        </form>

        {/* LOGIN USER */}
        {isLogin && (
          <div className="mt-5 border-t pt-5">
            <h2 className="text-xl font-bold">Welcome {user.name}</h2>

            <p className="text-gray-500">{user.email}</p>

            <button
              onClick={() => {
                dispatch(logoutUser());

                navigate("/login");
              }}
              className="mt-4 bg-red-500 text-white px-5 py-2 rounded-xl"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
