"use client";
import { useState } from "react";

import { useTranslations } from "next-intl";
import HeroSection from "../component/banner";
import BenefitsSection from "../component/BenefitsSection";
import CommonLastBanner from "../component/LastBanner";
import MainFooter from "../../components/MainFooter";
import SliderModal from "../component/SliderModal";
import Meta from "@/app/components/common/MetaData";

const TradeGoldPage = () => {
    const t = useTranslations("investing");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title={t("meta.title")} description={t("meta.description")} />
            <HeroSection setIsOpen={setIsOpen} />
            <BenefitsSection />
            <CommonLastBanner setIsOpen={setIsOpen} />
            <MainFooter />
            <SliderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default TradeGoldPage