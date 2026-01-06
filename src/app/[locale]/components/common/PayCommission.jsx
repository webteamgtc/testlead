'use client';
import { useState } from 'react';
import Image from 'next/image';

const PayCommission = ({ topTitle,bottomText, buttonText, setIsOpen }) => {
  const features = [
    {
      icon: (
       <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M20 4L30 8V18C30 25 24.5 30 20 33C15.5 30 10 25 10 18V8L20 4Z"
    stroke="#4D4D70"
    strokeWidth="2"
  />
  <path
    d="M18 12L14 20H19L16 28L26 18H21L24 12H18Z"
    fill="#4D4D70"
  />
</svg>

      ),
      title: "Fast & Secure Execution",
      description: "Lightning-fast order processing with advanced trade security. "
    },
    {
      icon: (
       <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="6"
    y="8"
    width="28"
    height="28"
    rx="4"
    stroke="#4D4D70"
    strokeWidth="2"
  />
  <path d="M12 16H24" stroke="#4D4D70" strokeWidth="2"/>
  <path d="M24 14L28 18L24 22" stroke="#4D4D70" strokeWidth="2"/>
  <path d="M16 24H28" stroke="#4D4D70" strokeWidth="2"/>
  <path d="M16 22L12 26L16 30" stroke="#4D4D70" strokeWidth="2"/>
</svg>
      ),
      title: "Instant Deposit & Withdrawal",
      description: "Fast and smooth fund processing for you and your clients."
    },
    {
      icon: (
       <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="10" r="4" fill="#4D4D70"/>
  <circle cx="10" cy="26" r="4" fill="#4D4D70"/>
  <circle cx="30" cy="26" r="4" fill="#4D4D70"/>
  <path d="M20 14V20" stroke="#4D4D70" strokeWidth="2"/>
  <path d="M20 20L10 22" stroke="#4D4D70" strokeWidth="2"/>
  <path d="M20 20L30 22" stroke="#4D4D70" strokeWidth="2"/>
</svg>
      ),
      title: "Multi-Tier Partners System",
      description: "Grow your network with a powerful multi-level Partners structure."
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="18" stroke="#4D4D70" strokeWidth="2"/>
  <circle cx="14" cy="16" r="3" fill="#4D4D70"/>
  <circle cx="26" cy="16" r="3" fill="#4D4D70"/>
  <circle cx="20" cy="26" r="3" fill="#4D4D70"/>
  <path d="M14 19L20 23L26 19" stroke="#4D4D70" strokeWidth="2"/>
</svg>
      ),
      title: "Copy Trading",
      description: "Boost retention with smart copy trading solutions."
    },
    {
      icon: (
       <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M20 3L33 8V18C33 26 26.5 31.5 20 35C13.5 31.5 7 26 7 18V8L20 3Z"
    stroke="#4D4D70"
    strokeWidth="2"
    fill="none"
  />
  <path d="M14 20L18 24L26 16" stroke="#4D4D70" strokeWidth="2"/>
</svg>
      ),
      title: "Most Stable Trading Platforms",
      description: "Reliable, industry-leading trading platforms for consistent performance."
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M20 6C12.82 6 7 11.82 7 19V24C7 25.66 8.34 27 10 27H13V18H10V19C10 13.48 14.48 9 20 9C25.52 9 30 13.48 30 19V18H27V27H30C31.66 27 33 25.66 33 24V19C33 11.82 27.18 6 20 6Z"
    fill="#4D4D70"
  />
  <path d="M15 31H25" stroke="#4D4D70" strokeWidth="2"/>
</svg>

      ),
      title: "24/7 Multilingual Support",
      description: "Round-the-clock multilingual partner assistance."
    }
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-t from-[#f7f7f7] to-[#fff] text-primary py-8 md:py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-white z-0" />

      {/* Faded Background Image at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-20">
        <img
          src="/ib/layer5.webp" // ✅ change this path if needed
          alt="Decorative background"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>
    
      <div className="relative max-w-6xl mx-auto ainer flex flex-col gap-5 md:gap-5 px-4">
        {/* Section Title */}

        <h4 className="text-lg md:text-2xl font-[200]">{topTitle}</h4>
        <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold">
          Why Partner With GTCFX
        </h2>
        <p className="text-sm md:text-base xl:text-[22px] max-w-3xl mx-auto leading-relaxed">
          Advanced trading solutions and partner benefits designed for sustainable expansion.
        </p>


       {/* Flip Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 justify-center">
{features.map((feat, idx) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const isFlipped = isMobile && flippedIndex === idx;

  return (
    <div
      key={idx}
      className="group relative w-full h-60 [perspective:1000px] bg-white rounded-2xl text-[#1F2937] flex flex-col items-center"
      onClick={() => {
        if (isMobile) {
          toggleFlip(idx);
        }
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 shadow-2xl [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        } group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center [backface-visibility:hidden] px-10">
          <p className="text-4xl">{feat.icon}</p>
          <h3 className="text-lg font-medium">{feat.title}</h3>
        </div>

        {/* Back Face */}
        <div className="absolute bg-secondary text-white inset-0 flex items-center justify-center p-6 rounded-xl text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm md:text-base max-w-60 mx-auto">{feat.description}</p>
        </div>
      </div>
    </div>
  );
})}

</div>


        {/* Footer Text and CTA */}
       
        <div className='flex flex-row items-center justify-center mt-5'>
            <button
  className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42]
             hover:from-[#293794] hover:to-[#000021]
             text-sm font-bold md:text-base xl:text-lg
             text-white px-8 py-3 rounded-full
             transition-all duration-300 cursor-pointer"
  onClick={() => {
    document
      .getElementById("register-form")
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(false);
  }}
>
  Register now
</button>
        </div>


      </div>
    </section>
  );
};

export default PayCommission