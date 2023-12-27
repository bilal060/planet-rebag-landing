import React from "react";
import Link from "next/link";
import Logo from "../assets/footerLogo.svg";
import AppleIcon from "../assets/Apple.svg";
import PlayStore from "../assets/PlayStore.svg";
import Facebook from "../assets/Facebook.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import footerMail from "../assets/footerMail.svg";
import Phone from "../assets/Phone.svg";

import Image from "next/image";

const Footer = () => {
  const routes = [
    {
      id: "1",
      name: "Home",
      href: "/",
    },
    {
      id: "2",
      name: "Our Team",
      href: "/teams",
    },
    {
      id: "3",
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <div className="bg-[#033630]">
      <div className="border-[#dbd9d933] border-b">
        <div className="container-custom ">
          <div className="grid grid-cols-12 py-[38px] md-gap-0 gap-6">
            <div className="md:col-span-6 col-span-12 flex flex-col gap-[26px] items-center xxs:items-start">
              <Image src={Logo} alt="Logo" />
              <p className="text-[#dbd9d9ed] 16px font-[400] leading-[24px] mt-[16px] max-w-[80%] xxs:text-start text-center">
                Lorem ipsum dolor sit amet consectetur. Ut malesuada nibh vitae
                malesuada arcu viverra tristique eget pharetra.
              </p>
              <div className="flex xxs:flex-row flex-col items-center lg:gap-[24px] md:gap-[14px] gap-[24px]">
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
            <div className="md:col-span-2 xxs:col-span-4 col-span-12 flex flex-col gap-[26px] items-center xxs:items-start">
              <p className="mb-[6px] text-[18px] leading-full font-[700] text-white">
                Quick Links
              </p>
              {routes.map((route, index) => {
                return (
                  <Link
                    key={index}
                    href={`${route.href}`}
                    className={` text-[16px] leading-full font-[400] text-[#dbd9d9ed]`}
                  >
                    {route.name}
                  </Link>
                );
              })}
            </div>
            <div className="md:col-span-4 xxs:col-span-6 col-span-12 flex flex-col gap-[26px] items-center xxs:items-start">
              <p className="mb-[6px] text-[18px] leading-full font-[700] text-white">
                Contact Us
              </p>
              <a
                href="mailto:abc@gmail.com"
                className="flex items-center gap-[18px] text-[#DBD9D9]"
              >
                <Image src={footerMail} alt="footerMail" />
                Info@planetrebag.com
              </a>
              <a
                href="tel:123-456-7890"
                className="flex items-center gap-[18px] text-[#DBD9D9]"
              >
                <Image src={Phone} alt="Phone" />
                +1 012 345 6789
              </a>
              <div className="flex items-center gap-[18px]">
                <Image src={Facebook} alt="Facebook" />
                <Image src={LinkedIn} alt="LinkedIn" />
                <Image src={Instagram} alt="Instagram" />
                <Image src={Twitter} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom">
        <div className="py-[19px] flex items-center justify-center">
          <p className="text-[#DBD9D9] text-[16px] font-[400] leading-[20px] text-center">
            All Rights Reserved. Copyright © 2023 Planet Re-Bag
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
