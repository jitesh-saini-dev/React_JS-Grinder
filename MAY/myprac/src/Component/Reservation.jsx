import React, { useState, useEffect } from "react";

const Reservation = () => {
  // Time slots ka data
  const times = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  // Kaunsa time select kiya hai usko track karne ke liye
  const [selectedTime, setSelectedTime] = useState("");

  // Header Animation ke liye state
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Page load hone ke 100ms baad animation trigger hogi
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        paddingBottom: "80px",
      }}
    >
      {/* ── CSS Animation for Floating Text ── */}
      <style>
        {`
          .float-up-header {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 1s ease-out, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .float-up-header.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      {/* ── HEADER SECTION (Animated) ── */}
      <div
        className={`float-up-header ${headerVisible ? "visible" : ""}`}
        style={{
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "60px",
          paddingHorizontal: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            margin: "0 0 10px",
          }}
        >
          Reserve Your <span style={{ color: "#f4a2a2" }}>Table</span>
        </h1>
        <p style={{ color: "#888", fontSize: "16px", margin: 0 }}>
          Crispy twice-fried chicken with gochujang glaze
        </p>
      </div>

      {/* ── MAIN CONTENT (2 COLUMNS) ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* ── LEFT COLUMN (Image & Info Boxes) ── */}
        <div
          style={{
            flex: "1 1 450px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Main Dish Image */}
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid #2a2a2a",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694d04164e37760c9bfdbec8_reservation-img.webp"
              alt="Delicious Food"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* What to expect box */}
          <div
            style={{
              backgroundColor: "#1e1e1e",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                margin: "0 0 20px",
                fontWeight: 700,
              }}
            >
              What to expect
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "Modern interior with neon accents and curated music",
                "Full bar with signature cocktails and Asian spirits",
                "Perfect for dates, celebrations, and business dinners",
                "Live DJ on weekends (Fri & Sat)",
              ].map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    color: "#aaa",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      color: "#4caf50",
                      fontSize: "18px",
                      lineHeight: "1",
                    }}
                  >
                    •
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy box */}
          <div
            style={{
              backgroundColor: "#251e1c",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                margin: "0 0 12px",
                fontWeight: 700,
              }}
            >
              Cancellation Policy
            </h3>
            <p
              style={{
                color: "#aaa",
                fontSize: "14px",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              Free cancellation up to 2 hours before your reservation. Please
              call us if you need to make changes.
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN (Form) ── */}
        <div
          style={{
            flex: "1 1 500px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Full Name */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text"
              placeholder="Your Name Here"
              style={inputStyle}
            />
          </div>

          {/* Email & Phone Row */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ ...inputGroupStyle, flex: "1 1 200px" }}>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                placeholder="your@email.com"
                style={inputStyle}
              />
            </div>
            <div style={{ ...inputGroupStyle, flex: "1 1 200px" }}>
              <label style={labelStyle}>Phone *</label>
              <input
                type="tel"
                placeholder="+880 1234-567890"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Date & Guests Row */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ ...inputGroupStyle, flex: "1 1 200px" }}>
              <label style={labelStyle}>📅 Date</label>
              <input type="date" style={inputStyle} />
            </div>
            <div style={{ ...inputGroupStyle, flex: "1 1 200px" }}>
              <label style={labelStyle}>👥 Guests</label>
              <select style={inputStyle}>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
          </div>

          {/* Time Slots Grid */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Time</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: "12px",
              }}
            >
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  style={{
                    backgroundColor:
                      selectedTime === time ? "#f4a2a2" : "#2a2a2a",
                    color: selectedTime === time ? "#000" : "#fff",
                    border: "none",
                    padding: "12px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    fontWeight: selectedTime === time ? "600" : "400",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "4px",
                      border: `1px solid ${selectedTime === time ? "#000" : "#555"}`,
                      backgroundColor:
                        selectedTime === time ? "#000" : "transparent",
                    }}
                  />
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Select Occasion (Optional)</label>
            <input
              type="text"
              placeholder="Birthday, Anniversary, Business..."
              style={inputStyle}
            />
          </div>

          {/* Special Requests */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>💬 Special Requests (Optional)</label>
            <textarea
              placeholder="Dietary restrictions, preferred seating, decorations..."
              rows="4"
              style={{ ...inputStyle, resize: "vertical" }}
            ></textarea>
          </div>

          {/* Confirm Button */}
          <div style={{ marginTop: "10px" }}>
            <button
              style={{
                width: "100%",
                backgroundColor: "#f4a2a2", // Pink color from image
                color: "#111",
                fontWeight: 600,
                fontSize: "16px",
                padding: "18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "opacity 0.2s",
                boxShadow: "0 4px 0 #d98888", // Thoda 3d button effect
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Confirm Reservation
            </button>
            <p
              style={{
                textAlign: "center",
                color: "#666",
                fontSize: "13px",
                marginTop: "16px",
              }}
            >
              By confirming, you agree to our cancellation policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Common Styles (taaki code repeat na ho)
const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  color: "#aaa",
  fontSize: "13px",
  fontWeight: "500",
};

const inputStyle = {
  backgroundColor: "#2a2a2a",
  border: "1px solid #333",
  color: "#fff",
  padding: "16px",
  borderRadius: "10px",
  fontSize: "15px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default Reservation;
