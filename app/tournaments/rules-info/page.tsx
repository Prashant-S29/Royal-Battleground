import React from "react";
import Image from "next/image";

import erangleBackdrop from "../../../assets/backdrop/erangleBackdop.png";

import { Erangle } from "@/tournament-constants";
import Link from "next/link";

const ERANGLE = () => {
  return (
    <>
      <div className="fixed w-full min-h-screen object-cover object-center object-fixed -z-50">
        <Image
          src={erangleBackdrop}
          alt="tdm"
          className="w-full min-h-screen object-cover object-fixed object-center"
        />
      </div>
      <div className=" fixed bg-[#00000081] w-full min-h-screen -z-50 " />
      <div className=" w-full min-h-screen py-[20px] md:py-[40px]">
        <div className="text-center">
          <span
            className="uppercase   leading-none battelground-gradient max-[425px]:text-[36px] text-[38px] md:text-[72px]"
            style={{ fontFamily: "Black Ops One, sans-serif" }}
          >
            Royal Battleground
          </span>
        </div>
        <div className="text-center">
          <span className="text-white font-extrabold md:font-black text-[18px] md:text-[28px] uppercase">
            Rules and Infomation Brochure{" "}
          </span>
        </div>
        {Erangle.map((t_details, index) => (
          <div
            key={index}
            id={t_details.t_id}
            className="my-[20px] p-[20px] mx-[20px] md:mx-[40px] bg-[#0000007f] border border-gray-600 text-white rounded-[20px] backdrop-blur-[5px]"
          >
            <div className="mt-[3px]">
              <span className="text-[#ffd036] text-[20px] md:text-[28px] font-extrabold uppercase">
                {t_details.t_name}
              </span>
            </div>
            <div className="mt-[5px] text-[14px] md:text-[16px]">
              <span className="font-semibold">Fee: </span>
              <span className="font-bold text-[#ffd036] ">
                {t_details.t_fee}{" "}
              </span>
              <span>per {t_details.t_category}</span>
            </div>
            <div className="mt-[3px] text-[14px] md:text-[16px]">
              <span className="">Date: </span>
              <span className="text-[#ffd036] font-bold">
                {t_details.t_date}
              </span>
            </div>
            <div className="mt-[3px] text-[14px] md:text-[16px]">
              <span>Time: </span>
              <span className="text-[#ffd036] font-bold">
                {t_details.t_time}
                {" (IST)"}
              </span>
            </div>
            <div className="mt-[3px] text-[14px] md:text-[16px]">
              <div>
                <span>Rules:</span>
              </div>
              <div>
                <ul>
                  {t_details.t_rule.map((rule, index) => (
                    <li key={index}>
                      <div className="flex mt-[3px]">
                        <div className="min-w-[25px]">
                          <span>
                            {index + 1}
                            {"."}
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
            {t_details.status == "live" ? (
              <div className="mt-[20px]">
                <Link href="../submissionForms/erangleForm">
                  <button
                    className="px-[8px] md:px-[10px] py-[6px] md:py-[8px] bg-[#ffd036] rounded-[8px] uppercase text-black font-bold text-[12px] md:text-[14px]
               w-full md:w-fit"
                  >
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ERANGLE;
