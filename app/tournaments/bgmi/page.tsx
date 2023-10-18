import Image from "next/image";
import Link from "next/link";

import { bgmi_bg } from "@/assets";
import { Erangle } from "../../../tournament-constants/index";

const TournamentLabelStatus = ({ condition }: any) => {
  if (condition == "live") {
    return (
      <div className="z-50 absolute">
        <div className="bg-red-500 text-white px-[10px] py-[3px] rounded-full text-[11px] font-bold tracking-wide">
          <span>LIVE</span>
        </div>
      </div>
    );
  } else if (condition == "upcoming") {
    return (
      <div className="z-50 absolute">
        <div className="bg-[#ffffff] px-[10px] py-[3px] rounded-full text-[11px] font-bold tracking-wide">
          <span>UPCOMING</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="z-50 absolute">
        <div className="bg-[#ffffff] px-[10px] py-[3px] rounded-full text-[11px] font-bold tracking-wide">
          <span>EVENT ENDED</span>
        </div>
      </div>
    );
  }
};

const TournamentButtonStatus = ({ condition }: any) => {
  if (condition == "live") {
    return (
      <div>
        <Link href="../submissionForms/erangleForm">
          <button
            className=" bg-[#cda932]    text-[#000000] px-[10px] py-[6px] text-[14px] 
                        font-semibold tracking-wider rounded-[5px]"
          >
            Register
          </button>
        </Link>
      </div>
    );
  } else if (condition == "upcoming") {
    return <div className="z-50 absolute"></div>;
  } else {
    return (
      <div>
        <button
          disabled
          className=" bg-[#cda932]    text-[#000000] px-[10px] py-[6px] text-[14px] 
                      font-semibold tracking-wider rounded-[5px]"
        >
          Registration Closed
        </button>
      </div>
    );
  }
};

const BGMI = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-end">
        <div>
          <Image
            src={bgmi_bg}
            alt="bgmi_bg"
            className="w-full h-screen object-cover fixed top-0 left-0 -z-10 "
          />
        </div>
        <div className="w-full">
          <div className="w-full h-[350px] bottom-0 bg-gradient-to-t from-[#000000] to-[#ffffff00] mt-[100px] backdrop-blur-5 " />
          <div className="w-full h-fit -mt-[10px] bg-[#000000] px-[20px] md:px-[40px] xl:px-[80px] pb-[20px] md:pb-[40px] lg:pb-[80px]">
            <div>
              <span className="font-black text-[#ffd036] text-[32px] md:text-[48px] xl:text-[72px] uppercase">
                Battleground&nbsp; Mobile&nbsp; India
              </span>
            </div>
            <div className="flex items-center text-[12px] md:text-[14px] overflow-x-scroll ">
              <div className="flex items-center gap-1">
                <div>
                  <span className="text-white font-semibold">5</span>
                </div>
                <div>
                  <span className="text-white leading-none">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <div className="h-[30px] min-w-[1px] bg-[#b0b0b0] mx-[10px]" />
              {/* <div className="flex items-center gap-2">
                <div>
                  <div className="w-[10px] aspect-square bg-red-500 rounded-full live-dot-animation " />
                </div>
                <div>
                  <span className="text-white uppercase font-semibold">
                    1&nbsp; Live&nbsp; Tournament
                  </span>
                </div>
              </div> */}
              {/* <div className="h-[30px] min-w-[1px] bg-[#b0b0b0] mx-[10px]" /> */}
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-white uppercase font-semibold">
                    1&nbsp; Past&nbsp; Tournament
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[30px] flex flex-wrap justify-left gap-[20px] md:gap-[30px] lg:gap-[15px] xl:gap-[40px]">
              {Erangle.map((t_details, index) => (
                <div
                  key={index}
                  className="w-full md:w-[300px]   bg-[#000000] rounded-[15px] "
                >
                  <div className="w-full h-[180px] overflow-hidden rounded-t-[15px]">
                    <TournamentLabelStatus condition={t_details.status} />

                    <Image
                      src={t_details.t_img}
                      alt="bgmi1"
                      className="w-full h-full object-cover rounded-t-[15px]  -z-10 hover:scale-150  hover:rotate-12   duration-200"
                    />
                  </div>
                  <div className="w-full h-auto md:h-[225px] rounded-b-[15px] bg-[#ffd036]">
                    <div className="p-[15px]">
                      <div>
                        <span className="text-[#000000] text-[20px] uppercase font-extrabold">
                          {t_details.t_name}
                        </span>
                      </div>
                      <div>
                        <div>
                          <span className="text-[14px]">
                            <span className="font-semibold">Fee</span>:{" "}
                            <b>{t_details.t_fee}</b> per {t_details.t_category}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px]">
                            <span className="font-semibold">Date</span>:{" "}
                            {t_details.t_date}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px]">
                            <span className="font-semibold">Time</span>:{" "}
                            {t_details.t_time} {"(IST)"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px]">
                            <span className="font-semibold">Team Size</span>:{" "}
                            {t_details.t_size}
                          </span>
                        </div>
                        <div>
                          <span className="text-[14px]">
                            <span className="font-semibold">Prize Pool</span>:{" "}
                            <b>{t_details.t_prize}</b>
                          </span>
                        </div>
                      </div>
                      <div className="mt-[10px] flex justify-between items-center flex-wrap gap-2">
                        <TournamentButtonStatus condition={t_details.status} />
                        {/* <div>
                          <Link href={`rules-info/#${t_details.t_id}`}>
                            <span
                              className="underline text-[#000000] text-[12px] 
                          font-medium tracking-wider rounded-[5px]"
                            >
                              Know More
                            </span>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BGMI;
