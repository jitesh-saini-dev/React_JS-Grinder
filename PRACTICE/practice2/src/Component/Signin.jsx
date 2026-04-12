import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem("chacha");

    if (!storedData) {
      alert("You Have to SignUp First!");
      return;
    }

    const result = JSON.parse(storedData);

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
    }
  };

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="signin-wrapper">
        <div className="signin-container">
          <div className="signin-header">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="signin-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setform({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="signin-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setform({ ...form, password: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="signin-btn">
              Login
            </button>
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
                <p>
                  <strong>DOB:</strong> {userData.dob}
                </p>
                <p>
                  <strong>Gender:</strong> {userData.gender}
                </p>
                <p>
                  <strong>Country:</strong> {userData.country}
                </p>
                <p>
                  <strong>Experience:</strong> {userData.experience} Years
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
                  setform({ email: "", password: "" });
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signin;
