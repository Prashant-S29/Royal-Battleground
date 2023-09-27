import React from "react";
import Image from "next/image";

import erangleBackdrop from "../../../../assets/backdrop/erangleBackdop.png";

const ERANGLE = () => {
  return (
    <>
      <div className="fixed w-full min-h-screen object-cover object-center -z-50">
        <Image src={erangleBackdrop} alt="tdm" className="w-full" />
      </div>
      <div className=" fixed bg-[#0000006e] w-full min-h-screen -z-50 " />
      <div className=" w-full min-h-screen ">
        <div className="text-center">
          <span className="font-black text-[72px] text-[#ffd036] uppercase">
            Royal Battleground
          </span>
        </div>
      </div>
    </>
  );
};

export default ERANGLE;
