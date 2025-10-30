"use client";
import { useState } from "react";

import { useTranslations } from "next-intl";
import HeroSection from "../component/banner";
import BenefitsSection from "../component/BenefitsSection";
import CommonLastBanner from "../component/LastBanner";
import MainFooter from "../../components/MainFooter";
import SliderModal from "../component/SliderModal";
import Meta from "@/app/components/common/MetaData";
import HeroSectionTradeMArket from "./components/banner";
import BenefitsSectionTradeMArket from "./components/BenefitSectionTradeMarket";
import InvestingHeader from "../../components/InvestingHeader";

const TradeGoldPage = () => {
    const t = useTranslations("investingMarket");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title={t("meta.title")} description={t("meta.description")} />
            <InvestingHeader />
            <HeroSectionTradeMArket setIsOpen={setIsOpen} />
            <BenefitsSectionTradeMArket />
            <MainFooter />
            <SliderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default TradeGoldPage