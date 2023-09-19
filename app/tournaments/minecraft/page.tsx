import React from "react";
import Image from "next/image";
import Link from "next/link";

import bgmi_bg from "../../../assets/tournament-assets/minecraft-bg.png";

const MINECRAFT = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-end">
        <div>
          <Image
            src={bgmi_bg}
            alt="bgmi_bg"
            className="w-full h-screen object-cover fixed top-0 left-0 -z-10 "
          />
        </div>
        <div className="w-full">
          <div className="w-full h-[350px] bottom-0 bg-gradient-to-t from-[#000000] to-[#ffffff00] mt-[100px] backdrop-blur-5 " />
          <div className="w-full h-fit -mt-[10px] bg-[#000000] px-[20px] md:px-[40px] xl:px-[80px] pb-[20px] md:pb-[40px] lg:pb-[80px]">
            <div>
              <span className="font-black text-[#ffd036] text-[34px] md:text-[48px] xl:text-[72px] uppercase">
                Minecraft
              </span>
            </div>
            <div className="flex items-center text-[12px] md:text-[14px] overflow-x-scroll ">
              <div className="flex items-center gap-1">
                <div>
                  <span className="text-white font-semibold">4</span>
                </div>
                <div>
                  <span className="text-white leading-none">⭐⭐⭐⭐</span>
                </div>
              </div>
              {/* <div className="h-[30px] min-w-[1px] bg-[#b0b0b0] mx-[10px]" />
              <div className="flex items-center gap-2">
                <div>
                  <div className="w-[10px] aspect-square bg-red-500 rounded-full live-dot-animation " />
                </div>
                <div>
                  <span className="text-white uppercase font-semibold">
                    1&nbsp; Live&nbsp; Tournament
                  </span>
                </div>
              </div> */}
              <div className="h-[30px] min-w-[1px] bg-[#b0b0b0] mx-[10px]" />
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-white uppercase font-semibold">
                    No&nbsp; Tournaments&nbsp; Available
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="mt-[30px] flex flex-wrap justify-left gap-[20px] md:gap-[40px] lg:gap-[20px] xl:gap-[50px]">
              <div className="min-w-full lg:min-w-[300px] h-[350px] bg-slate-500 rounded-md"></div>
              <div className="min-w-full lg:min-w-[300px] h-[350px] bg-slate-500 rounded-md"></div>
              <div className="min-w-full lg:min-w-[300px] h-[350px] bg-slate-500 rounded-md"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MINECRAFT;
