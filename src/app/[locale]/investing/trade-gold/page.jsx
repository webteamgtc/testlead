"use client";
import { useState } from "react";

import { useTranslations } from "next-intl";
import HeroSection from "../component/banner";
import BenefitsSection from "../component/BenefitsSection";

const TradeGoldPage = () => {
    const t = useTranslations("tradeGold");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <HeroSection />
            <BenefitsSection />
        </>
    )
}

export default TradeGoldPage