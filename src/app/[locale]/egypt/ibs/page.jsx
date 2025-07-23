'use client'
import { useState } from "react";

import BannerMain from "./components/banner";
import Broker from "./components/broker";
import GrowIBSection from "./components/growIBsection";
import MainHeader from "../../components/MainHeader";
import IBTestimonials from "./components/IBTraders";
import Paymore from "./components/payMore";
import SliderModal from "./components/SliderModal";
import ComparisonTable from "./components/table";
import { useTranslations } from "next-intl";
import Meta from "@/app/components/common/MetaData";
import MainFooter from "../../components/MainFooter";
import NewHeader from "../../components/NewHeader";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations()

    return (
        <>
            <Meta title={t('egypt.meta.title')} description={t('egypt.meta.description')}/>
            <section className="">
                <NewHeader />
                <BannerMain setIsOpen={setIsOpen} />
                <ComparisonTable setIsOpen={setIsOpen} />
                <Paymore setIsOpen={setIsOpen} />
                <Broker setIsOpen={setIsOpen} />
                <IBTestimonials setIsOpen={setIsOpen} />
                <GrowIBSection setIsOpen={setIsOpen} />
                <MainFooter />
                <SliderModal isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </section>
        </>
    );
}
