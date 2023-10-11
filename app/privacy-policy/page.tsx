"use client";

import React, { useState } from "react";
import Link from "next/link";

const PRIVACYPOLICY = () => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <div
        className="py-[20px]"
        style={
          theme === true
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "#d5d5d5" }
        }
      >
        <div className="text-center">
          <span className="text-[32px] md:text-[48px] lg:text-[68px] font-black leading-none md:leading-normal">
            Privacy Policy<span className="text-[#ffd036]">.</span>
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
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </span>
          </div>
          <div className="mt-[20px]">
            <span>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </span>
          </div>
          <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
            <span>Interpretation and Definitions</span>
          </div>
          <div className="mt-[20px] font-bold">
            <span>Interpretation</span>
          </div>
          <div className="mt-[20px]">
            <span>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </span>
          </div>
          <div className="mt-[20px] font-bold">
            <span>Definitions</span>
          </div>
          <div className="mt-[20px]">
            <div>
              <span>For the purposes of this Privacy Policy:</span>
            </div>
            <div>
              <ul className="list-disc ml-[20px] md:ml-[40px] mt-[10px]">
                <li>
                  <div>
                    <span>
                      <b>Account</b> means a unique account created for You to
                      access our Service or parts of our Service.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Affiliate</b> means an entity that controls, is
                      controlled by or is under common control with a party,
                      where {'"control"'}
                      means ownership of 50% or more of the shares, equity
                      interest or other securities entitled to vote for election
                      of directors or other managing authority.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Company</b> (referred to as either{" "}
                      {'"the Company", "We", "Us" or "Our"'} in this Agreement)
                      refers to Royal Battleground.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Cookies</b> are small files that are placed on Your
                      computer, mobile device or any other device by a website,
                      containing the details of Your browsing history on that
                      website among its many uses.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Country</b> refers to: Rajasthan, India
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Device</b> means any device that can access the Service
                      such as a computer, a cellphone or a digital tablet.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Personal Data</b> is any information that relates to an
                      identified or identifiable individual.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Service</b> refers to the Website.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Service Provider</b> means any natural or legal person
                      who processes the data on behalf of the Company. It refers
                      to third-party companies or individuals employed by the
                      Company to facilitate the Service, to provide the Service
                      on behalf of the Company, to perform services related to
                      the Service or to assist the Company in analyzing how the
                      Service is used.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Usage Data</b> refers to data collected automatically,
                      either generated by the use of the Service or from the
                      Service infrastructure itself (for example, the duration
                      of a page visit).
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>Website</b> refers to Royal Battleground, accessible
                      from{" "}
                      <Link
                        href="https://royal-battleground.vercel.app/"
                        target="blank"
                        className="underline text-blue-500 "
                      >
                        https://royal-battleground.vercel.app/
                      </Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <b>You</b> means the individual accessing or using the
                      Service, or the company, or other legal entity on behalf
                      of which such individual is accessing or using the
                      Service, as applicable.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Collecting and Using Your Personal Data</span>
            </div>
            <div className="mt-[20px] font-bold">
              <span>Types of Data Collected</span>
            </div>
            <div className="ml-[20px] md:ml-[40px]">
              <div className="mt-[20px]">
                <div className=" font-bold">
                  <span>Personal Data</span>
                </div>
                <div className="mt-[10px]">
                  <span>
                    While using Our Service, We may ask You to provide Us with
                    certain personally identifiable information that can be used
                    to contact or identify You. Personally identifiable
                    information may include, but is not limited to:
                  </span>
                </div>
                <div className="mt-[10px]">
                  <div className="ml-[20px] md:ml-[40px]">
                    <ul className="list-disc">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Usage Data</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <div className=" font-bold">
                    <span>Usage Data</span>
                  </div>
                  <div className="mt-[10px]">
                    <span>
                      Usage Data is collected automatically when using the
                      Service.
                    </span>
                  </div>
                  <div className="mt-[10px]">
                    <span>
                      Usage Data may include information such as Your Device
                      {"'"}s Internet Protocol address (e.g. IP address),
                      browser type, browser version, the pages of our Service
                      that You visit, the time and date of Your visit, the time
                      spent on those pages, unique device identifiers and other
                      diagnostic data.
                    </span>
                  </div>
                  <div className="mt-[10px]">
                    <span>
                      When You access the Service by or through a mobile device,
                      We may collect certain information automatically,
                      including, but not limited to, the type of mobile device
                      You use, Your mobile device unique ID, the IP address of
                      Your mobile device, Your mobile operating system, the type
                      of mobile Internet browser You use, unique device
                      identifiers and other diagnostic data.
                    </span>
                  </div>
                  <div className="mt-[10px]">
                    <span>
                      We may also collect information that Your browser sends
                      whenever You visit our Service or when You access the
                      Service by or through a mobile device.
                    </span>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <div className=" font-bold">
                    <span>Tracking Technologies and Cookies</span>
                  </div>
                  <div className="mt-[10px]">
                    <span>
                      We use Cookies and similar tracking technologies to track
                      the activity on Our Service and store certain information.
                      Tracking technologies used are beacons, tags, and scripts
                      to collect and track information and to improve and
                      analyze Our Service. The technologies We use may include:
                    </span>
                  </div>
                  <div className="mt-[10px] ml-[20px] md:ml-[40px]">
                    <ul className="list-disc">
                      <li>Cookies or Browser Cookies</li>
                      <li>Web Beacons</li>
                      <li>Necessary / Essential Cookies</li>
                      <li>Cookies Policy / Notice Acceptance Cookies</li>
                      <li>Functionality Cookies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px] font-bold">
              <span>Use of Your Personal Data</span>
            </div>
            <div>
              <span>
                The Company may use Personal Data for the following purposes:
              </span>
            </div>
            <div className="ml-[40px]">
              <ul className="list-disc">
                <li>To provide and maintain our Service</li>
                <li>To manage Your Account</li>
                <li>For the performance of a contract</li>
                <li>To contact You</li>
                <li>To provide You Updates</li>
                <li>To manage Your requests</li>
                <li>For business transfers</li>
              </ul>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Retention of Your Personal Data</span>
            </div>
            <div className="mt-[10px]">
              <span>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </span>
            </div>
            <div className="mt-[10px]">
              <span>
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </span>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Transfer of Your Personal Data</span>
            </div>
            <div className="mt-[10px]">
              <span>
                Your information, including Personal Data, is processed at the
                Company{"'"}s operating offices and in any other places where
                the parties involved in the processing are located. It means
                that this information may be transferred to — and maintained on
                — computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction. resolve disputes,
                and enforce our legal agreements and policies.
              </span>
            </div>
            <div className="mt-[10px]">
              <span>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </span>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Delete Your Personal Data</span>
            </div>
            <div className="mt-[10px]">
              <span>
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You. Our
                Service may give You the ability to delete certain information
                about You from within the Service.
              </span>
            </div>
            <div className="mt-[10px]">
              <span>
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us. Please note, however, that We may need to retain
                certain information when we have a legal obligation or lawful
                basis to do so.
              </span>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Children{"'"}s Privacy</span>
            </div>
            <div className="mt-[10px]">
              <span>
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </span>
            </div>
            <div className="mt-[10px]">
              <span>
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent{"'"}s consent before We
                collect and use that information.
              </span>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Links to Other Websites</span>
            </div>
            <div className="mt-[10px]">
              <span>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third part{"'"}s site. We strongly advise You
                to review the Privacy Policy of every site You visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third party sites or
                services.
              </span>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Changes to this Privacy Policy</span>
            </div>
            <div className="mt-[10px]">
              <span>
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page. We will let You know via email and/or a prominent
                notice on Our Service, prior to the change becoming effective
                and update the {'"'}Last updated{'"'} date at the top of this
                Privacy Policy. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </span>
            </div>
            <div className="mt-[20px] text-[22px] lg:text-[30px] font-extrabold">
              <span>Contact Us</span>
            </div>
            <div className="mt-[10px]">
              <span>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </span>
            </div>
            <div className="mt-[10px]">
              <span>
                By visiting this page on our website:{" "}
                <Link
                  href="https://royal-battleground.vercel.app/contactus"
                  target="blank"
                  className="underline text-blue-500 "
                >
                  https://royal-battleground.vercel.app/contactus
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PRIVACYPOLICY;
