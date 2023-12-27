import Image from "next/image";
import React from "react";
import LockIcon from "../../assets/Lock.svg";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#112710] to-[#29542A] py-[62px]">
        <div className="w-[80%] flex sm:flex-row flex-col lg:items-start sm:items-center items-start justify-between mx-auto xl:gap-[180px] lg:gap-[140px] md:gap-[100px] sm:gap-[60px] gap-[30px]">
          <Image
            src={LockIcon}
            alt="LockIcon"
            className="lg:w-auto mdss:w-[50%] sm:w-[25%] w-[40%]"
          />
          <div className="lg:mt-[60px]">
            <h1 className="text-[#fff] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] leading-[100%]  font-[700]  mb-[22px] transition-all">
              About Planet Re-Bag
            </h1>
            <p className="mb-[67px] mt-[20] text-[#fff]">
              Lorem ipsum dolor sit amet consectetur. Sodales ornare duis nunc
              est feugiat erat venenatis urna ac. In pretium pulvinar montes ma
              gna ultrices dolor. Aliquet tempor sagittis eu tristique
            </p>
            <button className="text-white text-[18px] font-[700] leading-normal bg-[#122612] rounded-[12px] px-[40px] py-[19px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
