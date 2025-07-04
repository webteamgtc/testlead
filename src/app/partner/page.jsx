import React from 'react'
import Header from '../ib/components/header';
import Image from 'next/image';
import CustomButton from '../components/common/CustomButton';
import ComparisonTable from '../ib/components/table';
import Paymore from '../ib/components/payMore';
import Broker from '../ib/components/broker';
import IBTestimonials from '../ib/components/IBTraders';
import GrowIBSection from '../ib/components/growIBsection';
import Footer from '../components/Footer';
import CommonMainForm from '../components/MainForm';
import Banner from './Component/Banner';

export const metadata = {
  title: "UAE Top Partner Now Earn Up to 80% RevShare",
  description: "Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.",
};

const page = () => {
      const data = [
    {
      icon: "/icon1.svg",
      title: "Up to 80% RevShare Paid On Demand"
    },
    {
      icon: "/icon2.svg",
      title: "Become a Partner in Just a Few Clicks"
    },
    {
      icon: "/icon3.svg",
      title: "Dynamic Leverage Up to 1:2000"
    },
    {
      icon: "/icon4.svg",
      title: "Your Traders Get a Tradable Bonus"
    },
    {
      icon: "/icon5.svg",
      title: "Full Marketing & Event Support Provided"
    },
    {
      icon: "/icon6.svg",
      title: "Multi-Regulated Brokerage: SCA, FSC"
    }
  ]
  return (
    <>
    <Header />
    <Banner />
    <ComparisonTable />
    <Paymore />
    <Broker />
    <IBTestimonials />
    <GrowIBSection />
    <Footer />
    
    </>
  )
}

export default page