"use client";
import HeroSection from "../components/Home/HeroSection";
import About from "../components/Home/About";
import DownloadApp from "../components/Home/DownloadApp";
import Count from "../components/Home/Count";
import Steps from "../components/Home/Steps";
import Refundable from "../components/Home/Refundable";
import Reviews from "../components/Home/Reviews";

import Image from "next/image";
import MailIcon from "../assets/Mail.svg";
import { useState } from "react";


export default function Home() {
  const [email, setEmail] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <HeroSection image="bg-home-hero-pattern">
        <div className="xl:max-w-[631px] max-w-[431px]">
          <h1 className="text-[#FFF] xl:text-[55px] xl:leading-[56px] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
            Scan Your <span className="text-[#79AA00]">Refundable Items</span>{" "}
            And Earn Money
          </h1>
          <p className="text-[#DBD9D9] lg:text-[24px] md:text-[20px] text-[18px] font-[400] leading-[100%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="lg:h-[68px] h-[48px] flex items-center rounded-[39px] overflow-hidden mt-[63px]">
            <div className="flex items-center gap-[14px] h-full bg-white lg:px-[27px] px-[12px]">
              <Image src={MailIcon} alt="MailIcon" />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="text-[#747474] text-[14px] font-[400] leading-[100%] border-none outline-none w-full"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="text-white text-[16px] font-[700] leading-[100%] bg-[#29542A] lg:px-[76px] px-[36px] h-full"
            >
              Send
            </button>
          </div>
        </form>
      </HeroSection>
      <Refundable />
      <About />
      <Steps />
      <Reviews />
      <DownloadApp />
      <Count />
    </div>
  );
}
