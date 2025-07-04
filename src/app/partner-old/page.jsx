'use client'
import React, {useState} from 'react'
import Header from '../ib/components/header';
import Image from 'next/image';
import CustomButton from '../components/common/CustomButton';
import ComparisonTable from '../ib/components/table';
import Paymore from '../ib/components/payMore';
import Broker from '../ib/components/broker';
import IBTestimonials from '../ib/components/IBTraders';
import GrowIBSection from '../ib/components/growIBsection';
import Footer from '../components/Footer';
import Banner from './Component/Banner';


const page = () => {
       const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Header />
    <Banner setIsOpen={setIsOpen} />
    <ComparisonTable setIsOpen={setIsOpen} />
    <Paymore />
    <Broker />
    <IBTestimonials />
    <GrowIBSection />
    <Footer />
    
    </>
  )
}

export default page