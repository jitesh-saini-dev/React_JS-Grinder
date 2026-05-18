import React, { useEffect, useState } from 'react';

const Contact = () => {
  // Animation ke liye state
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Page load hone ke thodi der baad animation trigger karenge
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#fff", fontFamily: "'Poppins', sans-serif", paddingBottom: "80px" }}>
      
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

      {/* ── HEADER SECTION (Now Animated) ── */}
      <div 
        className={`float-up-header ${headerVisible ? 'visible' : ''}`}
        style={{ textAlign: "center", paddingTop: "80px", paddingBottom: "60px", paddingHorizontal: "20px" }}
      >
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, margin: "0 0 10px" }}>
          Get In <span style={{ color: "#f4a2a2" }}>Touch</span>
        </h1>
        <p style={{ color: "#888", fontSize: "16px", margin: 0 }}>
          We're here to help. Reach out anytime!
        </p>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* ── TOP SECTION: 3 Contact Cards ── */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "24px" 
        }}>
          {contactMethods.map((method, index) => (
            <div key={index} style={{
              backgroundColor: "#2a2a2a",
              borderRadius: "16px",
              padding: "40px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              {/* White Icon Box */}
              <div style={{
                backgroundColor: "#fff",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                color: "#111"
              }}>
                {method.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 12px" }}>{method.title}</h3>
              <p style={{ color: "#fff", fontSize: "15px", margin: "0 0 8px" }}>{method.detail}</p>
              <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>{method.subtext}</p>
            </div>
          ))}
        </div>

        {/* ── BOTTOM SECTION: Map, Hours, Details ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "stretch" }}>
          
          {/* LEFT: Visit Us Card */}
          <div style={{ 
            flex: "1 1 500px", 
            backgroundColor: "#2a2a2a", 
            borderRadius: "16px", 
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}>
            {/* Pink Icon Box */}
            <div style={{
                backgroundColor: "#f4a2a2",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                color: "#111"
              }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700, margin: "0 0 12px" }}>Visit Us</h3>
            <p style={{ color: "#aaa", fontSize: "15px", margin: "0 0 30px", lineHeight: "1.6" }}>
              Road 42, Gulshan 2<br />Dhaka 1212, Bangladesh
            </p>
            <button style={{
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#f4a2a2",
              color: "#111",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open In Google Maps
            </button>
          </div>

          {/* RIGHT: Hours & Getting Here */}
          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Opening Hours Card */}
            <div style={{ backgroundColor: "#2a2a2a", borderRadius: "16px", padding: "30px" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 24px" }}>Opening Hours</h3>
              
              {/* Dine In Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4a2a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 22h8"></path><path d="M12 11v11"></path><path d="M12 11C12 5.48 7.52 1 2 1h20c-5.52 0-10 4.48-10 10z"></path>
                  </svg>
                  <span style={{ color: "#fff", fontSize: "15px" }}>Dine In Service</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#aaa", fontSize: "13px", marginBottom: "4px" }}>Monday - Sunday</div>
                  <div style={{ color: "#fff", fontSize: "14px", fontWeight: "600" }}>12 PM - 11 AM</div>
                </div>
              </div>
              
              <div style={{ height: "1px", backgroundColor: "#3a3a3a", marginBottom: "20px" }}></div>

              {/* Delivery Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4a2a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <span style={{ color: "#fff", fontSize: "15px" }}>Delivery Service</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#aaa", fontSize: "13px", marginBottom: "4px" }}>Monday - Sunday</div>
                  <div style={{ color: "#fff", fontSize: "14px", fontWeight: "600" }}>12 PM - 11 AM</div>
                </div>
              </div>
            </div>

            {/* Getting Here Card */}
            <div style={{ backgroundColor: "#251e1c", borderRadius: "16px", padding: "30px", flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 20px" }}>Getting Here</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Located in the heart of Gulshan 2, near DCC Market",
                  "Ample parking space available for dine-in guests",
                  "Wheelchair accessible entrance and facilities"
                ].map((text, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", color: "#aaa", fontSize: "14px", lineHeight: "1.5" }}>
                    <span style={{ color: "#4caf50", fontSize: "18px", lineHeight: "1" }}>•</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// Top cards data array for clean mapping
const contactMethods = [
  {
    title: "Call Us",
    detail: "+880 1234-567890",
    subtext: "Available 12 PM - 2 AM",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    title: "WhatsApp",
    detail: "+880 1234-567890",
    subtext: "Quick responses guaranteed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    title: "Email Us",
    detail: "hello@eateria.com",
    subtext: "We'll reply within 24 hours",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  }
];

export default Contact;