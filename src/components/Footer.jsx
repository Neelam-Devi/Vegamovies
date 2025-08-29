


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("⚠ Please enter your email address.");
      setSubscribed(false);
      return;
    }

    // Optional: simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("⚠ Please enter a valid email address.");
      setSubscribed(false);
      return;
    }

    setError("");
    setSubscribed(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#757575",
        fontFamily:
          "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: "23px",
        marginTop:"68px",
        
      }}
    >
      {/* Top Email Signup */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          borderBottom: "0px solid #222",
          borderTop: "2px solid #222"
        }}
      >
        <p style={{ fontSize: "38px", color: "#fff", marginBottom: "28px" }}>
          Let's Connect
        </p>
        <p style={{ fontSize: "15px", color: "#fff", marginBottom: "28px" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1 1 250px",
              padding: "15px",
              fontSize: "16px",
              border: "1px solid #333",
              outline: "none",
              backgroundColor: "#000",
              color: "#fff",
              minWidth: "200px",
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              backgroundColor: "#e50914",
              color: "#fff",
              fontSize: "18px",
              padding: "0 25px",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Subscribed
          </button>
        </div>

        {/* Error message */}
        {error && <p style={{ color: "orange", marginTop: "15px" }}>{error}</p>}

        {/* Success message */}
        {subscribed && (
          <p style={{ color: "lightgreen", marginTop: "15px" }}>
            ✅ Subscribed successfully!
          </p>
        )}
      </div>

      {/* Contact */}
      <div style={{ textAlign: "left" }}>
        <p
          style={{
            // marginBottom: "20px",
            // marginTop: "20px",
            // fontSize: "17px",
            // // justifyContent: "center",
            // justifyContent: "space-between",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            marginTop: "20px",
            marginBottom:"40px",
            fontSize: "17px",


          }}
        >
          @Vegamovies.All Rights Reserved{" "}
          <Link to="/contact" style={linkStyle}>
            Contact us
          </Link>
        </p>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#757575",
  fontSize: "15px",
  fontWeight: "bold",
  textDecoration: "underline",
  
};

export default Footer;
























// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#000",
//         color: "#757575",
//         fontFamily:
//           "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//         fontSize: "13px",
//       }}
//     >
//       {/* Top Email Signup */}
//       <div
//         style={{
//           textAlign: "center",
//           padding: "40px 20px",
//           borderBottom: "1px solid #222",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "38px",
//             color: "#fff",
//             marginBottom: "20px",
//           }}
//         >
//           Let's Connect
//         </p>
//         <p
//           style={{
//             fontSize: "15px",
//             color: "#fff",
//             marginBottom: "20px",
//           }}
//         >
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "10px",
//             maxWidth: "600px",
//             margin: "0 auto",
//           }}
//         >
//           <input
//             type="email"
//             placeholder="Email address"
//             style={{
//               flex: "1 1 250px",
//               padding: "15px",
//               fontSize: "16px",
//               border: "1px solid #333",
//               outline: "none",
//               backgroundColor: "#000",
//               color: "#fff",
//               minWidth: "200px",
//             }}
//           />
//           <button
//             style={{
//               backgroundColor: "#e50914",
//               color: "#fff",
//               fontSize: "18px",
//               padding: "0 25px",
//               border: "none",
//               cursor: "pointer",
//               whiteSpace: "nowrap",
//             }}
//           >
//             Subscribed
//           </button>
//         </div>
//       </div>

//       {/* Contact */}
//       <div
//         style={{
//           // padding: "40px 5%",
//           textAlign: "center",
//         }}
//       >
//         <p
//           style={{
//             marginBottom: "20px",
//             marginTop: "20px",
//             fontSize: "17px",
//             justifyContent:"center"
//           }}
//         >
//           All Rights Reserved @Visiontrek.in{" "}
//           <a href="tel:0008009191743" style={linkStyle}></a>
//             <a href="/" style={linkStyle}>Contact us  </a> 
//         </p>

//         {/* Links Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//             gap: "15px",
//             maxWidth: "600px",
//             margin: "0 auto",
//           }}
//         ></div>
//       </div>
//     </footer>
//   );
// };

// const linkStyle = {
//   color: "#757575",
//   fontSize: "15px",
//   fontWeight: "bold",
//   textDecoration: "underline",
// };

// export default Footer;


// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#000",
//         color: "#757575",
//         fontFamily:
//           "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//         fontSize: "13px",
//       }}
//     >
//       {/* Top Email Signup */}
//       <div
//         style={{
//           textAlign: "center",
//           padding: "40px 20px",
//           borderBottom: "1px solid #222",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "38px",
//             color: "#fff",
//             marginBottom: "20px",
//           }}
//         >
//           Let's Connect
//         </p>
//         <p
//           style={{
//             fontSize: "15px",
//             color: "#fff",
//             marginBottom: "20px",
//           }}
//         >
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "10px",
//             maxWidth: "600px",
//             margin: "0 auto",
//           }}
//         >
//           <input
//             type="email"
//             placeholder="Email address"
//             style={{
//               flex: "1 1 250px",
//               padding: "15px",
//               fontSize: "16px",
//               border: "1px solid #333",
//               outline: "none",
//               backgroundColor: "#000",
//               color: "#fff",
//               minWidth: "200px",
//             }}
//           />
//           <button
//             style={{
//               backgroundColor: "#e50914",
//               color: "#fff",
//               fontSize: "18px",
//               padding: "0 25px",
//               border: "none",
//               cursor: "pointer",
//               whiteSpace: "nowrap",
//             }}
//           >
//             Subscribed
//           </button>
//         </div>
//       </div>

//       {/* Contact */}
//       <div style={{ textAlign: "center" }}>
//         <p
//           style={{
//             marginBottom: "20px",
//             marginTop: "20px",
//             fontSize: "17px",
//             justifyContent: "center",
//           }}
//         >
//           All Rights Reserved @Visiontrek.in{" "}
//           <Link to="/contact" style={linkStyle}>
//             Contact us
//           </Link>
//         </p>
//       </div>
//     </footer>
//   );
// };

// const linkStyle = {
//   color: "#757575",
//   fontSize: "15px",
//   fontWeight: "bold",
//   textDecoration: "underline",
// };

// export default Footer;
