"use client";
import { useState } from "react";
import HeroSection from './components/banner'
import SliderModal from './components/SliderModal'
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import PayCommission from "./components/payCommison";
import IBTestimonials from "./components/testmonial";
import TradeSwitchSection from "./components/CtaSection";


const SwapFreePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MainHeader />
            <div className="bg-[#000427]">
                <HeroSection setIsOpen={setIsOpen} />
                <PayCommission
                    topTitle="A Forex Partnership Programme That"
                    bottomText="From real trader bonuses to marketing support and instant payouts, this is the FX Partner programme serious partners are switching to."
                    buttonText="Partner with GTC"
                    setIsOpen={setIsOpen}
                />
            </div>
            <IBTestimonials />
            <TradeSwitchSection />
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

export default SwapFreePage