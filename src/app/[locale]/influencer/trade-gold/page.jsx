"use client";
import { useState } from "react";
import SliderModal from './components/SliderModal'
import MainFooter from "../../components/MainFooter";
import PayCommission from "./components/payCommison";
import Meta from "@/app/components/common/MetaData";
import GoldBonus from "./components/goldBonus";
import HeroTrust from "./components/TrustSection";

import { useTranslations } from "next-intl";
import HeroSectionNew from "./components/bannerNew";

const TradeGoldPage = () => {
        const t = useTranslations("tradeGold");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
             <Meta title={t("meta.title")} description={t("meta.description")} />
            <div className="bg-[#fff]">
                <HeroSectionNew />
           
                <GoldBonus/>
                <HeroTrust />
                <MainFooter />
            </div>
            <SliderModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/udnd7lu/"
                successPath="/influencer/trade-gold/success"
            />
        </>
    )
}

export default TradeGoldPage