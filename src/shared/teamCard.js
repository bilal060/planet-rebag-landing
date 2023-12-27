import Image from "next/image";
import React from "react";

const TeamCard = (props) => {
  const { image, name, designation, style } = props;
  return (
    <>
      <Image src={image} alt="image" className="w-full" />
      <div
        className={`flex items-center text-center justify-center flex-col gap-[8px] content ${style}`}
      >
        <h4 className="text-[18px] text-white leading-[20px] font-bold truncate w-full">
          {name}
        </h4>
        <p className="text-[16px] text-[#DBD9D9] leading-[20px] font-normal truncate w-full">
          {designation}
        </p>
      </div>
    </>
  );
};

export default TeamCard;
