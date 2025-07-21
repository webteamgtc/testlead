"use client";
import { useState } from "react";
import HeroSection from "../lebanon/ibs/components/banner";
import IBTestimonials from '../lebanon/ibs/components/IBTraders'
import SliderModal from '../lebanon/ibs/components/SliderModal'
import ComparisonTable from "../lebanon/ibs/components/table";
import Broker from '../lebanon/ibs/components/broker'
import GrowIBSection from '../lebanon/ibs/components/growIBsection'
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import IbProgrammeSection from "../lebanon/ibs/components/payMore";

const LebanonIbPage = () => {
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

export default LebanonIbPage