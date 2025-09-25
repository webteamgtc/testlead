'use client';

import React, {useState} from 'react';
import Meta from '@/app/components/common/MetaData';
import Image from 'next/image';
import MainHeader from '../../components/MainHeader';

import Footer from '@/app/components/Footer';

export default function Page() {
  // If this page is rendered by the App Router, props don't usually include setIsOpen.
  // If setIsOpen comes from a parent layout, keep as is; otherwise replace with a local state:
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Meta
        title="Meet the #1 Influencer in UAE - Khalid Al Ameri | GTC"
        description="Join us at Forex Expo Dubai and meet Khalid Al Ameri, the #1 influencer in UAE. Limited slots available for an exclusive experience."
      />

      {/* Double-check the image file name below: bg-imag.webp vs bg-image.webp */}
      <section className="relative w-full bg-[url('/khalid/bg-imag.webp')] bg-center bg-no-repeat bg-cover">
       <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('/khalid/overlay.webp')] bg-top bg-repeat bg-cover object-contain opacity-50 z-20"></div>
        <div className="bg-img-banner min-h-scree relative z-40">
          {/* Top bar with logo */}
          <MainHeader />

          {/* Main content */}
          <section className="container mx-auto relative flex flex-col items-center justify-center">
            <div className="w-full flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center justify-between">
              {/* LEFT: 30% */}
              <div className="md:w-[45%] w-full text-center ltr:md:text-left rtl:md:text-right px-2 space-y-2 md:space-y-3 text-primary pt-10">
             

                <h2 className="text-2xl md:text-3xl xl:text-[40px] 2xl:text-[40px] leading-tight font-black bg-gradient-to-b from-[#293794] via-[#000021] from-10% to-[#000021] to-90% inline-block text-transparent bg-clip-text">
                 Thank You for Registering!
                </h2>

                <h3 className="text-base md:text-2xl xl:text-[24px] font-medium max-w-xs md:max-w-3xl mx-auto md:mx-0">
                  You’ll receive a confirmation email once your spot is secured at the GTC Booth #36, Forex Expo Dubai, 6th October 2025.
                </h3>

                {/* Mobile image */}
                <div className="relative block md:hidden w-full h-[500px]">
                  <Image
                    src="/khalid/fullim.webp"
                    alt="Khalid Al Ameri"
                    fill
                    className="object-contain"
                  />
                </div>

              
              
              
              </div>

              {/* RIGHT: 70% */}
              <div className="text-center md:w-[55%] w-full hidden md:block relative">
                <div className="relative w-full h-[850px]">
                  <Image
                    src="/khalid/fullim.webp"
                    alt="Khalid Al Ameri full figure"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
 
          <Footer /> 
    </>
  );
}
