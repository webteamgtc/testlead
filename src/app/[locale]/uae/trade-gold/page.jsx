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
import { useTranslations } from "next-intl";

const TradeGoldPage = () => {
        const t = useTranslations("tradeGold");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
             <Meta title={t("meta.title")} description={t("meta.description")} />
            <div className="bg-[#fff]">
                <HeroSection setIsOpen={setIsOpen} />
                <PayCommission
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
                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/udnd7lu/"
                successPath="/uae/trade-gold/success"
            />
        </>
    )
}

export default TradeGoldPage