import Image from "next/image";
import React from "react";
import AppleIcon from "../../assets/Apple.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Profile1 from "../../assets/Profile1.svg";
import Profile2 from "../../assets/Profile2.svg";
import Profile3 from "../../assets/Profile3.svg";
import Profile4 from "../../assets/Profile4.svg";
import DownloadApp1 from "../../assets/DownloadApp1.svg";
import DownloadApp2 from "../../assets/DownloadApp2.svg";

const DownloadApp = () => {
  return (
    <>
      <div className="bg-[#033630]">
        <div className="container-custom">
          <div className="md:grid grid-cols-12 flex flex-col-reverse">
            <div className="md:col-span-6 col-span-12 pt-6">
              <div className="flex items-end md:justify-start justify-end w-full bottom-0 relative h-full">
                <Image
                  src={DownloadApp2}
                  alt="DownloadApp2"
                  className="w-[45%] lg:w-auto"
                />
                <Image
                  src={DownloadApp1}
                  alt="DownloadApp1"
                  className="-translate-x-12 w-[50%] lg:w-auto"
                />
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 pt-[64px] md:pb-[64px] pb-6">
              <h2 className="text-[#FFF] xl:text-[45px] leading-[100%] text-[35px] font-[700]  mb-[29px] transition-all">
                Download Mobile <span className="text-[#79AA00]">App</span>
              </h2>
              <p className="text-[#FFF] xl:text-[32px] leading-[100%] lg:text-[28px] text-[24px] font-[700] mb-[19px] ">
                1.3 Millions
              </p>
              <p className="text-[#FFF] leading-[100%] text-[14px] font-[400] mb-[24px]">
                Users returned items and earned money lorem lipaum dolor sit
                amet consectetura Sodale
              </p>
              <div className="flex items-center bg-[#dbd9d933] rounded-[53px] p-[8px] max-w-[212px] mb-[45px]">
                <Image src={Profile1} alt="Profile1" className="" />
                <Image
                  src={Profile2}
                  alt="Profile2"
                  className="-translate-x-2"
                />
                <Image
                  src={Profile3}
                  alt="Profile3"
                  className="-translate-x-4"
                />
                <Image
                  src={Profile4}
                  alt="Profile4"
                  className="-translate-x-6"
                />
              </div>
              <div className="flex flex-wrap items-center lg:gap-[24px] md:gap-[14px] gap-[24px]">
                <button className="bg-white text-black px-[18px] h-[56px] font-[700] text-[18px] leading-full rounded-[8px] flex items-center lg:gap-[16px] gap-[8px]">
                  <Image src={AppleIcon} alt="AppleIcon" />
                  App Store
                </button>
                <button className="bg-white text-black px-[18px] h-[56px] font-[700] text-[18px] leading-full rounded-[8px] flex items-center lg:gap-[16px] gap-[8px]">
                  <Image src={PlayStore} alt="PlayStore" />
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
