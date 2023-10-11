"use client";

import React, { useState } from "react";
import Link from "next/link";

const REFUNDPOLICY = () => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div
        className="py-[20px] w-full min-h-screen"
        style={
          theme === true
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "#d5d5d5" }
        }
      >
        <div className="text-center">
          <span className="text-[32px] md:text-[48px] lg:text-[68px] font-black leading-none md:leading-normal">
            Refund Policy<span className="text-[#ffd036]">.</span>
          </span>
        </div>
        <div className="px-[20px]  md:px-[40px] lg:px-[80px] text-[16px] lg:text-[18px] mt-[20px]">
          <div className="w-full flex items-center gap-1 text-[14px] md:text-[16px] ">
            <div>
              <input type="checkbox" onClick={handleTheme} />
            </div>
            <div>
              <span>Enable Dark Mode</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <span>
              Last Updated - <span className="font-bold">October 09, 2023</span>
            </span>
          </div>
          <div className="mt-[20px]">
            <span>
              Thanks for participating in Royal Battleground Tournaments. We
              hope you are happy with your services. However, if you are not
              completely satisfied with our services for any reason, you may
              apply for Refund. Please see below for more information on our
              return policy.
            </span>
          </div>

          <div className="mt-[20px]">
            <div>
              <span className="font-bold">Refund Eligibility</span>
            </div>
            <div className="pl-[20px] md:pl-[40px] mt-[10px]">
              <ul className="list-disc">
                <li className="mt-[10px]">
                  <div>
                    <div>
                      <span>
                        Refunds may be considered in the following circumstances
                      </span>
                    </div>
                    <div className="pl-[20px] md:pl-[40px] mt-[10px]">
                      <ul className="list-decimal   ">
                        <li>
                          <div>
                            <span>
                              <b>Tournament Cancellation</b>: In the event that
                              a tournament is canceled by Royal Battleground,
                              you will be eligible for a full refund of the
                              entry fee.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span>
                              <b>Technical Issues</b>: If you experience
                              technical issues on our platform that prevent you
                              from participating in a tournament, and these
                              issues are verified to be on our end, you may be
                              eligible for a refund. Technical issues dose not
                              includes any connectivity issues on participants
                              end.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mt-[10px]">
                  <div>
                    <div>
                      <span>
                        Refunds will not be provided for the following:
                      </span>
                    </div>
                    <div className="pl-[20px] md:pl-[40px] mt-[10px]">
                      <ul className="list-decimal   ">
                        <li className="mt-[10px]">
                          <div>
                            <span>
                              <b>Participant Withdrawal</b>: If you voluntarily
                              withdraw from a tournament, you will not be
                              eligible for a refund.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span>
                              <b>Disqualification</b>: If you are disqualified
                              from a tournament due to a violation of our rules
                              or code of conduct, you will not be eligible for a
                              refund.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-[20px]">
              <span className="font-bold">Requesting a Refund</span>
            </div>
            <div className="mt-[20px]">
              <ul className="pl-[20px] md:pl-[40px] list-disc">
                <li>
                  <div>
                    <span>
                      To request a refund, please contact our tournament manager{" "}
                      <b>Parth Sharma - 7849896708</b> within 2 business days
                      after the event.
                    </span>
                  </div>
                </li>
                <li className="mt-[10px]">
                  <div>
                    <div>
                      <span>
                        When requesting a refund, you will be required to
                        provide the following information
                      </span>
                    </div>
                    <div className="mt-[10px]">
                      <ul className="pl-[20px] md:pl-[40px] list-decimal">
                        <li>
                          <div>
                            <span>Your full name and contact details.</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span>
                              Details of the tournament for which you are
                              requesting a refund, including the tournament name
                              and date.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span>
                              A clear explanation of the reason for your refund
                              request.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span>
                              Refund requests will be processed within 2-3
                              business days of receiving all necessary
                              information.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-[20px]">
              <span className="font-bold">Refund Method</span>
            </div>
            <div>
              <span>
                Refunds, if approved, will be issued through the same payment
                method used for the original transaction.
              </span>
            </div>
          </div>
          <div className="mt-[20px]">
            <span className="font-bold">Contact Us</span>
          </div>
          <div>
            <span>
              If you have any questions or concerns regarding our Refund Policy,
              please contact us at{" "}
              <Link
                href="https://royal-battleground.vercel.app/contactus"
                target="blank"
                className="underline text-blue-500 "
              >
                https://royal-battleground.vercel.app/contactus
              </Link>
              . We are here to assist you and ensure that your experience with
              our platform is a positive one. By using our services and
              participating in our tournaments, you agree to abide by this
              Refund Policy. Please review this policy regularly for updates or
              changes.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default REFUNDPOLICY;
