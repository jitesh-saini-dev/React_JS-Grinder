import React, { useEffect, useRef, useState } from "react";

const OurStory = () => {
  // Scroll text highlight aur scroll animations ke liye refs
  const scrollTextRef = useRef(null);
  const deliveryTextRef = useRef(null);
  const heroTextRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [deliveryVisible, setDeliveryVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // ── SCROLL TEXT HIGHLIGHT LOGIC ──
    const handleScroll = () => {
      if (scrollTextRef.current) {
        const rect = scrollTextRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress based on how much element is in viewport
        // Jab element screen ke center mein aaye tab highlight shuru/khatam ho
        let progress =
          (windowHeight - rect.top - windowHeight * 0.2) / (windowHeight * 0.4);
        progress = Math.max(0, Math.min(1, progress)); // 0 se 1 ke beech rakhein
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    // ── INTERSECTION OBSERVER FOR FLOAT UP ANIMATIONS ──
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === deliveryTextRef.current && entry.isIntersecting) {
          setDeliveryVisible(true);
        }
        if (entry.target === heroTextRef.current && entry.isIntersecting) {
          setHeroVisible(true);
        }
      });
    }, observerOptions);

    if (deliveryTextRef.current) observer.observe(deliveryTextRef.current);
    if (heroTextRef.current) observer.observe(heroTextRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ── GLOBAL CSS ANIMATIONS ── */}
      <style>
        {`
          @keyframes slideLeftRight {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100vw); }
          }
          @keyframes rotateContinuous {
            0% { transform: translateY(-50%) rotate(0deg); }
            100% { transform: translateY(-50%) rotate(360deg); }
          }
          @keyframes floatLeaf {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .float-up {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 1s ease-out, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .float-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      {/* ── CSS Animation for Infinite Loop (Isko style tag mein daal de upar) ── */}
      <style>
        {`
          @keyframes slideInfinite {
            0% { transform: translateX(0); }
            /* Track theek aadha scroll hone pe reset ho jayega taaki loop seamless lage */
            100% { transform: translateX(-50%); } 
          }
        `}
      </style>

      {/* ── SECTION 1: HERO (Floating Text & Sliding Image) ── */}
      <div
        style={{
          paddingTop: "120px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          ref={heroTextRef}
          className={`float-up ${heroVisible ? "visible" : ""}`}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 800,
              margin: "0 0 10px",
              lineHeight: "1.1",
            }}
          >
            One Kitchen
            <br />
            <span style={{ color: "#c58c8c" }}>Two Experiences</span>
          </h1>
          <p style={{ color: "#888", fontSize: "16px", margin: "20px 0 60px" }}>
            Same kitchen. Same chef. Whether you're on the couch or in our
            booth.
          </p>
        </div>

        {/* ── INFINITY SLIDING IMAGES TRACK ── */}
        <div
          style={{
            width: "100%",
            height: "400px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Ye track ghoomega. Iski width content ke hisaab se hogi */}
          <div
            style={{
              display: "flex",
              gap: "5vw", // Ek image ke baad doosri image ke beech ki khali jagah ("thodi der me aaye")
              width: "max-content",
              animation: "slideInfinite 5s linear infinite", // Speed yahan se kam zyada kar liyo
            }}
          >
            {/* ── SET 1: Original Images ── */}
            <img
              src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694b7fc406a806a14cb79a1c_story-img-01.webp"
              alt="Sliding Dish"
              style={{
                height: "400px",
                width: "auto",
                borderRadius: "40px",
                objectFit: "cover",
              }}
            />
            <img
              src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694b7fc406a806a14cb79a1c_story-img-01.webp"
              alt="Sliding Dish"
              style={{
                height: "400px",
                width: "auto",
                borderRadius: "40px",
                objectFit: "cover",
              }}
            />

            {/* ── SET 2: Duplicate Images (Seamless loop ke liye bohot zaroori hai) ── */}
            <img
              src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694b7fc406a806a14cb79a1c_story-img-01.webp"
              alt="Sliding Dish Duplicate"
              style={{
                height: "400px",
                width: "auto",
                borderRadius: "40px",
                objectFit: "cover",
              }}
            />
            <img
              src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694b7fc406a806a14cb79a1c_story-img-01.webp"
              alt="Sliding Dish Duplicate"
              style={{
                height: "400px",
                width: "auto",
                borderRadius: "40px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

{/* ── SECTION 2: SCROLL HIGHLIGHT TEXT WITH LEAVES (Updated Letter Logic) ── */}
      <div style={{ padding: "150px 20px", position: "relative", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Floating Leaves */}
        <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp" alt="leaf" style={{ position: "absolute", top: "20%", left: "10%", width: "60px", opacity: 0.6, animation: "floatLeaf 6s ease-in-out infinite", filter: "brightness(0.7)" }} />
        <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba28c34d3229f8048a_4729f6fd0897361c0fbab5eda299dc15_hero-flotiong-img-03.webp" alt="leaf" style={{ position: "absolute", bottom: "10%", right: "10%", width: "80px", opacity: 0.6, animation: "floatLeaf 8s ease-in-out infinite reverse", filter: "brightness(0.7)" }} />
        
        {/* Magic Scroll Text */}
        <h2 
          ref={scrollTextRef}
          style={{ 
            fontSize: "clamp(2rem, 4vw, 3.5rem)", 
            fontWeight: 800, 
            lineHeight: "1.3",
            margin: 0
          }}
        >
          {/* Har letter ek alag <span> mein split kiya hai */}
          {"We believe great food shouldn't compromise on quality, no matter where you enjoy it.".split("").map((char, i) => (
            <span
              key={i}
              style={{
                color: i < Math.floor(scrollProgress * "We believe great food shouldn't compromise on quality, no matter where you enjoy it.".length) ? "#ffffff" : "#2a2a2a",
                transition: "color 0.1s ease",
                whiteSpace: char === " " ? "pre" : "normal", // taaki spaces proper apply hon
              }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>

      {/* ── SECTION 3: QUALITY PROMISE ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1 1 400px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2a2a2a",
              padding: "8px 16px",
              borderRadius: "30px",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#4caf50" }}>✔</span>
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              Certified & Safe
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              margin: "0",
              lineHeight: "1.1",
            }}
          >
            Our Quality
            <br />
            <span style={{ color: "#c58c8c" }}>Promise</span>
          </h2>
        </div>

        {/* Right Side Card */}
        <div
          style={{
            flex: "1 1 500px",
            backgroundColor: "#251e1c",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #3a2e2a",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {[
              { icon: "👑", text: "Restaurant-grade ingredients only" },
              { icon: "🔥", text: "Daily fresh fish from Cox's Bazar" },
              { icon: "🕒", text: "Made fresh for every order" },
              { icon: "🍃", text: "100% Halal certified meats" },
              { icon: "🛡️", text: "Zero preservatives or frozen ingredients" },
              { icon: "👨‍🍳", text: "Trained chefs with 10+ years experience" },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  color: "#ccc",
                  fontSize: "16px",
                }}
              >
                <span style={{ fontSize: "20px", opacity: 0.8 }}>
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── SECTION 4: WE DELIVER EVERYWHERE (Floating Text + Rotating Images) ── */}
      <div
        style={{
          position: "relative",
          padding: "100px 0 150px",
          textAlign: "center",
        }}
      >
        {/* Rotating LEFT Image */}
        <img
          src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6947942aacfecd7e6cb7c287_ace285d709cd2966c5dddab2e9154d11_dishes-img-01.webp"
          alt="Dish Left"
          style={{
            position: "absolute",
            left: "-250px",
            top: "50%",
            width: "500px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.8,
            animation: "rotateContinuous 25s linear infinite",
          }}
        />

        {/* Rotating RIGHT Image */}
        <img
          src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6947942aacfecd7e6cb7c287_ace285d709cd2966c5dddab2e9154d11_dishes-img-01.webp"
          alt="Dish Right"
          style={{
            position: "absolute",
            right: "-250px",
            top: "50%",
            width: "500px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.8,
            animation: "rotateContinuous 25s linear infinite reverse", // Ye ulta ghoomega thode style ke liye
          }}
        />

        {/* Main Delivery Content (Z-index high taaki image ke upar rahe) */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            ref={deliveryTextRef}
            className={`float-up ${deliveryVisible ? "visible" : ""}`}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                margin: "0 0 10px",
              }}
            >
              We Deliver <span style={{ color: "#c58c8c" }}>Everywhere</span>
            </h2>
            <p style={{ color: "#888", fontSize: "16px", margin: "0 0 50px" }}>
              Same kitchen. Same chef. Different experiences.
            </p>
          </div>

          {/* Location Pills Grid */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "50px",
            }}
          >
            {[
              "Gulshan",
              "Banani",
              "Dhanmondi",
              "Bashundhara",
              "Uttara",
              "Baridhara",
              "Niketan",
              "Mohakhali",
            ].map((loc) => (
              <div
                key={loc}
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #333",
                  borderRadius: "10px",
                  padding: "12px 24px",
                  color: "#aaa",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#4caf50", fontSize: "18px" }}>📍</span>{" "}
                {loc}
              </div>
            ))}
          </div>

          {/* Average Delivery Time Card */}
          <div
            style={{
              backgroundColor: "#251e1c",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #3a2e2a",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "28px" }}>🚚</span>
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    color: "#aaa",
                    fontSize: "14px",
                    marginBottom: "4px",
                  }}
                >
                  Average delivery time
                </div>
                <div
                  style={{
                    color: "#8bc34a",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  30 minutes
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "#443b39",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ⓘ View Delivery Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
