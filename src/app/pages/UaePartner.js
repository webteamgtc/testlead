"use client";
import { useState } from "react";
import HeroSection from '../uae/partners/components/banner'
import IBTestimonials from '../uae/partners/components/IBTraders'
import Paymore from '../uae/partners/components/PayMore'
import SliderModal from '../uae/partners/components/SliderModal'
import ComparisonTable from "../uae/partners/components/table";
import Broker from '../uae/partners/components/broker'
import GrowIBSection from '../uae/partners/components/growIBsection'
import Header from '../uae/partners/components/header'
import Footer from "../components/Footer";

const UaePartnerPage = () => {
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
            <Footer />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
    </>
  )
}

export default UaePartnerPage