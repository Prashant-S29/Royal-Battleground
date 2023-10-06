"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import discord from "../../assets/socials/discord.png";
import instagram from "../../assets/socials/instagram.png";
import whatsapp from "../../assets/socials/whatsapp.png";

const SUCCESSPAGE = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[#ffffff] text-[#000000] px-[20px]">
        <div className="text-center">
          <div>
            <span className="text-[32px] md:text-[48px] lg:text-[68px] font-black leading-none md:leading-normal">
              Registration Successful<span className="text-[#ffd036]">.</span>
            </span>
          </div>
          <div className="mt-[10px] md:mt-0">
            <span className="font-extrabold text-[18px] md:text-[24px] lg:text-[32px]">
              You have successfully registered in{" "}
              <span className="text-[#ffd036]">Erangle - Classic</span>{" "}
              Tournament
            </span>
          </div>
          <div className="mt-[10px] text-[14px] md:text-[16px]">
            <span className="font-semibold">
              You will be added to our tournament group once your payment is
              verified
            </span>
          </div>
          <div className="mt-[10px] text-[14px] md:text-[16px]">
            <span>In case of any technical issues, do join our community</span>
          </div>
          <div className="flex justify-center mt-[20px]">
            <div>
              <ul className="flex gap-8 items-center">
                <li>
                  <Link href="https://www.instagram.com/royal_battleground_esport/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    <Image
                      src={instagram}
                      alt="instagram"
                      className="w-[24px] md:w-[30px] hover:scale-110 duration-150 cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4AJw9eJC">
                    <Image
                      src={discord}
                      alt="discord"
                      className="w-[28px] md:w-[34px] hover:scale-110 duration-150 cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://chat.whatsapp.com/DMTeZz8Hq0i0Q4CVJvRh8B">
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-[24px] md:w-[30px] hover:scale-110 duration-150 cursor-pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="block md:flex flex-wrap gap-5 justify-center mt-[20px]">
            <Link href="/contactus">
              <button
                className="w-full md:w-fit px-[15px] py-[9px] border  bg-black text-white rounded-[10px] font-semibold text-[14px] 
                "
              >
                Contact us
              </button>
            </Link>
            <Link href="/#tournaments">
              <button
                className=" mt-[10px] md:mt-0 w-full md:w-fit px-[15px] py-[8px] text-black border border-black  rounded-[10px] font-semibold text-[14px] 
                "
              >
                See more Tournaments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SUCCESSPAGE;
