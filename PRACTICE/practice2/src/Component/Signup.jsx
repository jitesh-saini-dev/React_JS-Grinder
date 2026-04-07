import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    dob: "",
    address: "",
    country: "",
    gender: "",
    experience: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(">>>>>> Submit Hua Form Data:", form);
    localStorage.setItem("Signup", JSON.stringify(form));

    setform({
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
      dob: "",
      address: "",
      country: "",
      gender: "",
      experience: 0,
    });

    alert("Your Form Submitted 🔥");
  };

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Join us today! Fill in your details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group full-width">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Name..."
                value={form.name}
                onChange={(e) => setform({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="abc@example.com"
                value={form.email}
                onChange={(e) => setform({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setform({ ...form, password: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                placeholder="Enter your age..."
                value={form.age}
                onChange={(e) => setform({ ...form, age: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 99999 99999"
                value={form.phone}
                onChange={(e) => setform({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => setform({ ...form, dob: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <select
                value={form.country}
                onChange={(e) => setform({ ...form, country: e.target.value })}
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div className="form-group radio-group">
              <label>Gender</label>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={(e) =>
                      setform({ ...form, gender: e.target.value })
                    }
                  />
                  Male
                </label>

                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={(e) =>
                      setform({ ...form, gender: e.target.value })
                    }
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="form-group slider-group">
              <label>
                Experience:
                <span className="slider-value">{form.experience} Years</span>
              </label>

              <input
                type="range"
                min="0"
                max="15"
                value={form.experience}
                onChange={(e) =>
                  setform({ ...form, experience: e.target.value })
                }
              />
            </div>

            <div className="form-group full-width">
              <label>Address</label>
              <textarea
                placeholder="Your complete address..."
                value={form.address}
                onChange={(e) => setform({ ...form, address: e.target.value })}
              />
            </div>

            <button type="submit" className="submit-btn full-width">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
