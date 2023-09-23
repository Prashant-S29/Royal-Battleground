import React from "react";
import Image from "next/image";
import Link from "next/link";

// import "react-double-marquee";

import "../app/style/animation.css";
import "../app/style/glitch-texteffect.css";

import mainbg from "../assets/backdrop/mainbackdrop.png";
import plane1 from "../assets/frontside-assets/plane1.png";
import plane2 from "../assets/frontside-assets/plane2.png";
import planet1 from "../assets/frontside-assets/planet1.png";
import stone1 from "../assets/frontside-assets/stone1.png";

import discord from "../assets/socials/discord.png";
// import instagram from "../assets/socials/instagram.png";
import whatsapp from "../assets/socials/whatsapp.png";
// import twitch from "../assets/socials/twitch.png";

import bgmi from "../assets/tournament-assets/bgmi.png";
import minecraft from "../assets/tournament-assets/minecraft.png";
import freefire from "../assets/tournament-assets/freefire.png";
import valorant from "../assets/tournament-assets/valorant.png";

const socials = [
  {
    social_name: "discord",
    social_icon: discord,
    socail_link: "/",
  },
  // {
  //   social_name: "instagram",
  //   social_icon: instagram,
  //   socail_link: "/",
  // },
  {
    social_name: "whatsapp",
    social_icon: whatsapp,
    socail_link: "/",
  },
];

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
          <Link href="#tournaments">
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
            {/* <div>
              <span className="text-[14px] md:text-[18px] lg:text-[20px] font-extrabold lg:font-black text-white uppercase tracking-widest ">
                Team &nbsp;Royal &nbsp;Presents
              </span>
            </div> */}
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
              <span className="font-semibold text-[14px] md:text-[16px] text-white uppercase tracking-widest">
                one place for all competitive tournaments
              </span>
            </div>
            <div className="mt-[30px] flex justify-center gap-[30px]">
              <Link href="#tournaments">
                <div className="relative">
                  <button className="px-[14px] py-[8px] text-[16px] text-black border-2 uppercase font-bold bg-[#ffffff54] hover:bg-transparent duration-300 tracking-wider ">
                    Register
                  </button>
                </div>
              </Link>
            </div>
            <div className="relative flex justify-center items-center mt-[30px]">
              <div className="w-[80px] md:w-[150px] h-[1px] md:h-[2px] bg-white rounded-full" />
              <div className="px-[10px] md:px-[20px] bg-[#ffffff61] backdrop-blur-5 rounded-md">
                <ul className="flex justify-center items-cnter gap-[10px] md:gap-[20px]">
                  <li>
                    <div className="overflow-hidden p-2 md:p-3">
                      <Link href="/">
                        <Image
                          src={discord}
                          alt="discord"
                          className="w-[24px] md:w-[28px] hover:scale-110 duration-200"
                        />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="overflow-hidden p-2 md:p-3 -mt-[2px]">
                      <Link href="/">
                        <Image
                          src={whatsapp}
                          alt="whatsapp"
                          className="w-[24px] md:w-[28px] hover:scale-110 duration-200"
                        />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-[80px] md:w-[150px] h-[1px] md:h-[2px] bg-white rounded-full" />
            </div>
            {/* <div className="mt-[70px] w-full flex justify-center items-center z-50 bottom-0">
              <span className="font-black text-[20px] text-white">HI</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="absolute w-full h-[200px] bg-gradient-to-t from-[#000000] to-[#00000000] -mt-[200px] " />
      <div className="w-full bg-black pb-[50px]">
        <div id="tournaments" className="text-center pt-[50px]">
          <span
            className="uppercase leading-none battelground-gradient text-[36px] md:text-[72px]"
            style={{ fontFamily: "Black Ops One, sans-serif" }}
          >
            Tournaments
          </span>
        </div>
        <div className="flex flex-wrap justify-center mt-[30px] gap-[30px] md:gap-[50px] mx-[20px]">
          <Link href="/tournaments/bgmi" className="rounded-full">
            <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full flex justify-center items-center">
              <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full relative overflow-hidden">
                <Image
                  src={bgmi}
                  alt="bgmi"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-full"
                />
              </div>
              <div className="z-50 absolute">
                <span className="text-white uppercase font-black text-[28px] md:text-[36px] tracking-widest leading-none">
                  BGMI
                </span>
              </div>
            </div>
          </Link>
          <Link href="/tournaments/minecraft" className="rounded-full">
            <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full flex justify-center items-center">
              <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full relative overflow-hidden">
                <Image
                  src={minecraft}
                  alt="minecraft"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-full"
                />
              </div>
              <div className="z-50 absolute">
                <span className="text-white uppercase font-black text-[28px] md:text-[36px] tracking-widest leading-none">
                  MINECRAFT
                </span>
              </div>
            </div>
          </Link>
          <Link href="/tournaments/valorant" className="rounded-full">
            <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full flex justify-center items-center">
              <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full relative overflow-hidden">
                <Image
                  src={valorant}
                  alt="valorant"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-full"
                />
              </div>
              <div className="z-50 absolute">
                <span className="text-white uppercase font-black text-[28px] md:text-[36px] tracking-widest leading-none">
                  VALORANT
                </span>
              </div>
            </div>
          </Link>
          <Link href="/tournaments/freefire" className="rounded-full">
            <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full flex justify-center items-center">
              <div className="w-[290px] md:w-[300px] h-[120px] md:h-[140px] rounded-full relative overflow-hidden">
                <Image
                  src={freefire}
                  alt="freefire"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-full"
                />
              </div>
              <div className="z-50 absolute">
                <span className="text-white uppercase font-black text-[28px] md:text-[36px] tracking-widest leading-none">
                  Freefire
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Home;
