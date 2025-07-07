'use client'
import { useState } from "react";
import Footer from "../../components/Footer";
import BannerMain from "./components/banner";
import Broker from "./components/broker";
import GrowIBSection from "./components/growIBsection";
import Header from "./components/header";
import IBTestimonials from "./components/IBTraders";
import Paymore from "./components/payMore";
import SliderModal from "./components/SliderModal";
import ComparisonTable from "./components/table";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="">
            <Header />
            <BannerMain setIsOpen={setIsOpen} />
            <ComparisonTable setIsOpen={setIsOpen} />
            <Paymore setIsOpen={setIsOpen}/>
            <Broker  setIsOpen={setIsOpen}/>
            <IBTestimonials setIsOpen={setIsOpen} />
            <GrowIBSection setIsOpen={setIsOpen}/>
            <Footer />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </section>
    );
}
