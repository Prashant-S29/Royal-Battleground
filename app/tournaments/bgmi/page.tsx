"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import bgmi_bg from "../../../assets/tournament-assets/bgmi-bg.png";

import bgmi1 from "../../../assets/tournament-assets/bgmi1.png";
import bgmi2 from "../../../assets/tournament-assets/bgmi2.png";

import { checkout } from "../../../checkout";

const tournament_data = [
  {
    t_name: "Erangle",
    t_img: bgmi1,
    t_link: "/",
    status: "upcoming",
  },
  // {
  //   t_name: "LIVIK",
  //   t_img: bgmi1,
  //   t_link: "/",
  //   live: false,
  // },
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
            <div className="mt-[30px] flex flex-wrap justify-left gap-[20px] md:gap-[30px] lg:gap-[15px] xl:gap-[40px]">
              {tournament_data.map((t_details, index) => (
                <div
                  key={index}
                  className="w-full md:w-[250px]   bg-[#000000] rounded-[15px] "
                >
                  <div className="w-full h-[180px] overflow-hidden rounded-t-[15px]">
                    {t_details.status == "live" ? (
                      <div className="z-50 absolute mt-[5px] ml-[5px]">
                        <div className="text-red-500 font-bold text-[14px] uppercase tracking-wide">
                          <span>LIVE</span>
                        </div>
                      </div>
                    ) : (
                      <div className="z-50 absolute">
                        <div className="bg-[#ffffff] px-[12px] py-[4px] rounded-full text-[12px] font-bold tracking-wide">
                          <span>UPCOMING</span>
                        </div>
                      </div>
                    )}
                    <Image
                      src={t_details.t_img}
                      alt="bgmi1"
                      className="w-full h-full object-cover rounded-t-[15px]  -z-10 hover:scale-105 duration-200"
                    />
                  </div>
                  <div className="w-full rounded-b-[15px] bg-[#ffd036]">
                    <div className="p-[15px]">
                      <div>
                        <span className="text-[#000000] text-[20px] uppercase font-extrabold">
                          {t_details.t_name}
                        </span>
                      </div>
                      {/* <div>
                        <span className="text-[14px]">
                          <span className="font-semibold">Date</span>:
                        </span>
                      </div>
                      <div>
                        <span className="text-[14px]">
                          <span className="font-semibold">Time</span>:
                        </span>
                      </div>
                      <div>
                        <span className="text-[14px]">
                          <span className="font-semibold">Fee</span>:
                        </span>
                      </div> */}
                      {/* <div className="mt-[10px] flex flex-wrap gap-2">
                        {t_details.status === "upcoming" ? (
                          ""
                        ) : (
                          <div>
                            <button
                              onClick={() => {
                                checkout({
                                  lineItems: [
                                    {
                                      price: "price_1Nts99SExA2opeWLY01ntdsj",
                                      quantity: 1,
                                    },
                                  ],
                                });
                              }}
                              className=" bg-[#cda932]    text-[#000000] px-[10px] py-[6px] text-[14px] 
                        font-semibold tracking-wider rounded-[5px]"
                            >
                              Register
                            </button>
                          </div>
                        )}
                        <div>
                          <button
                            className="bg-[#cda932] text-[#000000] px-[10px] py-[6px] text-[14px] 
                          font-semibold tracking-wider rounded-[5px]"
                          >
                            Know More
                          </button>
                        </div>
                      </div> */}
                    </div>
                  </div>
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
