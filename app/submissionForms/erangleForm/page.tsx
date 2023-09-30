import React from "react";

import formBackdrop from "../../../assets/backdrop/formBackdrop.png";
import mainlogo from "../../../assets/mainlogo.png";
import Image from "next/image";

const ERANGLEFORM = () => {
  return (
    <>
      <div className="w-full min-h-screen -z-50 fixed top-0">
        <Image
          src={formBackdrop}
          alt="formBackdrop"
          className="w-full min-h-screen object-cover object-center -z-50 object-fixed top-0 fixed"
        />
      </div>

      <div className="w-full min-h-screen flex justify-center items-center bg-[#ffffff00] ">
        <div className="w-fit h-fit bg-[#ffffff64] backdrop-blur-[5px] p-[0px] md:p-[20px] rounded-[20px]" >
          <div className="block md:flex gap-[50px]  items-center mx-[20px]">
            <div>
              <div className="">
                <Image src={mainlogo} alt="mainlogo" className="w-[400px]" />
              </div>
              <div className="text-center">
                <span className="uppercase font-black text-[20px] text-[#ffd036]">
                  Erangle - Classic
                </span>
              </div>
              <div className="text-center">
                <span>To be filled by team leader only</span>
              </div>
            </div>
            <div>
              <div className="mt-[20px]">
                <div>
                  <span  className="font-bold">Team Leader Details</span>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Name"
                    id="leader_name"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Ingame Name"
                    id="leader_ingameName"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Mail"
                    id="leader_mail"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    id="leader_phone"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
              </div>
              <div className="mt-[20px]">
                <div>
                  <span className="font-bold" >Member 2nd Details</span>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Ingame Name"
                    id="member2_ingamename"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
              </div>
              <div className="mt-[20px]">
                <div>
                  <span  className="font-bold">Member 3rd Details</span>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Ingame Name"
                    id="member3_ingamename"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
              </div>
              <div className="mt-[20px]">
                <div>
                  <span  className="font-bold">Member 4th Details</span>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    placeholder="Ingame Name"
                    id="member3_ingamename"
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
              </div>
              <div className="my-[20px]">
                <button
                  className=" w-full md:w-[350px] text-center bg-[#ffd036] font-bold text-[16px] py-[8px] rounded-[10px]
              uppercase "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ERANGLEFORM;
