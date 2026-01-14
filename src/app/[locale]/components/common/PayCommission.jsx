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
      title: "Instant Fund Transfers",
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
      title: "Stable Trading Platforms",
      description: "Industry-leading trading platforms for consistent performance."
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
    <section className="bg-gradient-to-b from-[#f7f7f7] to-[#fff] text-primary py-8 md:py-20 relative overflow-hidden text-center">
      
      <div className="relative max-w-6xl mx-auto ainer flex flex-col gap-5 md:gap-5 px-4 md:px-0">
        {/* Section Title */}

        <h4 className="text-lg md:text-2xl text-secondary">{topTitle}</h4>
        <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold">
          Why Partner With GTCFX
        </h2>
        <p className="text-sm md:text-base xl:text-[20px] max-w-xl mx-auto leading-relaxed">
          Advanced trading solutions and partner benefits designed for sustainable expansion.
        </p>


       {/* Flip Cards Grid */}
{/* Slim Feature Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
  {features.map((feat, idx) => (
    <div
      key={idx}
      className="
        bg-white
        rounded-xl
        shadow-[0_6px_18px_rgba(0,0,0,0.08)]
        p-5
        flex flex-col md:gap-3
        text-left
      "
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          {feat.icon}
        </div>

        <h3 className="text-base md:text-lg font-semibold text-[#1F2937]">
          {feat.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-[15px] text-[#4B5563] leading-relaxed pl-[62px]">
        {feat.description}
      </p>
    </div>
  ))}
</div>



        {/* Footer Text and CTA */}
       
        <div className='flex flex-row items-center justify-center mt-5'>
            <button
  className=" bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]
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