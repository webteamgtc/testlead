"use client";
import { useState } from "react";

import { useTranslations } from "next-intl";
import HeroSection from "../component/banner";
import BenefitsSection from "../component/BenefitsSection";
import CommonLastBanner from "../component/LastBanner";
import MainFooter from "../../components/MainFooter";
import SliderModal from "../component/SliderModal";

const TradeGoldPage = () => {
    const t = useTranslations("tradeGold");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <HeroSection setIsOpen={setIsOpen}/>
            <BenefitsSection />
            <CommonLastBanner setIsOpen={setIsOpen}/>
            <MainFooter />
            <SliderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default TradeGoldPage