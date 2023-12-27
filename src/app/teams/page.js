import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import TeamSection from "../../components/Our Team/TeamSection";
import JoinTeam from "../../components/Our Team/JoinTeam";

const Team = () => {
  return (
    <div>
      <HeroSection image="bg-team-hero-pattern">
        <div className="max-w-[424px] px-5">
          <h1 className="text-[#FFF] xl:text-[55px] xl:leading-[56px] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[47px] transition-all">
            Meet Our
            <span className="text-[#79AA00]"> Team</span>
          </h1>
          <p className="text-[#DBD9D9] lg:text-[24px] md:text-[20px] text-[18px] font-[400] leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </HeroSection>
      <TeamSection />
      <JoinTeam />
    </div>
  );
};

export default Team;
