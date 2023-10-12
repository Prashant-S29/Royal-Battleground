"use client";

import React, { useState } from "react";

const FAQ = () => {
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
                Yes, contact our tournament manager and describe your issues.
                Your money will be refunded within 1 - 2 business days.
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
                  Is it compulsory to participate in a team of 4 for any team
                  tournament ?
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
                No, as such there is no rule like this. You can participate as
                Duo, Trio or as a whole Squad.
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
                  Can I participate in multiple tournaments with the same team ?
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
                Definitely yes! You can participate in any number of tournament
                as you wish. But make sure that their timing should not clash
                with one another.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
