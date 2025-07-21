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

const UaePartnerPage = () => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainHeader />
            <HeroSection setIsOpen={setIsOpen} />
            <ComparisonTable setIsOpen={setIsOpen} />
           <IbProgrammeSection setIsOpen={setIsOpen} />
            <Broker  setIsOpen={setIsOpen}/>
            <IBTestimonials setIsOpen={setIsOpen} />
            <GrowIBSection setIsOpen={setIsOpen}/>
            <MainFooter />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
    </> 
  )
}

export default UaePartnerPage