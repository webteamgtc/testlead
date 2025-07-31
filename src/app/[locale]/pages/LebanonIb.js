"use client";
import { useState } from "react";
import HeroSection from "../lebanon/ib/components/banner";
import IBTestimonials from '../lebanon/ib/components/IBTraders'
import SliderModal from '../lebanon/ib/components/SliderModal'
import ComparisonTable from "../lebanon/ib/components/table";
import Broker from '../lebanon/ib/components/broker'
import GrowIBSection from '../lebanon/ib/components/growIBsection'
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import IbProgrammeSection from "../lebanon/ib/components/payMore";

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