"use client";
import Image from "next/image";
import React, { useState } from "react";
import footerMail from "../../assets/footerMail.svg";
import Phone from "../../assets/Phone.svg";

const FormSection = () => {
  const [formDetails, setformDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setformDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-center py-[88px] px-5">
          <h1 className="text-[#000] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
            Contact our <span className="text-[#79AA00]"> Support</span>
          </h1>
          <p className="text-[#747474] text-[18px] font-[500] leading-[100%] max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Sodales ornare duis nunc est
            feugiat erat venenatis urna ac
          </p>
        </div>
        <div className="bg-[#F5F5F5] w-full bg-[url('../assets/ContactMap.svg')] bg-no-repeat bg-left ">
          <div className="container-custom ">
            <div className="container-custom py-[24px]">
              <div className="sm:grid flex flex-col grid-cols-12 gap-12 lg:gap-0">
                <div className="lg:col-span-7 md:col-span-6 col-span-12 flex md:flex-col sm:flex-row flex-col items-start justify-center gap-[28px]">
                  <div className=" md:h-auto h-full justify-center md:justify-start lg:max-w-[431px] w-full flex mmd:flex-row flex-col items-center rounded-[24px] gap-[20px] bg-white px-[29px] py-[45px] shadow-cart-detail shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]">
                    <div className="bg-[#29542A] px-[23px] pt-[21px] pb-[9px] rounded-[16px] h-[74px] w-[74px]">
                      <Image src={Phone} alt="Phone" className="w-full " />
                    </div>
                    <div className="mmd:text-left text-center">
                      <h1 className="text-[#171D25] text-[30px] leading-[100%] font-[700] mb-[11px]">
                        Let’s Talk
                      </h1>
                      <a
                        href="tel:123-456-7890"
                        className=" text-[#171D25] text-[18px] font-[400] leading-[100%]"
                      >
                        +1 012 345 6789
                      </a>
                    </div>
                  </div>
                  <div className="md:h-auto h-full justify-center md:justify-start lg:max-w-[431px] w-full flex mmd:flex-row flex-col items-center rounded-[24px] gap-[20px] bg-white px-[29px] py-[45px] shadow-cart-detail shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]">
                    <div className="bg-[#29542A] px-[23px] pt-[21px] pb-[9px] rounded-[16px] h-[74px] w-[74px]">
                      <Image
                        src={footerMail}
                        alt="footerMail"
                        className="w-full "
                      />
                    </div>
                    <div className="mmd:text-left text-center">
                      <h1 className="text-[#171D25] text-[30px] leading-[100%] font-[700] mb-[11px]">
                        Contact Support
                      </h1>
                      <a
                        href="tel:123-456-7890"
                        className=" text-[#171D25] text-[18px] font-[400] leading-[100%]"
                      >
                        +1 012 345 6789
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 md:col-span-6 col-span-12">
                  <div className="rounded-[16px] bg-[#305543] p-[32px]">
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="flex flex-col gap-[16px]">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-white text-[16px] font-[700]"
                          >
                            Full Name
                          </label>
                          <input
                            onChange={(e) => formHandler(e)}
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            className="w-full h-[56px] bg-[#F8F8F8] rounded-[12px] px-[16px] py-[20px] border-none outline-none mt-[8px] text-[#A3A3A3] text-[16px] font-[400]"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-white text-[16px] font-[700]"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            required
                            type="text"
                            name="email"
                            onChange={(e) => formHandler(e)}
                            placeholder="Enter your email"
                            className="w-full h-[56px] bg-[#F8F8F8] rounded-[12px] px-[16px] py-[20px] border-none outline-none mt-[8px] text-[#A3A3A3] text-[16px] font-[400]"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="name"
                            className="text-white text-[16px] font-[700]"
                          >
                            Your Message
                          </label>
                          <textarea
                            name="message"
                            onChange={(e) => formHandler(e)}
                            placeholder="Enter your message..."
                            className="w-full bg-[#F8F8F8] rounded-[12px] px-[16px] py-[20px] border-none outline-none mt-[8px] text-[#A3A3A3] text-[16px] font-[400] resize-none"
                            rows={4}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="mt-[40px] w-full h-[56px] bg-[#79AA00] text-white text-[18px] font-bold rounded-[12px]"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
