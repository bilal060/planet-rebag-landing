import React from "react";
import TeamCard from "../../shared/teamCard";
import TeamMember1 from "../../assets/team-member-1.svg";
import TeamMember2 from "../../assets/team-member-2.svg";
import TeamMember3 from "../../assets/team-member-3.svg";
import TeamMember4 from "../../assets/team-member-4.svg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: TeamMember1,
      name: "Alfredo Gouse",
      designation: "Software Engineer ",
    },
    {
      id: 2,
      image: TeamMember2,
      name: "Alfredo Gouse",
      designation: "Software Engineer ",
    },
    {
      id: 3,
      image: TeamMember3,
      name: "Alfredo Gouse",
      designation: "Software Engineer ",
    },
    {
      id: 4,
      image: TeamMember4,
      name: "Alfredo Gouse",
      designation: "Software Engineer ",
    },
  ];
  return (
    <div>
      <div className="container-custom py-[88px]">
        <div className="flex flex-col gap-[89px] items-center">
          <div className="text-center px-5">
            <h1 className="text-[#000] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
              Meet our <span className="text-[#79AA00]"> Team</span>
            </h1>
            <p className="text-[#747474] text-[18px] font-[500] leading-[100%] max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur. Sodales ornare duis nunc
              est feugiat erat venenatis urna ac
            </p>
          </div>
          <div className="grid grid-cols-12 w-full gap-[23px]">
            {teamMembers.map((data, index) => {
              return (
                <div
                  key={index}
                  className="lg:col-span-3 xxs:col-span-6 col-span-12 team-card rounded-[16px] overflow-hidden"
                >
                  <TeamCard
                    style="py-[37px]"
                    image={data.image}
                    name={data.name}
                    designation={data.designation}
                  />
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <h1 className="text-[#000] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[22px] transition-all">
              Join our <span className="text-[#79AA00]"> Team</span>
            </h1>
            <p className="text-[#747474] text-[18px] font-[500] leading-[100%] max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur. Sodales ornare duis nunc
              est feugiat erat venenatis urna ac
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
