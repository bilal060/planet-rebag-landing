import React from "react";
import Image from "next/image";

const HeroSection = (props: any,) => {
  const { image } = props;
  return (
    <>
      <div className={`${image} bg-no-repeat bg-cover desktop:bg-full bg-right xl:h-[580px] lg:h-[480px] h-[380px] transition-all`}>
        <div className="container-custom h-full flex flex-col items-start justify-center backdrop-sepia-0 bg-white/60 md:backdrop-sepia-0 md:bg-transparent md:px-0 px-4">
          {props.children}

        </div>
      </div>
    </>
  );
};

export default HeroSection;
