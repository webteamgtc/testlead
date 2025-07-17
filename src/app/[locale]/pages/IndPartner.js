'use client' 
import { useState } from "react";
import MainFooter from "../components/MainFooter";
import Broker from "../india/partners/components/broker";
import GrowIBSection from '../india/partners/components/growIBsection'
import Header from '../india/partners/components/header'
import IBTestimonials from '../india/partners/components/IBTraders'
import Paymore from '../india/partners/components/PayMore'
import SliderModal from '../india/partners/components/SliderModal'

import HeroSection from "../india/partners/components/banner";
import ComparisonTable from "../india/partners/components/table";

const IndPartnerPage = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <>
    <Header />
            <HeroSection setIsOpen={setIsOpen} />
   <ComparisonTable setIsOpen={setIsOpen} />
            <Paymore setIsOpen={setIsOpen}/>
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

export default IndPartnerPage