import React from "react";
import Image from "next/image";

import mainbg from "../assets/backdrop/mainbackdrop.png";
import plane1 from '../assets/frontside-assets/plane1.png'
import planet1 from "../assets/frontside-assets/planet1.png"

const Home = () => {
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <Image
          src={mainbg}
          alt="mainbackdrop"
          className="w-full h-screen  object-cover -z-10 absolute"
        />
        <Image
          src={plane1}
          alt="plane1"
          className="w-[100px] md:w-[150px] absolute hover:scale-125 animate-pulse hover:animate-none duration-300 "
        />
        <Image
          src={planet1}
          alt="planet1"
          className="w-[100px] md:w-[150px] -ml-[20px] md:-ml-[50px]  absolute top-[500px] hover:scale-125 duration-300"
        />
        <div className="w-full h-screen flex justify-center items-center z-20">
          <span className="text-white font-bold text-[20px]">HOME PAGE</span>
        </div>
      </div>
    </>
  );
};

export default Home;
