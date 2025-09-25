'use client';

import React, {useState} from 'react';
import Meta from '@/app/components/common/MetaData';
import Image from 'next/image';
import CustomButton from '@/app/components/common/CustomButton';
import SliderModal from '../uae/partners/components/SliderModal';
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
          <div className="container mx-auto py-3 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4">
            <Image
              src="/khalid/logo-new1.png"
              width={250}
              height={100}
              alt="GTCFX"
              className="lg:w-[250px] lg:h-[100px] md:w-[200px] md:h-[80px] w-[130px] h-[52px] cursor-pointer"
              priority
            />
          </div>

          {/* Main content */}
          <section className="container mx-auto relative flex flex-col items-center justify-center">
            <div className="w-full flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center justify-between">
              {/* LEFT: 30% */}
              <div className="md:w-[45%] w-full text-center ltr:md:text-left rtl:md:text-right px-2 space-y-2 md:space-y-1 text-primary">
                <h5 className="text-xl md:text-2xl xl:text-[24px] font-medium pt-10">
                  Meet the #1 Influencer in UAE
                </h5>

                <h1 className="text-4xl md:text-6xl xl:text-[70px] 2xl:text-[100px] uppercase leading-none font-black bg-gradient-to-b from-[#293794] via-[#000021] from-10% to-[#000021] to-90% inline-block text-transparent bg-clip-text max-w-xs md:max-w-xl mx-auto md:mx-0">
                  KHALID AL&nbsp;AMERI
                </h1>

                <h3 className="text-lg md:text-2xl xl:text-[24px] font-medium max-w-xs md:max-w-3xl mx-auto md:mx-0">
                    At the GTC booth #36 on Monday, 6th October between 2:30 to 3:30 at the Forex Expo Dubai.
                </h3>

             

                <p className="text-lg md:text-base xl:text-[20px] font-semibold mb-2 mt-5 md:mt-10">
                  Hurry! Only 50 Limited Slots!
                </p>

                <p className="font-medium mb-6 text-base max-w-lg mx-auto md:mx-0">
                  Get a chance to be a part of an exclusive experience.
                </p>

                <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                  <CustomButton
                    text="Register Now"
                    bgColor="bg-gradient-to-r from-[#293794] to-[#000021] hover:from-[#000021] hover:to-[#293794]"
                    textColor="text-[#fff]"
                    strokeColor="#fff"
                    onClick={() => setIsOpen?.(true)}
                    // if using local state, replace with: onClick={() => setIsOpen(true)}
                  />
                </div>

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
                <div className="relative w-full h-[850px] mt-0 md:mt-[-100px]">
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
       <SliderModal
           isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/u18brbn/"
            successPath="/khalid/success"
          />
          <Footer /> 
    </>
  );
}
