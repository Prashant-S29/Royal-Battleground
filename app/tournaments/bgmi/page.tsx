import React from "react";
import Image from "next/image";
import Link from "next/link";

import bgmi_bg from "../../../assets/tournament-assets/bgmi-bg.png";

import bgmi1 from "../../../assets/tournament-assets/bgmi1.png";
import bgmi2 from "../../../assets/tournament-assets/bgmi2.png";

const tournament_data = [
  {
    t_img: bgmi1,
    t_name: "Erangle - Unranked",
    t_link: "/",
  },
];

const BGMI = () => {
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
                Battelground&nbsp; Mobile&nbsp; India
              </span>
            </div>
            <div className="flex items-center text-[12px] md:text-[14px] overflow-x-scroll ">
              <div className="flex items-center gap-1">
                <div>
                  <span className="text-white font-semibold">5</span>
                </div>
                <div>
                  <span className="text-white leading-none">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              {/* <div className="h-[30px] min-w-[1px] bg-[#b0b0b0] mx-[10px]" /> */}
              {/* <div className="flex items-center gap-2">
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
                    1&nbsp; Upcoming&nbsp; Tournament
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[30px] flex flex-wrap justify-left gap-[20px] md:gap-[40px] lg:gap-[20px] xl:gap-[50px]">
              {tournament_data.map((t_details, index) => (
                <div
                  key={index}
                  className="w-full md:w-[300px] h-[280px]   bg-[#000000] rounded-[20px] overflow-hidden hover:scale-105  shadow-[#ffffff] duration-200"
                >
                  <Link href={t_details.t_link}>
                    <div className="w-full h-[180px]">
                      <Image
                        src={t_details.t_img}
                        alt="bgmi1"
                        className="w-full h-full object-cover rounded-t-[20px]  -z-10"
                      />
                    </div>
                    <div className="w-full h-[100px] rounded-b-[20px] bg-[#ffd036]  text-center flex justify-center items-center ">
                      <div>
                        <div>
                          <span className="text-[#000000] text-[20px] uppercase font-bold">
                            {t_details.t_name}
                          </span>
                        </div>
                        <div>
                          <span>COMING SOON</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BGMI;
