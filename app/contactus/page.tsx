"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import discord from "../../assets/socials/discord.png";
import instagram from "../../assets/socials/instagram.png";
import whatsapp from "../../assets/socials/whatsapp.png";
import helpicon from "../../assets/socials/help_icon.png";

const CONTACTUS = () => {
  const [sectionOneOpen, setSectionOneOpen] = useState(true);
  const [rotateButtonOne, setRotateButtonOne] = useState(true);

  const [sectionTwoOpen, setSectionTwoOpen] = useState(false);
  const [rotateButtonTwo, setRotateButtonTwo] = useState(false);

  const [sectionThreeOpen, setSectionThreeOpen] = useState(false);
  const [rotateButtonThree, setRotateButtonThree] = useState(false);

  const handleSectionOne = () => {
    setSectionOneOpen(!sectionOneOpen);
    setSectionTwoOpen(false);
    setSectionThreeOpen(false);

    setRotateButtonOne(!rotateButtonOne);
    setRotateButtonTwo(false);
    setRotateButtonThree(false);
  };
  const handleSectionTwo = () => {
    setSectionTwoOpen(!sectionTwoOpen);
    setSectionOneOpen(false);
    setSectionThreeOpen(false);

    setRotateButtonTwo(!rotateButtonTwo);
    setRotateButtonOne(false);
    setRotateButtonThree(false);
  };
  const handleSectionThree = () => {
    setSectionThreeOpen(!sectionThreeOpen);
    setSectionOneOpen(false);
    setSectionTwoOpen(false);

    setRotateButtonThree(!rotateButtonThree);
    setRotateButtonOne(false);
    setRotateButtonTwo(false);
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center px-[20px] mb-[20px]">
        <div>
          <div>
            <div className="text-center">
              <span className="text-[32px] md:text-[48px] lg:text-[68px] font-black leading-none md:leading-normal">
                Contact Us<span className="text-[#ffd036]">.</span>
              </span>
            </div>
            <div className="mt-[10px] md:mt-0 text-center">
              <span className="font-extrabold text-[18px] md:text-[22px] lg:text-[28px]">
                Connect with us and solve all your quries
              </span>
            </div>
            <div className="mt-[20px]">
              <ul className="flex flex-wrap gap-3 md:gap-5 justify-center">
                <li className="flex">
                  <Link
                    target="blank"
                    href="https://www.instagram.com/royal_battleground_esport/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  >
                    <div className="flex  justify-center gap-4 items-center max-[320px]:w-[280px]   w-[320px] md:w-[400px] p-[20px] border rounded-[20px]">
                      <div>
                        <Image
                          src={instagram}
                          alt="instagram"
                          className="w-[26px] md:w-[30px] hover:scale-110 duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="font-bold hover:underline">
                          Royal Battleground Instagram
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="flex">
                  <Link target="blank" href="https://discord.gg/4AJw9eJC">
                    <div className="flex justify-center gap-3 items-center max-[320px]:w-[280px]   w-[320px] md:w-[400px] p-[20px] border rounded-[20px] ">
                      <div>
                        <Image
                          src={discord}
                          alt="discord"
                          className="w-[26px] md:w-[34px] hover:scale-110 duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="font-bold hover:underline">
                          Royal Battleground Discord
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    target="blank"
                    href="https://chat.whatsapp.com/DMTeZz8Hq0i0Q4CVJvRh8B"
                  >
                    <div
                      className="flex justify-center gap-4 items-center max-[320px]:w-[280px] w-[320px] md:w-[400px] 
                    px-[20px] py-[17px] border rounded-[20px] "
                    >
                      <div>
                        <Image
                          src={whatsapp}
                          alt="whatsapp"
                          className="w-[26px] md:w-[34px] hover:scale-110 duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="font-bold hover:underline">
                          Royal Battleground Whatsapp
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li className="flex justify-center">
                  <div className="flex justify-center text-center p-[20px] border rounded-[20px] max-[320px]:w-[280px]   w-[320px] md:w-[400px]">
                    <div>
                      <div>
                        <span className="font-bold">
                          Media and Promotion Head
                        </span>
                      </div>
                      <div>
                        <span>Sahiba Taneja - 7726851733</span>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex justify-center">
                  <div className="flex justify-center text-center p-[20px] border rounded-[20px] max-[320px]:w-[280px]   w-[320px] md:w-[400px]">
                    <div>
                      <div>
                        <span className="font-bold">Tournament Manager</span>
                      </div>
                      <div>
                        <span>Parth Sharma - 7849896708</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex justify-center">
                  <div className="flex justify-center text-center p-[20px] border rounded-[20px] max-[320px]:w-[280px]   w-[320px] md:w-[400px]">
                    <div>
                      <div>
                        <span className="font-bold">
                          Technical Head and Web Manager
                        </span>
                      </div>
                      <div>
                        <span>Prashant Singh - 9079215052</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-[20px]">
            <div className="text-center">
              <span className="text-[32px] md:text-[48px] lg:text-[68px] font-black leading-none md:leading-normal">
                FAQs<span className="text-[#ffd036]">.</span>
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-[10px] px-[0px] md:px-[40px] lg:px-[80px]">
            <div className="w-full ">
              <div
                className={`w-full border border-black p-[20px] rounded-[20px] overflow-hidden mt-[20px]
               `}
              >
                <div className="flex items-center justify-between text-[14px] md:text-[16px] ">
                  <div>
                    <span className="font-medium">
                      Will I get my money back if I want to withdraw my team name
                      from the tournament after I have made the payment?
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={handleSectionOne}
                      className={`ml-[10px] text-[20px] font-bold duration-200 ${
                        rotateButtonOne ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className={`mt-[10px] ${
                    sectionOneOpen ? "section-open" : "section-close"
                  } duration-300 `}
                >
                  <span>
                    Yes, contact our tournament manager and describe your
                    issues. Your money will be refunded within 1 - 2 business
                    days.
                  </span>
                </div>
              </div>

              <div
                className={`w-full border border-black p-[20px] rounded-[20px] overflow-hidden mt-[20px]
               `}
              >
                <div className="flex items-center justify-between text-[14px] md:text-[16px] ">
                  <div>
                    <span className="font-medium">
                      Is it compulsory to participate in a team of 4 for any
                      team tournament ?
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={handleSectionTwo}
                      className={`ml-[10px] text-[20px] font-bold duration-200 ${
                        rotateButtonTwo ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className={`mt-[10px] ${
                    sectionTwoOpen ? "section-open" : "section-close"
                  } duration-300 `}
                >
                  <span>
                    No, as such there is no rule like this. You can participate
                    as Duo, Trio or as a whole Squad.
                  </span>
                </div>
              </div>

              <div
                className={`w-full border border-black p-[20px] rounded-[20px] overflow-hidden mt-[20px]
               `}
              >
                <div className="flex items-center justify-between text-[14px] md:text-[16px] ">
                  <div>
                    <span className="font-medium">
                      Can I participate in multiple tournaments with the same
                      team ?
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={handleSectionThree}
                      className={`ml-[10px] text-[20px] font-bold duration-200 ${
                        rotateButtonThree ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className={`mt-[10px] ${
                    sectionThreeOpen ? "section-open" : "section-close"
                  } duration-300 `}
                >
                  <span>
                    Definitely yes! You can participate in any number of
                    tournament as you wish. But make sure that their timing
                    should not clash with one another.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CONTACTUS;
