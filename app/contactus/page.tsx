import React from "react";
import Image from "next/image";
import Link from "next/link";

import discord from "../../assets/socials/discord.png";
import instagram from "../../assets/socials/instagram.png";
import whatsapp from "../../assets/socials/whatsapp.png";
import helpicon from "../../assets/socials/help_icon.png";

const CONTACTUS = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center px-[20px]">
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
          <div className="flex justify-center">
            <ul>
              <li className="mt-[20px] flex">
                <Link
                  target="blank"
                  href="https://www.instagram.com/royal_battleground_esport/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                >
                  <div className="flex  justify-center gap-4 items-center w-full md:w-[400px] p-[20px] border rounded-[20px]">
                    <div>
                      <Image
                        src={instagram}
                        alt="instagram"
                        className="min-w-[24px] md:w-[30px] hover:scale-110 duration-150 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span className="font-bold hover:underline">
                        Royal Battleground Esports
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="mt-[20px] flex">
                <Link target="blank" href="https://discord.gg/4AJw9eJC">
                  <div className="flex justify-center gap-3 items-center w-full md:w-[400px] p-[20px] border rounded-[20px] ">
                    <div>
                      <Image
                        src={discord}
                        alt="discord"
                        className="min-w-[28px] md:w-[34px] hover:scale-110 duration-150 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span className="font-bold hover:underline">
                        Royal Battleground Esports
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="mt-[20px] flex">
                <Link
                  target="blank"
                  href="https://chat.whatsapp.com/DMTeZz8Hq0i0Q4CVJvRh8B"
                >
                  <div className="flex justify-center gap-4 items-center w-full md:w-[400px] p-[20px] border rounded-[20px] ">
                    <div>
                      <Image
                        src={whatsapp}
                        alt="whatsapp"
                        className="min-w-[24px] md:w-[30px] hover:scale-110 duration-150 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span className="font-bold hover:underline">
                        Royal Battleground Esports
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="mt-[20px] flex">
                <div className="flex gap-4 items-center text-center justify-center  w-full md:w-[400px] p-[20px] border rounded-[20px] ">
                  <div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Media and Promotion Head
                        </span>
                      </div>
                      <div>
                        <span className="">Sahiba Taneja - 7726851733</span>
                      </div>
                    </div>
                    <div className="mt-[10px]">
                      <div>
                        <span className="font-bold">Tournament Manager</span>
                      </div>
                      <div>
                        <span className="">Parth Sharma - 7849896708</span>
                      </div>
                    </div>
                    <div className="mt-[10px]">
                      <div>
                        <span className="font-bold">
                          Technical Head and Web Manager
                        </span>
                      </div>
                      <div>
                        <span className="">Prashant Singh - 9079215052</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CONTACTUS;
