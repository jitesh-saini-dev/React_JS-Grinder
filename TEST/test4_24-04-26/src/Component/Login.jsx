import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState(null);

  const navigate=useNavigate();

  function handlechange(e) {
    e.preventDefault();
    const result = JSON.parse(localStorage.getItem("user"));
    console.log(result);


      if (!result) {
        alert("You Have to SignUp First!");
        navigate("/signup")
        return;
      }

      if (form.email !== result.email && form.password !== result.password) {
        alert("Email & Password not matched!");
        setUserData(null);
      } else if (form.email !== result.email) {
        alert("Email not matched!");
        setUserData(null);
      } else if (form.password !== result.password) {
        alert("Password not matched!");
        setUserData(null);
      } else {
        alert("Login Successfully 🔥");
        setUserData(result);
        localStorage.setItem("token", true);
      }

      setForm({
        email: "",
        password: "",
      });
    }
  

  return (
    <div>
      <form onSubmit={handlechange}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} required
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} required
        />

        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div className="user-profile-card">
          <h3>🎉 User Details 🎉</h3>

          <div className="profile-grid">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Age:</strong> {userData.age}
            </p>
            <p>
              <strong>Phone:</strong> {userData.phone}
            </p>
         
          
          </div>

          <div className="profile-address">
            <p>
              <strong>Address:</strong> {userData.address}
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={() => {
              setUserData(null);
              setForm({ email: "", password: "" });
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
