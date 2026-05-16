// import React from "react";

// const Home = () => {
//   return (
//     <main>
//       <div>
//         <h3>Now delivering till 2 AM</h3>
//       </div>

//       <div>
//         <h1>Pan-Asian Crave</h1>
//       </div>
//       <div>
//         <h1>Delivered in 30 Minutes</h1>
//       </div>
//       <div>
//         <h1>or Enjoy Here</h1>
//       </div>
//       <div>
//         <p>
//           Freshly crafted sushi, poke bowls & bao. Dine in or get your Pan-Asian
//           cravings delivered in just 30 minutes.
//         </p>
//       </div>
//       <div>
//         <button>Order Delivery Now</button>
//         <button>Reserve Table</button>
//         <button>Order Takeaway</button>
//       </div>
//       <div>
//         <h3>4.9 (2,847 reviews)</h3>
//         <h3>Free delivery over ৳1500</h3>
//         <h3>Open till 2 AM</h3>
//       </div>
//     </main>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";

const Home = () => {
  // Step 1: ek state jo page load hone ke baad true ho jaaye
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 100ms baad true kar do — taaki animation trigger ho
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#161616",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
        position: "relative",   // floating images ke liye zaroori
        overflow: "hidden",
      }}
    >

      {/* ── Floating Images ─────────────────────────────── */}

      {/* Tomato — top left */}
      <img
        src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg"
        alt=""
        className="floating"
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "110px",
        }}
      />

      {/* Tomato — top right (mirror kiya scaleX se) */}
      <img
        src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg"
        alt=""
        className="floating-slow"
        style={{
          position: "absolute",
          top: "18%",
          right: "5%",
          width: "100px",
          transform: "scaleX(-1)", // mirror
        }}
      />

      {/* Leaf — bottom left */}
      <img
        src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp"
        alt=""
        className="floating"
        style={{
          position: "absolute",
          bottom: "25%",
          left: "7%",
          width: "90px",
        }}
      />

      {/* Leaf — bottom right */}
      <img
        src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp"
        alt=""
        className="floating-slow"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "6%",
          width: "105px",
          transform: "scaleX(-1) rotate(15deg)",
        }}
      />

      {/* ── Main Content ────────────────────────────────── */}

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "#1f1f1f",
          border: "1px solid #2e2e2e",
          borderRadius: "999px",
          padding: "8px 20px",
          fontSize: "14px",
          color: "#ccc",
          marginBottom: "28px",
          // animation
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0s, transform 0.8s ease 0s",
        }}
      >
        🔥 Now delivering till 2 AM
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "0 0 24px",
          // animation — thoda delay
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
        }}
      >
        Pan-Asian Crave
        <br />
        <span style={{ color: "#c27b7b" }}>Delivered in 30 Minutes</span>
        <br />
        or Enjoy Here
      </h1>

      {/* Subtext */}
      <p
        style={{
          color: "#888",
          fontSize: "16px",
          lineHeight: 1.7,
          maxWidth: "500px",
          marginBottom: "36px",
          // animation — aur thoda delay
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}
      >
        Freshly crafted sushi, poke bowls &amp; bao. Dine in or get your
        Pan-Asian cravings delivered in just 30 minutes.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "40px",
          // animation
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
        }}
      >
        <button style={{
          padding: "14px 28px",
          background: "#f4a4a4",
          color: "#000",
          border: "none",
          borderRadius: "12px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          fontFamily: "'Poppins', sans-serif",
        }}>
          🚚 Order Delivery Now
        </button>

        <button style={{
          padding: "14px 28px",
          background: "#242424",
          color: "#fff",
          border: "1px solid #333",
          borderRadius: "12px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          fontFamily: "'Poppins', sans-serif",
        }}>
          🪑 Reserve Table
        </button>

        <button style={{
          padding: "14px 28px",
          background: "#242424",
          color: "#fff",
          border: "1px solid #333",
          borderRadius: "12px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          fontFamily: "'Poppins', sans-serif",
        }}>
          🛍️ Order Takeaway
        </button>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          color: "#666",
          fontSize: "14px",
          // animation
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
        }}
      >
        <span>⭐ 4.9 (2,847 reviews)</span>
        <span style={{ color: "#2e2e2e" }}>|</span>
        <span>🚚 Free delivery over ৳1500</span>
        <span style={{ color: "#2e2e2e" }}>|</span>
        <span>🕑 Open till 2 AM</span>
      </div>

      {/* ── CSS for floating animation ── */}
      <style>{`
        .floating {
          animation: floatUpDown 3s ease-in-out infinite;
        }
        .floating-slow {
          animation: floatUpDown 4s ease-in-out infinite;
        }
        @keyframes floatUpDown {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        /* scaleX wale ke liye override */
        img[style*="scaleX(-1)"].floating-slow {
          animation: floatMirror 4s ease-in-out infinite;
        }
        @keyframes floatMirror {
          0%   { transform: scaleX(-1) translateY(0px); }
          50%  { transform: scaleX(-1) translateY(-14px); }
          100% { transform: scaleX(-1) translateY(0px); }
        }
      `}</style>

    </main>
  );
};

export default Home;