'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import BannerMain from "./components/banner";
import Broker from "./components/broker";
import GrowIBSection from "./components/growIBsection";
import Header from "./components/header";
import IBTestimonials from "./components/IBTraders";
import Paymore from "./components/payMore";
import SliderModal from "../partner/Component/SliderModal";
import ComparisonTable from "./components/table";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="">
            <Header />
            <BannerMain setIsOpen={setIsOpen} />
            <ComparisonTable setIsOpen={setIsOpen} />
            <Paymore />
            <Broker />
            <IBTestimonials />
            <GrowIBSection />
            <Footer />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </section>
    );
}
