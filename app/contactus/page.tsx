import React from "react";
import Image from "next/image";
import Link from "next/link";

import { discord, instagram, whatsapp } from "@/assets";

import FAQ from "@/clientComponents/faq";

const CONTACTUS = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center px-[20px] mb-[20px]">
        <div>
          <div>
            <div className="text-center mt-[20px]">
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
          <div>
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default CONTACTUS;
