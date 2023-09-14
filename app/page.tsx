import React from "react";
import Image from "next/image";
import Link from "next/link";

import "../app/style/animation.css";
import "../app/style/glitch-texteffect.css";

import mainbg from "../assets/backdrop/mainbackdrop.png";
import plane1 from "../assets/frontside-assets/plane1.png";
import plane2 from "../assets/frontside-assets/plane2.png";
import planet1 from "../assets/frontside-assets/planet1.png";
import stone1 from "../assets/frontside-assets/stone1.png";
// import car1 from "../assets/frontside-assets/car1.png";

// import button1 from "../assets/buttons/button1.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen overflow-hidden ">
        <Image
          src={mainbg}
          alt="mainbackdrop"
          className="w-full h-screen  object-cover -z-10 absolute  "
        />
        <div className="absolute hover:scale-125 hover:animate-none duration-300 z-10 w-fit">
          <Link href="/tournaments">
            <div>
              <Image
                src={plane1}
                alt="plane1"
                className="w-[100px] md:w-[150px] animate-pulse"
              />
            </div>
          </Link>
          <div className="absolute animate-ping top-6 md:top-10 left-6 md:left-10 w-[5px] md:w-[7px] aspect-square rounded-full bg-red-500" />
        </div>
        <Image
          src={planet1}
          alt="planet1"
          className="w-[50px] md:w-[100px] -ml-[20px] md:-ml-[30px]  absolute top-[500px] palnet-animation-1 "
        />

        <div className="absolute w-full h-screen overflow-hidden">
          <Image
            src={stone1}
            alt="stone1"
            className="w-[40px] md:w-[80px] lg:w-[120px] absolute stone-animation1 -top-[100px]"
          />
          <Image
            src={stone1}
            alt="stone1"
            className="w-[60px] lg:w-[80px] absolute stone-animation2 -bottom-[100px]"
          />
          <Image
            src={plane2}
            alt="plane2"
            className="w-[80px] md:w-[120px] absolute plane-glow-animation plane2-aniamtion"
          />
        </div>
        <div className="w-full h-screen flex justify-center items-center z-20">
          <div className="text-center">
            <div>
              <span className="text-[14px] md:text-[18px] lg:text-[20px] font-extrabold lg:font-black text-white uppercase tracking-widest ">
                Team &nbsp;Royal &nbsp;Presents
              </span>
            </div>
            <div className="block xl:flex justify-center gap-5 max-[320px]:text-[38px] text-[40px] md:text-[80px] lg:text-[100px] -mt-[20px] xl:mt-0">
              <div className="mt-[20px] md:mt-0">
                <span
                  className="uppercase  leading-none text-white"
                  style={{ fontFamily: "Black Ops One, sans-serif" }}
                >
                  Royal
                </span>
              </div>
              <div className="-mt-[20px] xl:mt-0">
                <div className="hero-container">
                  <div className="environment"></div>
                  <h2 className="hero glitch layers">
                    <span
                      className="uppercase   leading-none battelground-gradient"
                      style={{ fontFamily: "Black Ops One, sans-serif" }}
                    >
                      Battleground
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="mx-[20px]">
              <span className="text-[14px] md:text-[16px] text-white uppercase tracking-widest">
                one place for all competitive tournaments
              </span>
            </div>
            <div className="mt-[30px] flex justify-center gap-[30px]">
              <Link href="/tournaments">
                <div className="relative">
                  <button className="px-[14px] py-[8px] text-[16px] text-black border-2 uppercase font-semibold bg-[#ffffff54] hover:bg-transparent duration-300 ">
                    Register
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
