"use client";

import React, { useEffect, useState } from "react";

import formBackdrop from "../../../assets/backdrop/formBackdrop.png";
import mainlogo from "../../../assets/mainlogo.png";
import Image from "next/image";

import payment_qr from "../../../assets/payment_qr.png";

const ERANGLEFORM = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = "/";
  };

  const [checked, setChecked] = useState(false);
  const toogleChecked = () => {
    setChecked(!checked);
  };

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
        <div className="w-fit h-fit bg-[#ffffff64] backdrop-blur-[5px] p-[0px] md:p-[20px] rounded-[20px]">
          <form
            action={process.env.ERANGLE_FORM}
            method="post"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="block md:flex gap-[50px]  items-center mx-[20px]">
              <div>
                <div className="flex justify-center">
                  <Image src={mainlogo} alt="mainlogo" className="w-[250px]" />
                </div>
                <div className="text-center -mt-[10px]">
                  <span className="uppercase font-black text-[20px]">
                    Erangle - Classic
                  </span>
                </div>
                <div className="text-center mt-[10px]">
                  <span className="font-bold">Payable amount - ₹120/-</span>
                </div>
                <div className="flex justify-center mt-[10px]">
                  <div>
                    <div className="w-full flex justify-center">
                      <div className="w-fit bg-white p-[15px]  rounded-[15px]">
                        <Image
                          src={payment_qr}
                          alt="payment_qr"
                          className="w-[150px]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-[10px]">
                      <div className="w-[80px] h-[1px] rounded-full bg-[#000000]" />
                      <div>
                        <span>OR</span>
                      </div>
                      <div className="w-[80px] h-[1px] rounded-full bg-[#000000]" />
                    </div>
                    <div className="text-center">
                      <span className="font-semibold">prashant9079@paytm, 9079215052</span>
                    </div>
                    

                    <div className="text-center text-[14px] mt-[10px]">
                      <span className="font-semibold">
                        NOTE - Make Payment only with the same number as{" "}
                        <br className="hidden lg:block" />
                        provided in Team Leader Deatils Section. If not, your{" "}
                        <br className="hidden lg:block" />
                        team will be disqualified from the tournament.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] md:mt-0">
                <div>
                  <div>
                    <span className="font-bold ">
                      Team Leader Details
                      <span className="text-[#ff3535]">*</span>
                    </span>
                  </div>
                  <div className="mt-[10px]">
                    <input
                      required
                      type="text"
                      placeholder="Name"
                      name="entry.1876691649"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                  <div className="mt-[10px]">
                    <input
                      required
                      type="text"
                      placeholder="Ingame Name"
                      name="entry.809121408"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                  <div className="mt-[10px]">
                    <input
                      required
                      type="email"
                      placeholder="Mail"
                      name="entry.479459190"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                  <div className="mt-[10px]">
                    <input
                      required
                      type="text"
                      placeholder="Phone Number"
                      name="entry.850900863"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <div>
                    <span className="font-bold">
                      Member 2nd Details
                      <span className="text-[#ff3535]">*</span>
                    </span>
                  </div>
                  <div className="mt-[5px]">
                    <input
                      required
                      type="text"
                      placeholder="Ingame Name"
                      name="entry.1343920267"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <div>
                    <span className="font-bold">Member 3rd Details</span>
                  </div>
                  <div className="mt-[5px]">
                    <input
                      type="text"
                      placeholder="Ingame Name"
                      name="entry.1400344911"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <div>
                    <span className="font-bold">Member 4th Details</span>
                  </div>
                  <div className="mt-[5px]">
                    <input
                      type="text"
                      placeholder="Ingame Name"
                      name="entry.280893631"
                      className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                    ></input>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <input
                    type="checkbox"
                    onClick={toogleChecked}
                    className="w-[15px] aspect-square cursor-pointer mt-[5px]"
                  />
                  <span className="ml-[10px] text-[14px] -mt-[5px]">
                    All details filled here are correct and payment
                    <br className="hidden lg:block" />
                    has been made through team leader number only.
                  </span>
                </div>
                <div className="mt-[10px]">
                  {checked ? (
                    <button
                      type="submit"
                      className="w-full md:w-[350px] text-center bg-[#ffd036] font-bold text-[16px] py-[8px] rounded-[10px] uppercase"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full md:w-[350px] text-center bg-[#a3a3a3] font-bold text-[16px] py-[8px] rounded-[10px] uppercase"
                      disabled
                    >
                      Submit
                    </button>
                  )}
                </div>
                <div className="text-center mt-[10px] font-semibold mb-[20px] md:mb-0">
                  <span>
                    Fields marked with <span className="text-[#ff3535]">*</span>{" "}
                    are required.
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ERANGLEFORM;
