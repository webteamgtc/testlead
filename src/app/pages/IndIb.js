'use client' 
import { useState } from "react";
import Footer from '../components/Footer'
import Broker from "../india/partners/components/broker";
import GrowIBSection from '../india/partners/components/growIBsection'
import Header from '../india/partners/components/header'
import IBTestimonials from '../india/partners/components/IBTraders'
import SliderModal from "../india/ib/components/SliderModal";

import HeroSection from "../india/partners/components/banner";
import ComparisonTable from "../india/partners/components/table";
import PayMoreIb from "../india/ib/components/PayMoreIb";
import IbBanner from "../india/ib/components/IbBanner";
import GrowIb from "../india/ib/components/GrowIb";
import IbTestimonial from "../india/ib/components/IbTestimonial";

const IndIb = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <>
    <Header />
            <IbBanner setIsOpen={setIsOpen} />
           <ComparisonTable setIsOpen={setIsOpen} />
            <PayMoreIb setIsOpen={setIsOpen}/>
            <Broker  setIsOpen={setIsOpen}/>
           
            <IbTestimonial setIsOpen={setIsOpen}/>
            <GrowIb  setIsOpen={setIsOpen} />
            <Footer />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
   </>
  )
}

export default IndIb