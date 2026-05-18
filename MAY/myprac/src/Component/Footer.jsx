// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";

// const Footer = () => {
//   const footerRef = useRef(null);
//   const [rotate, setRotate] = useState(270);
//   const [translateY, setTranslateY] = useState(60);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!footerRef.current) return;

//       const rect = footerRef.current.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       const progress = Math.min(
//         Math.max((windowH - rect.top) / (rect.height + windowH * 0.3), 0),
//         1
//       );

//       setRotate(270 + progress * 90);
//       setTranslateY(60 - progress * 60);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       style={{
//         background: "#111",
//         color: "white",
//         fontFamily: "'Poppins', sans-serif",
//         position: "relative",
//         overflow: "hidden", // Ye zaroori hai bottom se cut karne ke liye
//       }}
//     >
//       {/* ── Main content row ── */}
//       <div style={{
//         maxWidth: "1300px",
//         margin: "0 auto",
//         padding: "60px 32px 0",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "flex-start",
//         position: "relative",
//         zIndex: 2,
//         flexWrap: "wrap",
//         gap: "20px",
//       }}>

//         {/* ── LEFT: Logo + tagline + social ── */}
//         <div style={{ maxWidth: "280px", zIndex: 3 }}>
//           <h2 style={{
//             fontSize: "2.4rem", fontWeight: 800,
//             margin: "0 0 20px", letterSpacing: "-0.02em",
//           }}>
//             Dinevera
//           </h2>
//           <p style={{
//             color: "#666", fontSize: "14px",
//             lineHeight: 1.7, margin: "0 0 28px",
//           }}>
//             Pan-Asian fusion at its finest. Same kitchen, same chef – whether
//             you're on the couch or in our booth.
//           </p>

//           {/* Social icons */}
//           <div style={{ display: "flex", gap: "14px" }}>
//             <a href="#" style={iconStyle} onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"} onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}>
//               <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//               </svg>
//             </a>
//             <a href="#" style={iconStyle} onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"} onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}>
//               <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="2" width="20" height="20" rx="5"/>
//                 <circle cx="12" cy="12" r="4"/>
//                 <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
//               </svg>
//             </a>
//             <a href="#" style={iconStyle} onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"} onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}>
//               <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
//                 <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111"/>
//               </svg>
//             </a>
//             <a href="#" style={iconStyle} onMouseEnter={e => e.currentTarget.style.borderColor = "#fff"} onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}>
//               <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* ── CENTER: Rotating circular image ── */}
//         <div style={{
//           position: "absolute",
//           left: "50%",
//           bottom: "60px",
//           transform: `translateX(-50%) translateY(calc(50% + ${translateY}px))`,
//           width: "clamp(450px, 55vw, 800px)", // Size thodi optimize ki hai
//           aspectRatio: "1 / 1",
//           borderRadius: "50%",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}>
//           <img
//             src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6947942aacfecd7e6cb7c287_ace285d709cd2966c5dddab2e9154d11_dishes-img-01.webp"
//             alt="Featured dish"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//               transform: `rotate(${rotate}deg)`,
//               transition: "transform 0.1s ease-out",
//               willChange: "transform",
//             }}
//           />
//         </div>

//         {/* ── RIGHT: Quick Links ── */}
//         <div style={{ textAlign: "right", zIndex: 3 }}>
//           <h3 style={{
//             fontSize: "1.3rem", fontWeight: 700,
//             margin: "0 0 24px", letterSpacing: "-0.01em",
//           }}>
//             Quick Links
//           </h3>
//           <nav style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//             {[
//               { label: "Order Online",   to: "/menu" },
//               { label: "Reserve Table",  to: "/reservation" },
//               { label: "Order Takeaway", to: "/menu" },
//               { label: "Our Story",      to: "/ourstory" },
//               { label: "Contact Us",     to: "/contact" },
//               { label: "404",            to: "/404" },
//             ].map(({ label, to }) => (
//               <Link
//                 key={label} to={to}
//                 style={{ color: "#666", fontSize: "15px", textDecoration: "none", transition: "color 0.2s" }}
//                 onMouseEnter={e => e.target.style.color = "#fff"}
//                 onMouseLeave={e => e.target.style.color = "#666"}
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* ── YAHAN CHANGES HAIN: Spacer ki height badha di hai taaki upar se image na kate ── */}
//       <div style={{ height: "clamp(350px, 45vw, 550px)" }} />

//       {/* ── Bottom bar ── */}
//       <div style={{
//         borderTop: "1px solid #1a1a1a",
//         padding: "20px 32px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexWrap: "wrap",
//         gap: "12px",
//         background: "#0e0e0e",
//         position: "relative",
//         zIndex: 3,
//       }}>
//         <span style={{ color: "#3a3a3a", fontSize: "13px" }}>
//           Design by Grabui . Powered by Webflow
//         </span>
//         <div style={{ display: "flex", gap: "24px" }}>
//           {["Style Guide", "Licenses", "Changelog"].map(item => (
//             <a key={item} href="#"
//               style={{ color: "#3a3a3a", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
//               onMouseEnter={e => e.target.style.color = "#fff"}
//               onMouseLeave={e => e.target.style.color = "#3a3a3a"}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>

//     </footer>
//   );
// };

// const iconStyle = {
//   width: "38px", height: "38px",
//   borderRadius: "50%",
//   border: "1px solid #2a2a2a",
//   display: "flex", alignItems: "center", justifyContent: "center",
//   color: "#888", textDecoration: "none",
//   transition: "all 0.2s",
// };

// export default Footer;

//-------------------------------------------

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#111",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden", // Ye extra hisse ko bahar cut karega
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Taki elements ko khuli jagah mile
      }}
    >
      {/* ── CSS Animation apne aap ghoomne ke liye ── */}
      <style>
        {`
          @keyframes ghoomtaChakka {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* ── Main content row (Text Top Par) ── */}
      <div
        style={{
          maxWidth: "1300px",
          width: "100%",
          margin: "0 auto",
          padding: "80px 32px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 10, // Text hamesha image ke upar rahega
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* ── LEFT: Logo + tagline + social ── */}
        <div style={{ maxWidth: "280px" }}>
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            Dinevera
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
              lineHeight: 1.7,
              margin: "0 0 28px",
            }}
          >
            Pan-Asian fusion at its finest. Same kitchen, same chef – whether
            you're on the couch or in our booth.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "14px" }}>
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#2a2a2a")
              }
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#2a2a2a")
              }
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#2a2a2a")
              }
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                  fill="#111"
                />
              </svg>
            </a>
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#2a2a2a")
              }
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Quick Links ── */}
        <div style={{ textAlign: "right", zIndex: 10 }}>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              margin: "0 0 24px",
              letterSpacing: "-0.01em",
            }}
          >
            Quick Links
          </h3>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {[
              { label: "Order Online", to: "/menu" },
              { label: "Reserve Table", to: "/reservation" },
              { label: "Order Takeaway", to: "/menu" },
              { label: "Our Story", to: "/ourstory" },
              { label: "Contact Us", to: "/contact" },
              { label: "404", to: "/404" },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                style={{
                  color: "#666",
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#666")}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Spacer: Text aur Image ke beech spacing maintain karega ── */}
      <div style={{ flexGrow: 1, minHeight: "clamp(250px, 35vw, 400px)" }} />

      {/* ── CENTER: Badi Rotating Image (Auto Rotate & Half-Cut) ── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "65px", // Bottom bar ki height lagbhag itni hi hai uske just upar center
          transform: "translate(-50%, 50%)", // Perfect aadha hissa neeche chhupane ke liye
          width: "clamp(600px, 75vw, 1100px)", // Image ka bada size
          aspectRatio: "1 / 1",
          zIndex: 1, // Text aur bottom bar ke peechhe
          pointerEvents: "none",
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/69467bb9328ab81a546a000d/6947942aacfecd7e6cb7c287_ace285d709cd2966c5dddab2e9154d11_dishes-img-01.webp"
          alt="Featured dish"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
            animation: "ghoomtaChakka 40s linear infinite", // Yeh image ko apne aap lagataar ghumayega
          }}
        />
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",

          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",

          position: "relative",
          zIndex: 5,
        }}
      >
        <span
          style={{ color: "#3a3a3a", fontSize: "13px" }}
          onMouseEnter={(e) => (e.target.style.color = "#fff")}
          onMouseLeave={(e) => (e.target.style.color = "#3a3a3a")}
        >
          Design by Grabui . Powered by Webflow
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Style Guide", "Licenses", "Changelog"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#3a3a3a",
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#3a3a3a")}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const iconStyle = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  border: "1px solid #2a2a2a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#888",
  textDecoration: "none",
  transition: "all 0.2s",
};

export default Footer;
