"use client";
import { useState } from "react";
import HeroSection from './components/banner'
import SliderModal from './components/SliderModal'
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import PayCommission from "./components/payCommison";
import IBTestimonials from "./components/testmonial";
import TradeSwitchSection from "./components/CtaSection";
import Meta from "@/app/components/common/MetaData";
import { useTranslations } from "next-intl";

const SwapFreePage = () => {
    const t = useTranslations("swapFreePage");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MainHeader />
            <Meta title={t("meta.title")} description={t("meta.description")} />
            <div className="bg-[#000032]">
                <HeroSection setIsOpen={setIsOpen} />
                <PayCommission
                    topTitle="A Forex Partnership Programme That"
                    bottomText="From real trader bonuses to marketing support and instant payouts, this is the FX Partner programme serious partners are switching to."
                    buttonText="Partner with GTC"
                    setIsOpen={setIsOpen}
                />
            </div>
            <IBTestimonials  setIsOpen={setIsOpen} />
            <TradeSwitchSection  setIsOpen={setIsOpen} />
            <MainFooter />
            <SliderModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/uh462x6/"
                successPath="/swap-free/success"
            />
        </> 
    )
}
 
export default SwapFreePage