import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import SupportTeam from "../../components/Contact Us/SupportTeam";
import FormSection from "../../components/Contact Us/FormSection";

const ContactUs = () => {
  return (
    <div>
      <HeroSection image="bg-contact-hero-pattern">
        <div className="max-w-[518px]">
          <h1 className="text-[#FFF] xl:text-[55px] xl:leading-[56px] lg:text-[45px] lg:leading-[46px] text-[35px] leading-[36px]  font-[700]  mb-[47px] transition-all">
            Contact us our Customer
            <span className="text-[#79AA00]"> support</span>
          </h1>
          <p className="text-[#DBD9D9] lg:text-[24px] md:text-[20px] text-[18px] font-[400] leading-[30px] max-w-[424px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </HeroSection>
      <FormSection />
      <SupportTeam />
    </div>
  );
};

export default ContactUs;
