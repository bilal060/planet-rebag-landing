import Image from "next/image";
import React from "react";
import QrCode from "../../assets/QrCode.svg";
import RedeemCode from "../../assets/RedeemCode.svg";
import Thankyou from "../../assets/Thankyou.svg";

const Steps = () => {
  return (
    <>
      <div className="container-custom py-[88px]">
        <div className="flex flex-col gap-[89px] items-center">
          <div className="text-center px-5">
            <h1 className="text-[#000] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
              Easy Steps To
              <span className="text-[#79AA00]"> Make Money </span>
            </h1>
            <p className="text-[#747474] text-[18px] font-[500] leading-[100%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className="flex flex-col xxs:grid grid-cols-12 md:gap-[43px] gap-[35px] justify-center w-full">
            <div className="md:col-span-4 xxs:col-span-6 col-span-12 flex flex-col gap-[70px] items-center w-full">
              <div className="bg-gradient-to-t to-[#79aa0000] from-[#79aa0033] transition-all rounded-[44px] px-[34px] w-full">
                <div className="flex flex-col justify-center items-center h-full">
                  <h2 className="text-[40px] text-[#29542A] font-[700] opacity-[0.2] text-center">
                    01
                  </h2>
                  <div className="bg-[url('../assets/StepsMask.svg')] bg-no-repeat bg-contain max-w-[250px] w-full bg-center flex items-center justify-center relative -bottom-8">
                    <Image
                      src={QrCode}
                      alt="QrCode"
                      className="w-[80%] lg:w-auto"
                    />
                  </div>
                </div>
              </div>
              <p className="lg:text-[28px] md:text-[24px] text-[20px] font-[400] text-[#000] lg:w-[70%] text-center leading-[100%]">
                Scan an item’s QR code
              </p>
            </div>
            <div className="md:col-span-4 xxs:col-span-6 col-span-12 flex flex-col gap-[70px] items-center w-full">
              <div className="bg-gradient-to-t to-[#79aa0000] from-[#79aa0033] transition-all rounded-[44px] px-[34px] w-full">
                <div className="flex flex-col justify-center items-center h-full">
                  <h2 className="text-[40px] text-[#29542A] font-[700] opacity-[0.2] text-center">
                    02
                  </h2>
                  <div className="bg-[url('../assets/StepsMask.svg')] bg-no-repeat bg-contain max-w-[250px] w-full bg-center flex items-center justify-center relative -bottom-8">
                    <Image
                      src={RedeemCode}
                      alt="RedeemCode"
                      className="w-[80%] lg:w-auto"
                    />
                  </div>
                </div>
              </div>
              <p className="lg:text-[28px] md:text-[24px] text-[20px] font-[400] text-[#000] lg:w-[70%] text-center leading-[100%]">
                Get your redeem code
              </p>
            </div>
            <div className="md:col-span-4 xxs:col-span-6 col-span-12 flex flex-col gap-[70px] items-center w-full">
              <div className="bg-gradient-to-t to-[#79aa0000] from-[#79aa0033] transition-all rounded-[44px] px-[34px] w-full">
                <div className="flex flex-col justify-center items-center h-full">
                  <h2 className="text-[40px] text-[#29542A] font-[700] opacity-[0.2] text-center">
                    03
                  </h2>
                  <div className="bg-[url('../assets/StepsMask.svg')] bg-no-repeat bg-contain max-w-[250px] w-full bg-center flex items-center justify-center relative -bottom-8">
                    <Image
                      src={Thankyou}
                      alt="Thankyou"
                      className="w-[80%] lg:w-auto"
                    />
                  </div>
                </div>
              </div>
              <p className="lg:text-[28px] md:text-[24px] text-[20px] font-[400] text-[#000] lg:w-[70%] text-center leading-[100%]">
                Show QR code and earn money
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
