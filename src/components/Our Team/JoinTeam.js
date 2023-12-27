"use client";
import React, { useState } from "react";

const JoinTeam = () => {
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
    <div>
      <div className="bg-[#F5F5F5] w-full  md:bg-[url('../assets/TeamMap.svg')] bg-no-repeat bg-left bg-[length:55%_100%] mb-[168px]">
        <div className="container-custom ">
          <div className="container-custom py-[24px]">
            <div className="sm:grid flex flex-col grid-cols-12 gap-12 lg:gap-0">
              <div className="lg:col-span-7 md:col-span-6 col-span-12 ">
                <div className="bg-[url('../assets/TeamMap.svg')] bg-no-repeat bg-center bg-contain min-h-[300px] md:hidden"></div>
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
  );
};

export default JoinTeam;
