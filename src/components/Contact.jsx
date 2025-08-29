
import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // 3 seconds baad message hide ho jayega
  };

  return (

<>
<div className=" flex justify-start px-5 py-3 mt-[14px] ml-[10px]">
        <Link
          to="/"
          className=" no-underline w-[150px] h-[54px] bg-gradient-to-b from-[#45484d] to-[#000000] 
                     border border-[black] text-[#F0F8FF] font-bold text-[16px] rounded-[8px] 
                     flex items-center justify-center px-3 duration-300 hover:scale-105"
        >
          <span className="text-[20px]">Back</span>
        </Link>
      </div>

    <div
      style={{
        backgroundColor: "#0f0f0f",
        color: "#fff",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        fontFamily: "Arial, sans-serif",
        marginTop:"-48px"
      }}
    >
      {/* Left Section */}
      <div style={{ flex: "1", minWidth: "300px", paddingRight: "30px" }}>
        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #ff00cc, #ff9933)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let's talk
        </h1>
        <p style={{ lineHeight: "1.6", color: "#ccc" }}>
          Whether it’s directing your dream project, writing a gripping script,
          or producing cinematic magic.<br/><br/> I’m here to bring stories to life. Fill
          out the form and let’s start.
        </p>

        {/* <div style={{ marginTop: "40px" }}>
          <p style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <FaEnvelope style={{ marginRight: "10px", color: "#ccc" }} />
            visiontrek@gmail.com
          </p>
          <p style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
            <FaPhoneAlt style={{ marginRight: "10px", color: "#ccc" }} />
            +91 800000-33571
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <FaMapMarkerAlt style={{ marginRight: "10px", color: "#ccc" }} />
            Mohali, Punjab
          </p>
        </div> */}
      </div>

      {/* Right Section - Contact Form */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "5px", marginTop: "58px",color: "#ccc" }}>
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              background: "#1e1e1e",
              color: "#fff",
              outline: "none",
            }}
          />

          <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              background: "#1e1e1e",
              color: "#fff",
              outline: "none",
            }}
          />

          <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>
            Write your message here
          </label>
          <textarea
            placeholder="Enter your message"
            rows="5"
            style={{
              width: "100%",
              height:"200px",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              background: "#1e1e1e",
              color: "#fff",
              outline: "none",
              resize: "none",
              textAlign: "left",
    verticalAlign: "top"
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff00cc, #ff9933)",
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              width: "140px",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              // boxShadow:"208px",

            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 15px rgba(255, 0, 204, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
          >
            Submit
          </button>

          {submitted && (
            <p style={{ color: "lightgreen", marginTop: "15px" }}>
              ✅ Successfully Submitted
            </p>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactSection;


















// import React, { useState } from "react";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// const ContactSection = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     // Hide message after 3 seconds
//     setTimeout(() => {
//       setSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#0f0f0f",
//         color: "#fff",
//         padding: "50px 20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           gap: "40px",
//           maxWidth: "1100px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Left Section */}
//         <div style={{ flex: "1 1 300px" }}>
//           <h1
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               background: "linear-gradient(90deg, #ff00cc, #ff9933)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Let's talk
//           </h1>
//           <p style={{ lineHeight: "1.6", color: "#ccc", fontSize: "1rem" }}>
//             Whether it’s directing your dream project, writing a gripping script, or producing cinematic magic, I’m here to bring stories to life. Fill out the form below and let’s start our next reel together.
//           </p>

//           <div style={{ marginTop: "20px", fontSize: "0.95rem" }}>
//             <p style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//               <FaEnvelope style={{ marginRight: "10px", color: "#ccc" }} />
//               visiontrek@gmail.com
//             </p>
//             <p style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//               <FaPhoneAlt style={{ marginRight: "10px", color: "#ccc" }} />
//               +91 800000-33571
//             </p>
//             <p style={{ display: "flex", alignItems: "center" }}>
//               <FaMapMarkerAlt style={{ marginRight: "10px", color: "#ccc" }} />
//               Mohali, Punjab
//             </p>
//           </div>
//         </div>

//         {/* Right Section - Contact Form */}
//         <div style={{ flex: "1 1 300px" }}>
//           <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
//             <label style={{ marginBottom: "5px", color: "#ccc" }}>Your Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               style={inputStyle}
//               required
//             />

//             <label style={{ marginBottom: "5px", color: "#ccc" }}>Your Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               style={inputStyle}
//               required
//             />

//             <label style={{ marginBottom: "5px", color: "#ccc" }}>Write your message here</label>
//             <textarea
//               placeholder="Enter your message"
//               rows="5"
//               style={{ ...inputStyle, resize: "none" }}
//               required
//             ></textarea>

//             <button type="submit" style={buttonStyle}>
//               Submit
//             </button>

//             {/* Success Message */}
//             {submitted && (
//               <p
//                 style={{
//                   marginTop: "15px",
//                   color: "#4caf50",
//                   fontWeight: "bold",
//                 }}
//               >
//                 ✅ Successfully Submitted!
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Input style (reusable)
// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "15px",
//   borderRadius: "8px",
//   border: "none",
//   background: "#1e1e1e",
//   color: "#fff",
//   outline: "none",
//   fontSize: "1rem",
// };

// // Button style
// const buttonStyle = {
//   background: "linear-gradient(90deg, #ff00cc, #ff9933)",
//   padding: "12px 20px",
//   border: "none",
//   borderRadius: "20px",
//   color: "#fff",
//   fontWeight: "bold",
//   cursor: "pointer",
//   width: "120px",
//   fontSize: "1rem",
// };

// export default ContactSection;


