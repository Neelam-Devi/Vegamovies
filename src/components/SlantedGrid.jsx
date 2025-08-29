


import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import layer1 from "../assets/1.jpg";
import layer from "../assets/2.jpg";
import layer2 from "../assets/3.jpg";
import layer3 from "../assets/4.jpg";
import layer4 from "../assets/5.jpg";
import layer5 from "../assets/17.jpg";
import layer6 from "../assets/7.jpg";
import layer7 from "../assets/8.jpg";
import layer8 from "../assets/9.jpg";
import layer9 from "../assets/10.jpg";
import layer10 from "../assets/11.jpg";
import layer11 from "../assets/12.jpg";
import layer12 from "../assets/13.jpg";
import layer13 from "../assets/6.jpg";
import layer14 from "../assets/16.jpg";
import PlayIcon from "../assets/lasticon.png";
import Play from "../assets/12.png";
import PinkArcLine from "../components/PinkArcLine"
import Trending from "../components/Trending"

import Button from '@mui/material/Button';
import GradientText from "../components/GradientText";





  const imageUrls = [
    
    layer1,
    layer2,
    layer11,
    layer3,
    layer4,
    layer7,
    layer6,
    layer8,
    layer5,
    layer14,
    layer5,
    layer12,
    layer7,
    layer13,
    layer,

  ];

  

const SlantedPosterGrid = () => {
  return (
    <div className="bg-[black]   w-full  flex justify-start">
    
<div className="absolute  z-50 top-5 ml-[28px] left-5 mt-[38px] text-[white]">

<img
                src={Play}
                
                className={`w-[200px] h-[49px]
                
     
                `}
              />
              </div>
 
<div className="absolute center z-50 text-center w-full h-[200px] mt-[305px] text-[#F5EEDD]">


       
        {/* <h1 className="text-[55px] md:text-6xl font-extrabold leading-tight "> */}
      <div className="mt-[-80px] mb-[118px]">
          <h1 style={{ 
                color: "white",
    textAlign: "center",
    fontSize: "40px",
    // fontWeight: "bold",  
    marginLeft: "5px",
    marginBottom: "20px",
    fontFamily: "'Fjalla One',sans-serif",
    letterSpacing: "2.5px",
}}>
WHAT'S STREAMING <span className="text-[red]"></span>     <br/>
  <GradientText
  colors={["#D2691E", "#FF0000", "#D2691E", "#FF0000", "#D2691E"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
  
>
& WHERE</GradientText> 

        </h1>


        <a
  href="https://play.google.com/store/apps/details?id=com.visiontrek.movieapp&hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline"
>
  <button
    className="w-[200px] h-[54px] bg-gradient-to-b from-[#45484d] to-[#000000] border border-[black] text-[#F0F8FF] 
      font-bold text-[16px] rounded-[8px] flex items-center justify-center gap-9   
      px-3 duration-300
      hover:from-[#696969] hover:to-[#000000]
      transition-all mx-auto md:ml-[500px]"
  >
    <img
      src={PlayIcon}
      alt="Google Play"
      className="w-[36px] h-[47px] mr-[8px]"
    />
    <div className="flex flex-col leading-[1.1] text-left">
      <span className="text-[13px]">GET IT ON</span>
      <span className="text-[20px]">Google Play</span>
    </div>
  </button>
</a>
 
 </div>

<br/>
<br/>
<br/>

<PinkArcLine/>
 </div>

<div
  className="
    grid 
    grid-cols-5 
    sm:grid-cols-2 
    md:grid-cols-4 
    lg:grid-cols-5 
    h-full
    w-[5800px]
    mt-[-46px]
    ml-[-35px]
    mr-[-15px]
    justify-items-center
    gap-1
  "
  style={{
    transform: "rotate(5deg)",
    transformOrigin: "center",
  }}
>
  {imageUrls.map((url, i) => {
    const desktopClass =
      i === 0
        ? "w-[295px] h-[282px] mr-[295px] ml-[-10px] mt-[18px]"
        : i === 1
        ? "w-[270px] h-[300px] mr-[198px]"
        : i === 2
        ? "w-[280px] h-[300px] mr-[217px]"
        : i === 3
        ? "w-[290px] h-[300px] mr-[180px]"
        : i === 4
        ? "w-[315px] h-[300px] mr-[78px]"
        : i === 5
        ? "w-[280px] h-[300px] mr-[205px]"
        : i === 6
        ? "w-[280px] h-[300px] mr-[305px] ml-[1px]"
        : i === 7
        ? "w-[250px] h-[300px] mr-[208px]"
        : i === 8
        ? "w-[380px] h-[300px] mr-[149px]"
        : i === 9
        ? "w-[398px] h-[300px] mr-[148px] "
        : i === 10
        ? "w-[210px] h-[300px] mr-[138px]"
        : i === 11
        ? "w-[320px] h-[300px] mr-[108px]"
        : i === 12
        ? "w-[300px] h-[300px] mr-[1px] ml-[14px]"
        : i === 13
        ? "w-[180px] h-[300px] mr-[8px] brightness-[0.0]"
        : i === 14
        ? "w-[320px] h-[300px] mr-[8px]"
        : "w-[280px] h-[280px]";

    // 📱 Mobile-optimized style
    const mobileClass = `
      max-sm:w-[100px] 
      max-sm:h-[20px] 
      max-sm:mt-0 
      max-sm:mb-0
    `;

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.6 }}
        className="relative w-full"
      >
        <Tilt
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          perspective={1000}
          transitionSpeed={1000}
          scale={1}
          gyroscope={true}
          className="block"
        >
          <motion.div
            whileHover={{
              x: -10,
              y: -20,
              scale: 1.05,
              zIndex: 50,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="transform overflow-hidden rounded-xl relative shadow-md"
          >
            <img
              src={url}
              alt={`Poster ${i}`}
              className={`
                ${desktopClass}
                ${mobileClass}
                object-cover 
                brightness-[0.2] 
                hover:brightness-30 
                transition 
                duration-300
              `}
            />
          </motion.div>
        </Tilt>
      </motion.div>
    );
  })}
</div>


  
</div>


  );
};

export default SlantedPosterGrid;




















// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import layer1 from "../assets/1.jpg";
// import layer from "../assets/2.jpg";
// import layer2 from "../assets/3.jpg";
// import layer3 from "../assets/4.jpg";
// import layer4 from "../assets/5.jpg";
// import layer5 from "../assets/17.jpg";
// import layer6 from "../assets/7.jpg";
// import layer7 from "../assets/8.jpg";
// import layer8 from "../assets/9.jpg";
// import layer9 from "../assets/10.jpg";
// import layer10 from "../assets/11.jpg";
// import layer11 from "../assets/12.jpg";
// import layer12 from "../assets/13.jpg";
// import layer13 from "../assets/6.jpg";
// import layer14 from "../assets/16.jpg";
// import PlayIcon from "../assets/lasticon.png";
// import Play from "../assets/12.png";
// import PinkArcLine from "../components/PinkArcLine"
// import Trending from "../components/Trending"

// import Button from '@mui/material/Button';
// import GradientText from "../components/GradientText";





//   const imageUrls = [
    
//     layer1,
//     layer2,
//     layer11,
//     layer3,
//     layer4,
//     layer7,
//     layer6,
//     layer8,
//     layer5,
//     layer14,
//     layer5,
//     layer12,
//     layer7,
//     layer13,
//     layer,

//   ];

  

// const SlantedPosterGrid = () => {
//   return (
//     <div className="bg-[black]   w-full  flex justify-start">
    
// <div className="absolute  z-50 top-5 ml-[28px] left-5 mt-[38px] text-[white]">

// <img
//                 src={Play}
                
//                 className={`w-[200px] h-[49px]
                
     
//                 `}
//               />
//               </div>
 
// <div className="absolute center z-50 text-center w-full h-[200px] mt-[305px] text-[#F5EEDD]">


       
//         {/* <h1 className="text-[55px] md:text-6xl font-extrabold leading-tight "> */}
//       <div className="mt-[-80px] mb-[118px]">
//           <h1 style={{ 
//                 color: "white",
//     textAlign: "center",
//     fontSize: "40px",
//     // fontWeight: "bold",  
//     marginLeft: "5px",
//     marginBottom: "20px",
//     fontFamily: "'Mozilla Text',sans-serif",
//     // letterSpacing: "2px",

        
//          }}>
//        WHAT'S STREAMING  <span className="text-[red]"></span>     <br/>
//                {/* <div className="text-[white] text-center text-[38px] font-bold ml-[5px] mb-[20px] font-[sans-serif] ">
//                WHAT'S STREAMING 
//                <div
// //   style={{
// //     color: "white",
// //     textAlign: "center",
// //     fontSize: "38px",
// //     fontWeight: "bold",  
// //     marginLeft: "5px",
// //     marginBottom: "20px",
// //     fontFamily: "sans-serif",
// //     letterSpacing: "2px",

// //   }}
// // >
// //   WHAT'S STREAMING */}
        
//        {/* <br/> */}
//        <GradientText
//   colors={["#D2691E", "#FF0000", "#D2691E", "#FF0000", "#D2691E"]}
//   animationSpeed={3}
//   showBorder={false}
//   className="custom-class"
  
// >
// & WHERE</GradientText> 
// {/* <GradientText
//   colors={["#D2691E", "#FF0000", "#D2691E", "#FF0000", "#D2691E"]}
//   animationSpeed={3}
//   showBorder={false}
//   style={{
//     fontSize: "38px",
//     fontWeight: "bold",
//     textAlign: "center",
//     fontFamily: "sans-serif",
//   }}
// >
//   & WHERE
// </GradientText> */}

// {/* </h1> */}


//         {/* <span className="text-[40px] md:text-[50px] text-[red] " style={{ wordSpacing: "9px" }}>  & WHERE</span> */}
        
//         </h1>


//         <a
//   href="https://play.google.com/store/apps/details?id=com.visiontrek.movieapp&hl=en"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="no-underline"
// >
//   <button
//     className="w-[200px] h-[54px] bg-gradient-to-b from-[#45484d] to-[#000000] border border-[black] text-[#F0F8FF] 
//       font-bold text-[16px] rounded-[8px] flex items-center justify-center gap-9   
//       px-3 duration-300
//       hover:from-[#696969] hover:to-[#000000]
//       transition-all mx-auto md:ml-[500px]"
//   >
//     <img
//       src={PlayIcon}
//       alt="Google Play"
//       className="w-[36px] h-[47px] mr-[8px]"
//     />
//     <div className="flex flex-col leading-[1.1] text-left">
//       <span className="text-[13px]">GET IT ON</span>
//       <span className="text-[20px]">Google Play</span>
//     </div>
//   </button>
// </a>





// {/* <button
//   className="w-[200px] h-[54px] bg-gradient-to-b from-[#45484d] to-[#000000] border border-[black] text-[#F0F8FF] 
//     font-bold text-[16px] rounded-[8px] flex items-center justify-center gap-9   
//     px-3  duration-300
//     hover:from-[#696969] hover:to-[#000000]
//   transition-all mx-auto md:ml-[500px]
//   "
// >
//   <img
//     src={PlayIcon}
//     alt="Google Play"
//     className="w-[36px] h-[47px] mr-[8px]"
//   />

//   <div className="flex flex-col leading-[1.1] text-left">
//     <span className="text-[13px]">GET IT ON</span>
//     <span className="text-[20px]">Google Play</span>
//   </div>
// </button> */}

 


//       </div>

// <br/>
// <br/>
// <br/>

// <PinkArcLine/>

// {/* <Trending /> */}





// {/* </div> */}

//         </div>





// {/* <div
//   className="
//   grid 
//   grid-cols-5 
//   sm:grid-cols-2 
//   md:grid-cols-4 
//   lg:grid-cols-5 
//   justify-items-center
//   gap-1
//   "
//   style={{
//     transform: "rotate(5deg)",
//     transformOrigin: "center",
//   }}
// >
//   {imageUrls.map((url, i) => {
//     const desktopClass =
//       i === 0
//         ? "w-[285px] h-[282px] mr-[210px] mt-[18px]"
//         : i === 1
//         ? "w-[230px] h-[300px] mr-[198px]"
//         : i === 2
//         ? "w-[250px] h-[300px] mr-[217px]"
//         : i === 3
//         ? "w-[290px] h-[300px] mr-[180px]"
//         : i === 4
//         ? "w-[315px] h-[300px] mr-[78px]"
//         : i === 5
//         ? "w-[280px] h-[300px] mr-[205px]"
//         : i === 6
//         ? "w-[250px] h-[300px] mr-[205px] ml-[30px]"
//         : i === 7
//         ? "w-[220px] h-[300px] mr-[208px]"
//         : i === 8
//         ? "w-[380px] h-[300px] mr-[149px]"
//         : i === 9
//         ? "w-[340px] h-[300px] mr-[138px] ml-[10px]"
//         : i === 10
//         ? "w-[210px] h-[300px] mr-[138px]"
//         : i === 11
//         ? "w-[320px] h-[300px] mr-[108px]"
//         : i === 12
//         ? "w-[300px] h-[300px] mr-[1px] ml-[14px]"
//         : i === 13
//         ? "w-[180px] h-[300px] mr-[8px] brightness-[0.0]"
//         : i === 14
//         ? "w-[320px] h-[300px] mr-[8px]"
//         : "w-[280px] h-[280px]";

//     // Mobile 3-column layout, equal height
//     const mobileClass = "w-full h-[80px]";

//     return (
//       <motion.div
//         key={i}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: i * 0.05, duration: 0.6 }}
//         className="relative w-full"
//       >
//         <Tilt
//           tiltMaxAngleX={25}
//           tiltMaxAngleY={25}
//           perspective={1000}
//           transitionSpeed={1000}
//           scale={1}
//           gyroscope={true}
//           className="block"
//         >
//           <motion.div
//             whileHover={{
//               x: -10,
//               y: -20,
//               scale: 1.05,
//               zIndex: 50,
//               transition: { type: "spring", stiffness: 300, damping: 20 },
//             }}
//             className="transform overflow-hidden rounded-xl relative shadow-md"
//           >
//             <img
//               src={url}
//               alt={`Poster ${i}`}
//               className={`
//                 ${desktopClass}
//                 max-sm:${mobileClass}
//                 object-cover 
//                 brightness-[0.2] 
//                 hover:brightness-30 
//                 transition 
//                 duration-300
//               `}
//             />
//           </motion.div>
//         </Tilt>
//       </motion.div>
//     );
//   })}
// </div> */}



// <div
//   className="
//     grid 
//     grid-cols-5 
//     sm:grid-cols-2 
//     md:grid-cols-4 
//     lg:grid-cols-5 
//     h-full
//     w-[5800px]
//     mt-[-46px]
//     ml-[-35px]
//     mr-[-15px]
//     justify-items-center
//     gap-1
//   "
//   style={{
//     transform: "rotate(5deg)",
//     transformOrigin: "center",
//   }}
// >
//   {imageUrls.map((url, i) => {
//     const desktopClass =
//       i === 0
//         ? "w-[295px] h-[282px] mr-[295px] ml-[-10px] mt-[18px]"
//         : i === 1
//         ? "w-[270px] h-[300px] mr-[198px]"
//         : i === 2
//         ? "w-[280px] h-[300px] mr-[217px]"
//         : i === 3
//         ? "w-[290px] h-[300px] mr-[180px]"
//         : i === 4
//         ? "w-[315px] h-[300px] mr-[78px]"
//         : i === 5
//         ? "w-[280px] h-[300px] mr-[205px]"
//         : i === 6
//         ? "w-[280px] h-[300px] mr-[305px] ml-[1px]"
//         : i === 7
//         ? "w-[250px] h-[300px] mr-[208px]"
//         : i === 8
//         ? "w-[380px] h-[300px] mr-[149px]"
//         : i === 9
//         ? "w-[398px] h-[300px] mr-[148px] "
//         : i === 10
//         ? "w-[210px] h-[300px] mr-[138px]"
//         : i === 11
//         ? "w-[320px] h-[300px] mr-[108px]"
//         : i === 12
//         ? "w-[300px] h-[300px] mr-[1px] ml-[14px]"
//         : i === 13
//         ? "w-[180px] h-[300px] mr-[8px] brightness-[0.0]"
//         : i === 14
//         ? "w-[320px] h-[300px] mr-[8px]"
//         : "w-[280px] h-[280px]";

//     // 📱 Mobile-optimized style
//     const mobileClass = `
//       max-sm:w-[100px] 
//       max-sm:h-[20px] 
//       max-sm:mt-0 
//       max-sm:mb-0
//     `;

//     return (
//       <motion.div
//         key={i}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: i * 0.05, duration: 0.6 }}
//         className="relative w-full"
//       >
//         <Tilt
//           tiltMaxAngleX={25}
//           tiltMaxAngleY={25}
//           perspective={1000}
//           transitionSpeed={1000}
//           scale={1}
//           gyroscope={true}
//           className="block"
//         >
//           <motion.div
//             whileHover={{
//               x: -10,
//               y: -20,
//               scale: 1.05,
//               zIndex: 50,
//               transition: { type: "spring", stiffness: 300, damping: 20 },
//             }}
//             className="transform overflow-hidden rounded-xl relative shadow-md"
//           >
//             <img
//               src={url}
//               alt={`Poster ${i}`}
//               className={`
//                 ${desktopClass}
//                 ${mobileClass}
//                 object-cover 
//                 brightness-[0.2] 
//                 hover:brightness-30 
//                 transition 
//                 duration-300
//               `}
//             />
//           </motion.div>
//         </Tilt>
//       </motion.div>
//     );
//   })}
// </div>


  
// </div>


//   );
// };

// export default SlantedPosterGrid;
