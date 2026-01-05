"use client";
import { useState } from "react";
import HeroSection from '../uae/partners/components/banner'
import IBTestimonials from '../uae/partners/components/IBTraders'
import SliderModal from '../uae/partners/components/SliderModal'
import ComparisonTable from "../uae/partners/components/table";
import Broker from '../uae/partners/components/broker'
import GrowIBSection from '../uae/partners/components/growIBsection'
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import IbProgrammeSection from "../uae/partners/components/payMore";
import PayCommission from "../components/common/PayCommission";
import TrustBroker from "../components/common/TrustBroker";
import GrowBusiness from "../components/common/GrowBusiness";
import ReferTables from "../components/common/ReferTables";
import FeedBack from "../components/common/FeedBack";
import HowToBecomeIB from "../components/common/HowToBecomeIB";
import LoyaltyVipSection from "../components/common/LoyaltyVipSection";
import SecureClientFundsBar from "../components/SecureClientFundsBar";


const UaePartnerPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const testimonials = [
    {
      text: `“As an FX partner, getting up to 80% in Rebates and paid out instantly was a game changer. I moved my entire client book to GTC where they’re looked after.”`,
      name: 'Judi Izdihar Shamoon, Dubai, UAE',
      stars: 5,
    },
    {
      text: `“I run monthly trading classes in Dubai, UAE. GTC gave me banners, an LP, and real bonuses for my traders. The support is unreal!”`,
      name: 'Suoud Butrus Gaber, UAE',
      stars: 4,
    },
    {
      text: `“My trading educator recommended GTC. I was sceptical at first, but now I see why he recommended them. The spreads, bonus, everything just works really well.”`,
      name: 'Kutaiba Abdul-Matin Awad, UAE',
      stars: 5,
    },
    {
      text: `“GTC doesn’t just talk, they deliver! I get paid on time, every time, and my traders are sticking around longer than ever. They also trade gold and GTC is great with them.”`,
      name: "Yasser Nu'aym Bazzi, UAE",
      stars: 4,
    },
  ];

  return (
    <>
      <MainHeader />
            <HeroSection setIsOpen={setIsOpen} /> 
               <PayCommission 
              topTitle="A Forex Partnership Programme That"
              bottomText="From real trader bonuses to marketing support and instant payouts, this is the FX Partner programme serious partners are switching to."
              buttonText="Partner with GTC"
              setIsOpen={setIsOpen}
              />
              <HowToBecomeIB />
         <LoyaltyVipSection />
         <SecureClientFundsBar />
         
            <MainFooter />
            <SliderModal
           isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/2nppxqi/"
            successPath="/uae/partners/success"
          />
    </> 
  )
}

export default UaePartnerPage