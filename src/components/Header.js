"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/Hamburger.svg";

import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const pathname = usePathname();

  return (
    <header
      className={`${
        isOpen ? "h-[385px]" : "h-[102px]"
      }  bg-white sticky top-0 z-10`}
    >
      <div
        className={`container-custom  flex items-center justify-between lg:py-0 py-[29px] ${
          isOpen ? "" : "h-[102px]"
        }`}
      >
        <div className="flex items-center gap-[102px]">
          <Image src={Logo} alt="logo" />
          <ul className="lg:flex hidden items-center gap-[34px] ">
            {routes.map((route, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`${route.href}`}
                    className={` text-[18px] leading-[100%] ${
                      pathname === route.href
                        ? "text-[#79AA00] font-[700]"
                        : "text-[#000] font-[400]"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:flex hidden items-center gap-[32px]">
          <Link
            href={"/login"}
            className="text-[#79AA00] text-[18px] font-[700] leading-normal"
          >
            Login
          </Link>
          <button className="text-white text-[18px] font-[700] leading-normal bg-[#29542A] rounded-[12px] px-[35px] py-[17px]">
            Download App
          </button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <Image src={Hamburger} alt="Hamburger" />
        </button>
      </div>

      {isOpen && (
        <div
          className={`container-custom py-[20px] border-t border-[#DBD9D9] transition-all delay-0 duration-0 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-[20px]">
            <ul className="flex flex-col items-center gap-[20px]">
              {routes.map((route, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={`${route.href}`}
                      className={` text-[18px] leading-[100%] ${
                        pathname === route.href
                          ? "text-[#79AA00] font-[700]"
                          : "text-[#000] font-[400]"
                      }`}
                    >
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col items-center gap-[20px]">
              <Link
                href={"/login"}
                className="text-[#79AA00] text-[18px] font-[700] leading-normal"
              >
                Login
              </Link>
              <button className="text-white text-[18px] font-[700] leading-normal bg-[#29542A] rounded-[12px] px-[35px] py-[17px]">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
