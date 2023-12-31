"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { mainlogo, payment_qr, upiid_eg, help_button } from "../assets/index";

const ERANGLE_FORM = () => {
  const [checked, setChecked] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [checkActive, setCheckActive] = useState(false);
  const [tournamentPayment, setTournamentPayment] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderInGameID, setLeaderInGameID] = useState("");
  const [leaderMail, setLeaderMail] = useState("");
  const [leaderPhone, setLeaderPhone] = useState("");
  const [memberTwoInGameID, setMemberTwoInGameID] = useState("");
  const [memberThreeInGameID, setMemberThreeInGameID] = useState("");
  const [memberFourInGameID, setMemberFourInGameID] = useState("");

  const toogleCheckBox = (e: any) => {
    setCheckActive(!checkActive);
  };
  const handlePaymentValue = (e: any) => {
    setTournamentPayment(e.target.value);
  };
  const handleLeaderNameValue = (e: any) => {
    setLeaderName(e.target.value);
  };
  const handleLeaderInGameIDValue = (e: any) => {
    setLeaderInGameID(e.target.value);
  };
  const handleLeaderMailValue = (e: any) => {
    setLeaderMail(e.target.value);
  };
  const handleLeaderPhoneValue = (e: any) => {
    setLeaderPhone(e.target.value);
  };
  const handleMemberTwoInGameIDValue = (e: any) => {
    setMemberTwoInGameID(e.target.value);
  };
  const handleMemberThreeInGameIDValue = (e: any) => {
    setMemberThreeInGameID(e.target.value);
  };
  const handleMemberFourInGameIDValue = (e: any) => {
    setMemberFourInGameID(e.target.value);
  };

  const toogleChecked = () => {
    setChecked(!checked);
  };
  const handleImageDisplay = (e: any) => {
    setShowImage(!showImage);
  };

  // const onSubmitHandler = (e: any) => {
  //   setTimeout(() => {
  //     window.location.href = "/successPage";
  //   }, 2000);
  // };
  return (
    <>
      <div>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdjqD-acEhmPB2uAse97ikBOv24MJpKeglERCbEU2_lEzFy_A/formResponse"
          method="post"
          // onSubmit={onSubmitHandler}
        >
          <div className="block md:flex gap-[50px]   mx-[20px]">
            <div>
              <div className="flex justify-center">
                <Image src={mainlogo} alt="mainlogo" className="w-[250px]" />
              </div>
              <div className="text-center -mt-[10px]">
                <span className="uppercase font-black text-[20px]">
                  Erangle 2.0
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
                        className="w-[120px]"
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
                    <span className="font-semibold ">
                      prashant9079@paytm, 9079215052
                    </span>
                  </div>
                  <div className="flex justify-center mt-[20px]">
                    <div>
                      <div className="flex items-center gap-1">
                        <div>
                          <span className="font-bold ">
                            Proof of Payment
                            <span className="text-[#ff3535]">*</span>
                          </span>
                        </div>
                        <div className={`flex justify-center rounded-full`}>
                          <button type="button" onClick={handleImageDisplay}>
                            <Image
                              src={help_button}
                              alt="help_button"
                              className="w-[15px]"
                            />
                          </button>
                        </div>
                        {showImage == true ? (
                          <div className="bg-[#ffffff] p-[8px] shadow-2xl  rounded-[10px] absolute w-[180px] -mt-[350px] left-[50px]">
                            <Image
                              src={upiid_eg}
                              alt="upiid_eg"
                              className="rounded-[5px]"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mt-[5px]">
                        <input
                          name="entry.1540408079"
                          required
                          type="text"
                          placeholder="UPI Ref Number / UTR"
                          value={tournamentPayment}
                          onChange={(e) => handlePaymentValue(e)}
                          className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full  placeholder:text-[14px]"
                        ></input>
                      </div>
                      <div className="mt-[5px]">
                        <span className="text-[14px]">
                          12 Digit Payment ID. We need it in order to verify
                          your payment.
                        </span>
                      </div>
                    </div>
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
                    name="entry.1619844329"
                    required
                    type="text"
                    placeholder="Name"
                    value={leaderName}
                    onChange={(e) => handleLeaderNameValue(e)}
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
                <div className="mt-[10px]">
                  <input
                    name="entry.903605110"
                    required
                    type="text"
                    placeholder="Ingame Name / ID"
                    value={leaderInGameID}
                    onChange={(e) => handleLeaderInGameIDValue(e)}
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
                <div className="mt-[10px]">
                  <input
                    name="entry.1465030373"
                    required
                    type="email"
                    placeholder="Mail"
                    value={leaderMail}
                    onChange={(e) => handleLeaderMailValue(e)}
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
                <div className="mt-[10px]">
                  <input
                    name="entry.598059156"
                    required
                    type="text"
                    placeholder="Phone Number"
                    value={leaderPhone}
                    onChange={(e) => handleLeaderPhoneValue(e)}
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
                    name="entry.946862313"
                    required
                    type="text"
                    placeholder="Ingame Name / ID"
                    value={memberTwoInGameID}
                    onChange={(e) => handleMemberTwoInGameIDValue(e)}
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
                    name="entry.1954128300"
                    type="text"
                    placeholder="Ingame Name / ID"
                    value={memberThreeInGameID}
                    onChange={(e) => handleMemberThreeInGameIDValue(e)}
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
                    name="entry.1222072544"
                    type="text"
                    placeholder="Ingame Name / ID"
                    value={memberFourInGameID}
                    onChange={(e) => handleMemberFourInGameIDValue(e)}
                    className="border rounded-[10px] px-[10px] py-[8px] outline-none bg-transparent placeholder:text-[#000000] border-black w-full md:w-[350px] placeholder:text-[14px]"
                  ></input>
                </div>
              </div>
              <div className="mt-[10px]">
                <input
                  type="checkbox"
                  onClick={toogleChecked}
                  checked={checkActive}
                  onChange={toogleCheckBox}
                  className="w-[15px] aspect-square cursor-pointer mt-[5px]"
                />
                <span className="ml-[10px] text-[14px] -mt-[5px]">
                  I have read and agree with{" "}
                  <Link href="/privacy-policy">
                    <span className="underline">Privacy Policy</span>
                  </Link>{" "}
                  <br className="hidden lg:block" />
                  and{" "}
                  <Link href="/refund-policy">
                    <span className="underline">Refund Policy</span>
                  </Link>
                  .
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
                    type="button"
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
    </>
  );
};

export default ERANGLE_FORM;
