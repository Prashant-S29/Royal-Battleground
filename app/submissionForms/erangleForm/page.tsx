import React from "react";

import { formbackdrop } from "@/assets";
import Image from "next/image";

import ERANGLE_FORM from "@/clientComponents/erangleform";

const ERANGLEFORM = () => {
  

  return (
    <>
      <div className="w-full min-h-screen -z-50 fixed top-0">
        <Image
          src={formbackdrop}
          alt="formbackdrop"
          className="w-full min-h-screen object-cover object-center -z-50 object-fixed top-0 fixed"
        />
      </div>

      <div className="w-full min-h-screen flex justify-center items-center bg-[#ffffff00]">
        <div className="w-fit h-fit bg-[#ffffff64] backdrop-blur-[5px] p-[0px] md:p-[20px] rounded-[20px]">
          <ERANGLE_FORM/>
          
        </div>
      </div>
    </>
  );
};

export default ERANGLEFORM;
