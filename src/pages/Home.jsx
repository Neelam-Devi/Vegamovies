import React from "react";
import bgImg from "../assets/bg.jpg";
import Trending from "../components/Trending"; 
import SlantedGrid from "../components/SlantedGrid";
import Footer from "../components/Footer";
import Card from "../components/Card";




const Home = () => {
  return (
    <>
<div className="w-full bg-[black] overflow-hidden px-0 mx-0">
<SlantedGrid />
    <div className="absolute center z-60 text-center w-full h-[90px] mt-[470px] text-[#F5EEDD]">

<Trending />
</div>
<Card/>
<Footer/>
</div>
</>
 );
};

export default Home;


