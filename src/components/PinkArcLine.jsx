
  
import React from "react";

const ArcLine = () => {
  return (
    <>
    <div className="w-full z-60 h-[250px]"> {/* bigger container height */}
      <svg
        viewBox="0 0 1440 750"  // much taller viewBox
        className="w-full h-[400px]"  // taller SVG height
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pinkGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff007f" />
            <stop offset="100%" stopColor="#CF3B0E" />
          </linearGradient>

          <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="9"               // more downward glow offset
              stdDeviation="15"    // bigger blur for stronger glow
              floodColor="#3b82f6"
              floodOpacity="0.8"
            />
          </filter>
        </defs>

        {/* Black background below arc, extended lower */}
        <path
          d="M0,160 C480,80 960,80 1440,160 L1440,700 L0,700 Z"  // extended to bottom y=700
          fill="black"
        />

        {/* Pink arc with blue glow */}
        <path
          d="M0,160 C480,80 960,80 1440,160"
          fill="none"
          stroke="url(#pinkGlow)"
          strokeWidth="8"
          filter="url(#blueGlow)"
        />
      </svg>
    </div>
    </>
  );
};

export default ArcLine;








// import React from "react";

// const ArcLine = () => {
//   return (
//     <div className="w-full z-60 h-[500px]">
//       <svg
//         viewBox="0 0 1440 320"
//         className="w-full h-[160px]"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <linearGradient id="pinkGlow" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#ff007f" />
//             <stop offset="100%" stopColor="#CF3B0E" />
//           </linearGradient>

//           <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
//             <feDropShadow
//               dx="0"
//               dy="0"
//               stdDeviation="6"
//               floodColor="#3b82f6"
//               floodOpacity="0.7"
//             />
//           </filter>
//         </defs>

//         {/* Black background below arc */}
//         <path
//           d="M0,160 C480,80 960,80 1440,160 L1440,420 L0,420 Z"
//           fill="black"
//         />

//         {/* Pink arc with blue glow */}
//         <path
//           d="M0,160 C480,80 960,80 1440,160"
//           fill="none"
//           stroke="url(#pinkGlow)"
//           strokeWidth="8"
//           filter="url(#blueGlow)"
//         />
//       </svg>
//     </div>
//   );
// };

// export default ArcLine;