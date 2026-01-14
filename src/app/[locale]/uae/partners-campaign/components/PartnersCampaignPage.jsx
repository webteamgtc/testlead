"use client";
import HeroSection from "./HeroSection";
import PartnerSliderSection from "./PartnerSliderSection";
import HowToEarnSection from "./HowToEarnSection";
import WhyChooseSection from "./WhyChooseSection";
import ProgramIncludesSection from "./ProgramIncludesSection";
import PartnerPortalSection from "./PartnerPortalSection";
import PartnerBadgeSection from "./PartnerBadgeSection";
import WhyTradeSection from "./WhyTradeSection";
import BecomeIBFormSection from "./BecomeIBFormSection";
import CompanyProfileSection from "./CompanyProfileSection";
import MainFooter from "@/app/[locale]/components/MainFooter";

export default function PartnersCampaignPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <div
        className="bg-white pt-8"
        style={{ boxShadow: "-6px -39px 50px 0px #0000001A" }}
      >
        {/* <PartnerSliderSection /> */}
        <WhyChooseSection />
        
        <HowToEarnSection />
              <WhyTradeSection />
        <PartnerBadgeSection />

        {/* <ProgramIncludesSection /> */}
        {/* <PartnerPortalSection /> */}
  
        <BecomeIBFormSection />
        {/* <CompanyProfileSection /> */}
        <MainFooter/>
      </div>
    </div>
  );
}
