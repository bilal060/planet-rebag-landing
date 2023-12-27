import React from "react";

const Refundable = () => {
  return (
    <>
      <div className="container-custom py-[88px]">
        <div className="flex flex-col gap-[89px] items-center">
          <div className="text-center px-5">
            <h1 className="text-[#000] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
              Refundable <span className="text-[#79AA00]"> Category</span>
            </h1>
            <p className="text-[#747474] text-[18px] font-[500] leading-[100%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center md:gap-[72px] gap-[35px] justify-center w-full">
            <div className="bg-[url('../assets/Grocery.svg')] bg-no-repeat bg-cover desktop:bg-full bg-right sm:h-[370px] h-[270px] transition-all rounded-[24px] px-[34px] w-full">
              <div className="flex flex-col justify-center items-start gap-[29px] h-full">
                <h2 className="text-[30px] text-white font-[700]">Grocery</h2>
                <p className="text-[14px] text-[#DBD9D9] font-[500] leading-[100%] md:w-[160px] w-[200px]">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button className="text-[#29542A] text-[12px] font-[700] leading-normal bg-white rounded-[10px] px-[34px] py-[9px] mt-[41px]">
                  Learn more
                </button>
              </div>
            </div>
            <div className="bg-[url('../assets/Retail.svg')] bg-no-repeat bg-cover desktop:bg-full bg-right sm:h-[370px] h-[270px] transition-all rounded-[24px] px-[34px] w-full">
              <div className="flex flex-col justify-center items-start gap-[29px] h-full">
                <h2 className="text-[30px] text-white font-[700]">Grocery</h2>
                <p className="text-[14px] text-[#DBD9D9] font-[500] leading-[100%] md:w-[160px] w-[200px]">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <button className="text-[#29542A] text-[12px] font-[700] leading-normal bg-white rounded-[10px] px-[34px] py-[9px] mt-[41px]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refundable;
