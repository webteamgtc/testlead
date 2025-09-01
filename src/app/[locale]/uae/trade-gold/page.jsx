"use client";
import { useState } from "react";
import HeroSection from './components/banner'
import SliderModal from './components/SliderModal'
import MainFooter from "../../components/MainFooter";
import PayCommission from "./components/payCommison";
import Meta from "@/app/components/common/MetaData";
import GoldBonus from "./components/goldBonus";
import HeroTrust from "./components/TrustSection";
import ArabicTestimonials from "./components/newTestomonial";
import HeroBetterWay from "./components/lastSection";

const TradeGoldPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title='Open a GTC Swap Free Account and earn more.' description='Open a GTC account today and enjoy lifetime Swap Free trading. No overnight fees, no surprises, just pure trading freedom, always.' />
            <div className="bg-[#fff]">
                <HeroSection setIsOpen={setIsOpen} />
                <PayCommission
                    topTitle="A Forex Partnership Programme That"
                    bottomText="From real trader bonuses to marketing support and instant payouts, this is the FX Partner programme serious partners are switching to."
                    buttonText="Partner with GTC"
                    setIsOpen={setIsOpen}
                />
                <GoldBonus setIsOpen={setIsOpen} />
                <HeroTrust setIsOpen={setIsOpen} />
                <ArabicTestimonials setIsOpen={setIsOpen} />
                <HeroBetterWay setIsOpen={setIsOpen} />
                <MainFooter />
            </div>
            <SliderModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/uh462x6/"
                successPath="/uae/swap-free/success"
            />
        </>
    )
}

export default TradeGoldPage