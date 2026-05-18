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

//-------------------------------------------------------------

// import React, { useEffect, useState } from "react";

// const Home = () => {
//   // Step 1: ek state jo page load hone ke baad true ho jaaye
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // 100ms baad true kar do — taaki animation trigger ho
//     setTimeout(() => setVisible(true), 100);
//   }, []);

//   return (
//     <main
//       style={{
//         minHeight: "100vh",
//         background: "#161616",
//         color: "white",
//         fontFamily: "'Poppins', sans-serif",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         padding: "40px 20px",
//         position: "relative",   // floating images ke liye zaroori
//         overflow: "hidden",
//       }}
//     >

//       {/* ── Floating Images ─────────────────────────────── */}

//       {/* Tomato — top left */}
//       <img
//         src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg"
//         alt=""
//         className="floating"
//         style={{
//           position: "absolute",
//           top: "20%",
//           left: "5%",
//           width: "110px",
//         }}
//       />

//       {/* Tomato — top right (mirror kiya scaleX se) */}
//       <img
//         src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg"
//         alt=""
//         className="floating-slow"
//         style={{
//           position: "absolute",
//           top: "18%",
//           right: "5%",
//           width: "100px",
//           transform: "scaleX(-1)", // mirror
//         }}
//       />

//       {/* Leaf — bottom left */}
//       <img
//         src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp"
//         alt=""
//         className="floating"
//         style={{
//           position: "absolute",
//           bottom: "25%",
//           left: "7%",
//           width: "90px",
//         }}
//       />

//       {/* Leaf — bottom right */}
//       <img
//         src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp"
//         alt=""
//         className="floating-slow"
//         style={{
//           position: "absolute",
//           bottom: "20%",
//           right: "6%",
//           width: "105px",
//           transform: "scaleX(-1) rotate(15deg)",
//         }}
//       />

//       {/* ── Main Content ────────────────────────────────── */}

//       {/* Badge */}
//       <div
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           gap: "8px",
//           background: "#1f1f1f",
//           border: "1px solid #2e2e2e",
//           borderRadius: "999px",
//           padding: "8px 20px",
//           fontSize: "14px",
//           color: "#ccc",
//           marginBottom: "28px",
//           // animation
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "opacity 0.8s ease 0s, transform 0.8s ease 0s",
//         }}
//       >
//         🔥 Now delivering till 2 AM
//       </div>

//       {/* Heading */}
//       <h1
//         style={{
//           fontSize: "clamp(2.5rem, 6vw, 5rem)",
//           fontWeight: 900,
//           lineHeight: 1.1,
//           margin: "0 0 24px",
//           // animation — thoda delay
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
//         }}
//       >
//         Pan-Asian Crave
//         <br />
//         <span style={{ color: "#c27b7b" }}>Delivered in 30 Minutes</span>
//         <br />
//         or Enjoy Here
//       </h1>

//       {/* Subtext */}
//       <p
//         style={{
//           color: "#888",
//           fontSize: "16px",
//           lineHeight: 1.7,
//           maxWidth: "500px",
//           marginBottom: "36px",
//           // animation — aur thoda delay
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
//         }}
//       >
//         Freshly crafted sushi, poke bowls &amp; bao. Dine in or get your
//         Pan-Asian cravings delivered in just 30 minutes.
//       </p>

//       {/* Buttons */}
//       <div
//         style={{
//           display: "flex",
//           gap: "12px",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           marginBottom: "40px",
//           // animation
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
//         }}
//       >
//         <button style={{
//           padding: "14px 28px",
//           background: "#f4a4a4",
//           color: "#000",
//           border: "none",
//           borderRadius: "12px",
//           fontWeight: 600,
//           fontSize: "14px",
//           cursor: "pointer",
//           fontFamily: "'Poppins', sans-serif",
//         }}>
//           🚚 Order Delivery Now
//         </button>

//         <button style={{
//           padding: "14px 28px",
//           background: "#242424",
//           color: "#fff",
//           border: "1px solid #333",
//           borderRadius: "12px",
//           fontWeight: 600,
//           fontSize: "14px",
//           cursor: "pointer",
//           fontFamily: "'Poppins', sans-serif",
//         }}>
//           🪑 Reserve Table
//         </button>

//         <button style={{
//           padding: "14px 28px",
//           background: "#242424",
//           color: "#fff",
//           border: "1px solid #333",
//           borderRadius: "12px",
//           fontWeight: 600,
//           fontSize: "14px",
//           cursor: "pointer",
//           fontFamily: "'Poppins', sans-serif",
//         }}>
//           🛍️ Order Takeaway
//         </button>
//       </div>

//       {/* Stats bar */}
//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           color: "#666",
//           fontSize: "14px",
//           // animation
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
//         }}
//       >
//         <span>⭐ 4.9 (2,847 reviews)</span>
//         <span style={{ color: "#2e2e2e" }}>|</span>
//         <span>🚚 Free delivery over ৳1500</span>
//         <span style={{ color: "#2e2e2e" }}>|</span>
//         <span>🕑 Open till 2 AM</span>
//       </div>

//       {/* ── CSS for floating animation ── */}
//       <style>{`
//         .floating {
//           animation: floatUpDown 3s ease-in-out infinite;
//         }
//         .floating-slow {
//           animation: floatUpDown 4s ease-in-out infinite;
//         }
//         @keyframes floatUpDown {
//           0%   { transform: translateY(0px); }
//           50%  { transform: translateY(-14px); }
//           100% { transform: translateY(0px); }
//         }
//         /* scaleX wale ke liye override */
//         img[style*="scaleX(-1)"].floating-slow {
//           animation: floatMirror 4s ease-in-out infinite;
//         }
//         @keyframes floatMirror {
//           0%   { transform: scaleX(-1) translateY(0px); }
//           50%  { transform: scaleX(-1) translateY(-14px); }
//           100% { transform: scaleX(-1) translateY(0px); }
//         }
//       `}</style>

//     </main>
//   );
// };

// export default Home;



//-----------------------------------------------------------------



// import React, { useEffect, useState, useRef } from "react";

// const LEFT_IMG   = "https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6947942aacfecd7e6cb7c287_ace285d709cd2966c5dddab2e9154d11_dishes-img-01.webp";
// const CENTER_IMG = "https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6995a427d699be01bfd3d8b7_dishes-img-02.png";
// const RIGHT_IMG  = "https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6995a4294e339372374f4681_dishes-img-03.png";

// const FULL_TEXT = "Dinevera was born from a simple belief: you shouldn't have to choose between a premium dining experience and the convenience of home delivery.";

// // ── useInView — element screen pe aaya ya nahi ───────────────────
// function useInView(ref, threshold = 0.1) {
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return inView;
// }

// const Home = () => {
//   const [visible, setVisible] = useState(false);

//   // Center image shrink on scroll
//   const [scrollY, setScrollY] = useState(0);

//   // Plates section ref
//   const platesRef = useRef(null);
//   const platesVisible = useInView(platesRef, 0.1);

//   // Text section ref — scroll progress ke liye
//   const textRef = useRef(null);
//   const [litCount, setLitCount] = useState(0); // kitne letters highlight hain

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 100);
//   }, []);

//   // ── Scroll listener — 2 kaam karta hai:
//   // 1. scrollY track karta hai (center image shrink ke liye)
//   // 2. text section mein scroll progress calculate karta hai
//   useEffect(() => {
//     const onScroll = () => {
//       setScrollY(window.scrollY);

//       // Text highlight logic
//       if (!textRef.current) return;
//       const rect = textRef.current.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       // rect.top — element top screen ke kitna neeche hai
//       // jab element screen pe aata hai toh rect.top < windowH hota hai
//       // progress = 0 jab element abhi screen mein aaya, 1 jab pura scroll ho gaya
//       const progress = Math.min(
//         Math.max((windowH - rect.top) / (rect.height + windowH * 0.5), 0),
//         1
//       );

//       // Total letters mein se kitne highlight karne hain
//       setLitCount(Math.floor(progress * FULL_TEXT.length));
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Center image ka scale — scroll karne par chhhota hota hai
//   // scrollY = 0 → scale 1.4 (bada)
//   // scrollY = 600 → scale 1.0 (normal)
//   const centerScale = Math.max(1.0, 1.4 - scrollY / 1500);

//   const fadeUp = (delay) => ({
//     opacity:   visible ? 1 : 0,
//     transform: visible ? "translateY(0)" : "translateY(30px)",
//     transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
//   });

//   return (
//     <main style={{ background: "#161616", color: "white", fontFamily: "'Poppins', sans-serif" }}>

//       {/* ══════════ HERO SECTION ══════════ */}
//       <section style={{
//         minHeight: "100vh",
//         display: "flex", flexDirection: "column",
//         alignItems: "center", justifyContent: "center",
//         textAlign: "center", padding: "80px 20px 40px",
//         position: "relative", overflow: "hidden",
//       }}>

//         {/* Floating tomato left */}
//         <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg"
//           alt="" className="floating"
//           style={{ position: "absolute", top: "20%", left: "5%", width: "110px" }} />

//         {/* Floating tomato right */}
//         <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg"
//           alt="" className="floating-slow"
//           style={{ position: "absolute", top: "18%", right: "5%", width: "100px", transform: "scaleX(-1)" }} />

//         {/* Floating leaf left */}
//         <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp"
//           alt="" className="floating"
//           style={{ position: "absolute", bottom: "25%", left: "7%", width: "90px" }} />

//         {/* Floating leaf right */}
//         <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp"
//           alt="" className="floating-slow"
//           style={{ position: "absolute", bottom: "20%", right: "6%", width: "105px", transform: "scaleX(-1) rotate(15deg)" }} />

//         {/* Badge */}
//         <div style={{ ...fadeUp(0), display: "inline-flex", alignItems: "center", gap: "8px",
//           background: "#1f1f1f", border: "1px solid #2e2e2e", borderRadius: "999px",
//           padding: "8px 20px", fontSize: "14px", color: "#ccc", marginBottom: "28px" }}>
//           🔥 Now delivering till 2 AM
//         </div>

//         {/* Heading */}
//         <h1 style={{ ...fadeUp(0.15), fontSize: "clamp(2.5rem, 6vw, 5rem)",
//           fontWeight: 900, lineHeight: 1.1, margin: "0 0 24px" }}>
//           Pan-Asian Crave<br />
//           <span style={{ color: "#c27b7b" }}>Delivered in 30 Minutes</span><br />
//           or Enjoy Here
//         </h1>

//         {/* Subtext */}
//         <p style={{ ...fadeUp(0.3), color: "#888", fontSize: "16px",
//           lineHeight: 1.7, maxWidth: "500px", marginBottom: "36px" }}>
//           Freshly crafted sushi, poke bowls &amp; bao. Dine in or get your
//           Pan-Asian cravings delivered in just 30 minutes.
//         </p>

//         {/* Buttons */}
//         <div style={{ ...fadeUp(0.45), display: "flex", gap: "12px",
//           flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
//           <button style={{ padding: "14px 28px", background: "#f4a4a4", color: "#000",
//             border: "none", borderRadius: "12px", fontWeight: 600, fontSize: "14px",
//             cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
//             🚚 Order Delivery Now
//           </button>
//           <button style={{ padding: "14px 28px", background: "#242424", color: "#fff",
//             border: "1px solid #333", borderRadius: "12px", fontWeight: 600, fontSize: "14px",
//             cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
//             🪑 Reserve Table
//           </button>
//           <button style={{ padding: "14px 28px", background: "#242424", color: "#fff",
//             border: "1px solid #333", borderRadius: "12px", fontWeight: 600, fontSize: "14px",
//             cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
//             🛍️ Order Takeaway
//           </button>
//         </div>

//         {/* Stats */}
//         <div style={{ ...fadeUp(0.6), display: "flex", gap: "20px",
//           flexWrap: "wrap", justifyContent: "center", color: "#666", fontSize: "14px" }}>
//           <span>⭐ 4.9 (2,847 reviews)</span>
//           <span style={{ color: "#2e2e2e" }}>|</span>
//           <span>🚚 Free delivery over ৳1500</span>
//           <span style={{ color: "#2e2e2e" }}>|</span>
//           <span>🕑 Open till 2 AM</span>
//         </div>
//       </section>

//       {/* ══════════ PLATES SECTION ══════════ */}
//       <section
//         ref={platesRef}
//         style={{
//           background: "#111",
//           padding: "80px 20px 120px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         {/* 3 plates row */}
//         <div style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           width: "100%",
//           maxWidth: "1100px",
//         }}>

//           {/* LEFT — chhota */}
//           <div style={{
//             width: "clamp(150px, 20vw, 300px)",
//             aspectRatio: "1 / 1",
//             borderRadius: "50%",
//             overflow: "hidden",
//             flexShrink: 0,
//             zIndex: 1,
//             opacity:   platesVisible ? 1 : 0,
//             transform: platesVisible ? "translateY(0)" : "translateY(80px)",
//             transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
//           }}>
//             <img src={LEFT_IMG} alt="dish"
//               style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//           </div>

//           {/* CENTER — bada, scroll pe shrink hota hai */}
//           <div style={{
//             width: "clamp(280px, 44vw, 600px)",
//             aspectRatio: "1 / 1",
//             borderRadius: "50%",
//             overflow: "hidden",
//             flexShrink: 0,
//             zIndex: 3,
//             margin: "0 -40px",
//             // ── Yahan scroll se scale change hoti hai ──
//             transform: `scale(${centerScale})`,
//             transition: "opacity 0.9s ease 0s",
//             opacity: platesVisible ? 1 : 0,
//           }}>
//             <img src={CENTER_IMG} alt="main dish"
//               style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//           </div>

//           {/* RIGHT — chhota */}
//           <div style={{
//             width: "clamp(150px, 20vw, 300px)",
//             aspectRatio: "1 / 1",
//             borderRadius: "50%",
//             overflow: "hidden",
//             flexShrink: 0,
//             zIndex: 1,
//             opacity:   platesVisible ? 1 : 0,
//             transform: platesVisible ? "translateY(0)" : "translateY(80px)",
//             transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
//           }}>
//             <img src={RIGHT_IMG} alt="dish"
//               style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//           </div>
//         </div>

//         {/* ══════════ LETTER HIGHLIGHT TEXT ══════════
//             Har letter ek alag <span> hai
//             litCount se pehle ke letters white (lit),
//             baaki dull gray rehte hain
//         ══════════════════════════════════════════ */}
//         <p
//           ref={textRef}
//           style={{
//             marginTop: "80px",
//             maxWidth: "800px",
//             textAlign: "center",
//             fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
//             fontWeight: 600,
//             lineHeight: 1.5,
//             letterSpacing: "0.01em",
//           }}
//         >
//           {FULL_TEXT.split("").map((char, i) => (
//             <span
//               key={i}
//               style={{
//                 color: i < litCount ? "#ffffff" : "#2a2a2a",
//                 transition: "color 0.1s ease",
//                 // space ke liye white-space preserve karna zaroori hai
//                 whiteSpace: char === " " ? "pre" : "normal",
//               }}
//             >
//               {char}
//             </span>
//           ))}
//         </p>
//       </section>

//       {/* CSS */}
//       <style>{`
//         .floating      { animation: floatUD 3s ease-in-out infinite; }
//         .floating-slow { animation: floatUD 4s ease-in-out infinite; }
//         @keyframes floatUD {
//           0%,100% { transform: translateY(0px); }
//           50%     { transform: translateY(-14px); }
//         }
//       `}</style>
//     </main>
//   );
// };

// export default Home;

//-----------------------beech ki img space increase---------------------


import React, { useEffect, useState, useRef } from "react";

const LEFT_IMG   = "https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6947942aacfecd7e6cb7c287_ace285d709cd2966c5dddab2e9154d11_dishes-img-01.webp";
const CENTER_IMG = "https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6995a427d699be01bfd3d8b7_dishes-img-02.png";
const RIGHT_IMG  = "https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6995a4294e339372374f4681_dishes-img-03.png";

const FULL_TEXT = "Dinevera was born from a simple belief: you shouldn't have to choose between a premium dining experience and the convenience of home delivery.";

// ── useInView — element screen pe aaya ya nahi ───────────────────
function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

const Home = () => {
  const [visible, setVisible] = useState(false);
  
  const platesRef = useRef(null);
  const textRef = useRef(null);
  
  const [litCount, setLitCount] = useState(0); 
  const [plateProgress, setPlateProgress] = useState(0); 

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // 1. Text Highlight Logic
      if (textRef.current) {
        const tRect = textRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;
        const tProgress = Math.min(
          Math.max((windowH - tRect.top) / (tRect.height + windowH * 0.5), 0),
          1
        );
        setLitCount(Math.floor(tProgress * FULL_TEXT.length));
      }

      // 2. Plates Cinematic Shrink Logic
      if (platesRef.current) {
        const pRect = platesRef.current.getBoundingClientRect();
        
        let pProg = 0;
        if (pRect.top < 150) {
          pProg = (150 - pRect.top) / 450; 
        }
        
        setPlateProgress(Math.min(Math.max(pProg, 0), 1));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const centerScale = 2.2 - (1.2 * plateProgress); 
  const sidePlateTranslateY = 150 - (150 * plateProgress);
  const sidePlateOpacity = plateProgress;

  const fadeUp = (delay) => ({
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <main style={{ background: "#161616", color: "white", fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>

      {/* ══════════ HERO SECTION ══════════ */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "80px 20px 40px",
        position: "relative",
      }}>

        <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg" alt="" className="floating" style={{ position: "absolute", top: "20%", left: "5%", width: "110px" }} />
        <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba98d3468125d3cbf4_hero-flotiong-img-01.svg" alt="" className="floating-slow" style={{ position: "absolute", top: "18%", right: "5%", width: "100px", transform: "scaleX(-1)" }} />
        <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp" alt="" className="floating" style={{ position: "absolute", bottom: "25%", left: "7%", width: "90px" }} />
        <img src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp" alt="" className="floating-slow" style={{ position: "absolute", bottom: "20%", right: "6%", width: "105px", transform: "scaleX(-1) rotate(15deg)" }} />

        <div style={{ ...fadeUp(0), display: "inline-flex", alignItems: "center", gap: "8px", background: "#1f1f1f", border: "1px solid #2e2e2e", borderRadius: "999px", padding: "8px 20px", fontSize: "14px", color: "#ccc", marginBottom: "28px" }}>
          🔥 Now delivering till 2 AM
        </div>

        <h1 style={{ ...fadeUp(0.15), fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 24px" }}>
          Pan-Asian Crave<br />
          <span style={{ color: "#c27b7b" }}>Delivered in 30 Minutes</span><br />
          or Enjoy Here
        </h1>

        <p style={{ ...fadeUp(0.3), color: "#888", fontSize: "16px", lineHeight: 1.7, maxWidth: "500px", marginBottom: "36px" }}>
          Freshly crafted sushi, poke bowls &amp; bao. Dine in or get your Pan-Asian cravings delivered in just 30 minutes.
        </p>

        <div style={{ ...fadeUp(0.45), display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          <button style={{ padding: "14px 28px", background: "#f4a4a4", color: "#000", border: "none", borderRadius: "12px", fontWeight: 600, fontSize: "14px", cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
            🚚 Order Delivery Now
          </button>
          <button style={{ padding: "14px 28px", background: "#242424", color: "#fff", border: "1px solid #333", borderRadius: "12px", fontWeight: 600, fontSize: "14px", cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
            🪑 Reserve Table
          </button>
          <button style={{ padding: "14px 28px", background: "#242424", color: "#fff", border: "1px solid #333", borderRadius: "12px", fontWeight: 600, fontSize: "14px", cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
            🛍️ Order Takeaway
          </button>
        </div>

        <div style={{ ...fadeUp(0.6), display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", color: "#666", fontSize: "14px" }}>
          <span>⭐ 4.9 (2,847 reviews)</span>
          <span style={{ color: "#2e2e2e" }}>|</span>
          <span>🚚 Free delivery over ৳1500</span>
          <span style={{ color: "#2e2e2e" }}>|</span>
          <span>🕑 Open till 2 AM</span>
        </div>
      </section>

      {/* ══════════ PLATES SECTION ══════════ */}
      <section
        ref={platesRef}
        style={{
          background: "#111",
          padding: "450px 20px 150px", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1100px",
          position: "relative" 
        }}>

          {/* LEFT PLATE */}
          <div style={{
            width: "clamp(150px, 20vw, 300px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            zIndex: 1,
            opacity: sidePlateOpacity,
            transform: `translateY(${sidePlateTranslateY}px)`,
            transition: "transform 0.1s linear, opacity 0.1s linear", 
          }}>
            <img src={LEFT_IMG} alt="dish" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* CENTER PLATE */}
          <div style={{
            width: "clamp(280px, 44vw, 600px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            zIndex: 5,
            margin: "0 -40px",
            transform: `scale(${centerScale})`,
            transformOrigin: "center center",
            transition: "transform 0.1s linear",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}>
            <img src={CENTER_IMG} alt="main dish" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* RIGHT PLATE */}
          <div style={{
            width: "clamp(150px, 20vw, 300px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            zIndex: 1,
            opacity: sidePlateOpacity,
            transform: `translateY(${sidePlateTranslateY}px)`,
            transition: "transform 0.1s linear, opacity 0.1s linear",
          }}>
            <img src={RIGHT_IMG} alt="dish" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>

        {/* ══════════ LETTER HIGHLIGHT TEXT WITH LEAVES ══════════ */}
        <div style={{ position: "relative", marginTop: "150px", maxWidth: "800px", width: "100%", display: "flex", justifyContent: "center" }}>
          
          {/* Floating Leaf 1 - Top Left */}
          <img 
            src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp" 
            alt="leaf" 
            className="floating" 
            style={{ 
              position: "absolute", 
              top: "-30px", 
              left: "-30px", 
              width: "70px", 
              zIndex: 0,
              opacity: 0.85
            }} 
          />

          {/* Floating Leaf 2 - Middle Right */}
          <img 
            src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/694784ba5d22985a2808d60d_99000b9ef7741baba30053b90b1b4cc9_hero-flotiong-img-02.webp" 
            alt="leaf" 
            className="floating-slow" 
            style={{ 
              position: "absolute", 
              bottom: "40px", 
              right: "-40px", 
              width: "80px", 
              transform: "rotate(30deg) scaleX(-1)", // Ghuma diya image ke hisaab se
              zIndex: 0,
              opacity: 0.85
            }} 
          />

          <p
            ref={textRef}
            style={{
              textAlign: "center",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.5,
              letterSpacing: "0.01em",
              position: "relative",
              zIndex: 10, // Text leaves ke upar rahega
              margin: 0
            }}
          >
            {FULL_TEXT.split("").map((char, i) => (
              <span
                key={i}
                style={{
                  color: i < litCount ? "#ffffff" : "#2a2a2a",
                  transition: "color 0.1s ease",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </section>

      <style>{`
        .floating      { animation: floatUD 3s ease-in-out infinite; }
        .floating-slow { animation: floatUD 4s ease-in-out infinite; }
        @keyframes floatUD {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-14px); }
        }
      `}</style>
    </main>
  );
};

export default Home;