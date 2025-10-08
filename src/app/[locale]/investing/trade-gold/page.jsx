"use client";
import { useState } from "react";

import { useTranslations } from "next-intl";
import HeroSection from "../component/banner";

const TradeGoldPage = () => {
    const t = useTranslations("tradeGold");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <HeroSection />
        </>
    )
}

export default TradeGoldPage