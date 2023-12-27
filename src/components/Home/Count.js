import Image from "next/image";
import React from "react";
import ReturnedBag from "../../assets/ReturnedBags.svg";
import Bottle from "../../assets/Bottle.svg";
import Dollar from "../../assets/Dollar.svg";

const Count = () => {
  return (
    <>
      <div className="bg-white lg:h-[413px] flex items-center lg:py-0 py-12">
        <div className="w-[90%] mx-auto xxs:grid flex flex-col grid-cols-12 xxl:gap-[76px] xl:gap-[66px] lg:gap-[56px] md:gap-[36px] gap-[26px]">
          <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex mmd:flex-row flex-col items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] relative rounded-[24px] gap-[28px] bg-[#F5F5F5] px-[29px] py-[45px]">
            <Image src={ReturnedBag} alt="ReturnedBag" className="lg:w-auto " />
            <div className="mmd:text-left text-center">
              <h1 className="text-[#171D25] text-[30px] leading-[100%] font-[700] mb-[11px]">
                1736
              </h1>
              <p className=" text-[#171D25] text-[18px] font-[400] leading-[100%]">
                Total Bags Returned
              </p>
            </div>
            <div className="bg-[#29542A] h-[3px] w-[77px] absolute top-[10px] left-0 right-0 m-auto"></div>
          </div>
          <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex mmd:flex-row flex-col items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] relative rounded-[24px] gap-[28px] bg-[#F5F5F5] px-[29px] py-[45px]">
            <div className="bg-[#29542A] px-[23px] pt-[21px] pb-[9px] rounded-[16px] h-[74px] w-[74px]">
              <Image src={Bottle} alt="ReturnedBag" className="lg:w-auto " />
            </div>
            <div className="mmd:text-left text-center">
              <h1 className="text-[#171D25] text-[30px] leading-[100%] font-[700] mb-[11px]">
                1736
              </h1>
              <p className=" text-[#171D25] text-[18px] font-[400] leading-[100%]">
                Total Bottels Returned
              </p>
            </div>
            <div className="bg-[#29542A] h-[3px] w-[77px] absolute bottom-[10px] left-0 right-0 m-auto"></div>
          </div>
          <div className="lg:col-span-4 sm:col-span-6 col-span-12 flex mmd:flex-row flex-col items-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] relative rounded-[24px] gap-[28px] bg-[#F5F5F5] px-[29px] py-[45px]">
            <div className="bg-[#29542A] px-[23px] py-[9px] rounded-[16px] h-[74px] w-[74px] flex items-center">
              <Image src={Dollar} alt="ReturnedBag" className="lg:w-auto " />
            </div>
            <div className="mmd:text-left text-center">
              <h1 className="text-[#171D25] text-[30px] leading-[100%] font-[700] mb-[11px]">
                1736
              </h1>
              <p className=" text-[#171D25] text-[18px] font-[400] leading-[100%]">
                Total Redeem Money
              </p>
            </div>
            <div className="bg-[#29542A] h-[3px] w-[77px] absolute top-[10px] left-0 right-0 m-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
