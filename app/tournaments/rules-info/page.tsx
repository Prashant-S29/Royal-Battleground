"use client";

import React from "react";
import Image from "next/image";

import { Erangle } from "@/tournament-constants";

import infobackdrop from "../../../assets/backdrop/info-backdrop.png"

const RULESINFO = () => {
  return (
    <>
      <div className="w-full min-h-screen py-[40px]">
        {/* <div className="fixed w-full min-h-screen object-cover object-center -z-50 opacity-5 " >
          <Image src={infobackdrop} alt="infobackdrop" className="w-full "/>
        </div> */}
        <div className="text-center">
          <div className="leading-none">
            <span
              className="uppercase leading-none battelground-gradient max-[425px]:text-[32px] text-[48px] md:text-[68px] 
               drop-shadow-xl"
              style={{ fontFamily: "Black Ops One, sans-serif" }}
            >
              Royal Battleground
            </span>
          </div>
          <div>
            <span className=" uppercase font-extrabold text-[20px]">
              Rules & Information Brochure
            </span>
          </div>
        </div>
        {Erangle.map((details, index) => (
          <div
            id={details.t_id}
            key={index}
            className="mt-[20px] mx-[20px] md:mx-[40px] px-[20px] py-[20px] rounded-[20px] text-[14px] md:text-[16px] bg-gradient-to-br from-indigo-300  to-indigo-400 shadow-xl 
            "
          >
            <div>
              <span className="text-[#ff3636] font-extrabold text-[24px] uppercase ">
                {details.t_name}
              </span>
            </div>
            <div className="">
              <div className="mt-[5px]">
                <span>
                  <b>Date: </b>
                  {details.t_date}
                </span>
              </div>
              <div className="mt-[5px]">
                <span>
                  <b>Time: </b>
                  {details.t_time}
                </span>
              </div>
              <div className="mt-[5px]">
                <span>
                  <b>Fee: </b>
                  <span className="font-semibold" >{details.t_fee}</span> per {details.t_category}
                </span>
              </div>
              <div className="mt-[5px]">
                <div>
                  <span>
                    <b>Rules:</b>
                  </span>
                </div>
                <div>
                  <ul>
                    {details.t_rule.map((rule, index) => (
                      <li key={index}>
                        <div className="flex gap-1">
                          <div className="w-[15px]">
                            <span>
                              {index + 1}
                              {". "}
                            </span>
                          </div>
                          <div>
                            <span>{rule}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-[10px]">
                <button
                  className="bg-[#ffd036] text-[#000000] px-[10px] py-[6px] text-[16px] 
                          font-bold rounded-[5px]"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RULESINFO;
