import React from 'react';
import Image from 'next/image';

const WhyChooseGTC = () => {
    return (
        <section className="bg-[#0b1244] text-white py-6 md:py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-xl md:text-3xl font-medium mb-6">Why Choose GTC?</h3>
                <p className="text text-base max-w-4xl mx-auto mb-12 text-white leading-normal">
                Join a gold trading platform that offers more than just low spreads. At GTC, we combine institutional-grade pricing, pro-level platforms, and lightning-fast execution to give gold traders the edge they need to thrive. Here's why traders trust us:
                </p>
                <div className='relative w-full h-52 md:h-[400px]'>
                    <Image src="/goldlp/banner-2.webp" alt="Trading screen" fill className="object-contain" />
                </div>
               
            </div>
        </section>
    );
};

export default WhyChooseGTC;