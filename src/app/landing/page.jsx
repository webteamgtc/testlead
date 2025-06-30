'use client'
import BannerMain from "./components/banner";
import Broker from "./components/broker";
import GrowIBSection from "./components/growIBsection";
import Header from "./components/header";
import IBTestimonials from "./components/IBTraders";
import Paymore from "./components/payMore";
import ComparisonTable from "./components/table";

export default function Home() {
    return (
        <section className="">
            <Header />
            <BannerMain />
            <ComparisonTable />
            <Paymore />
            <Broker />
            <IBTestimonials />
            <GrowIBSection />
        </section>
    );
}
