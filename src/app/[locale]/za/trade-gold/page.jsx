"use client";
import { useState } from "react";
import SliderModal from '../../uae/trade-gold/components/SliderModal'
 import PayCommission from "../../uae/trade-gold/components/payCommison";
import Meta from "@/app/components/common/MetaData";
import GoldBonus from "../../uae/trade-gold/components/goldBonus";
import HeroTrust from "../../uae/trade-gold/components/TrustSection";
import ArabicTestimonials from "../../za/switch-to-gtc/components/testomonialSection";
import HeroBetterWay from "../../uae/trade-gold/components/lastSection";
import { useTranslations } from "next-intl";
import HeroSection from "../../uae/trade-gold/components/banner";
import MainFooter from "../../components/MainFooter";

const TradeGoldPage = () => {
    const t = useTranslations("tradeGold");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title={t("meta.title")} description={t("meta.description")} />
            <div className="bg-[#fff]">
                <HeroSection setIsOpen={setIsOpen} page="South Africa" />
                <PayCommission
                    setIsOpen={setIsOpen}
                    page="South Africa"
                />
                <GoldBonus setIsOpen={setIsOpen} />
                <HeroTrust setIsOpen={setIsOpen} page="South Africa"/>
                <ArabicTestimonials setIsOpen={setIsOpen} />
                <HeroBetterWay setIsOpen={setIsOpen} page="South Africa"/>
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