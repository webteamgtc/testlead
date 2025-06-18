import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '/goldlp/icony1.svg',
    title: 'Precision Analytics',
    description: 'Make smarter trades with gold-specific charts, tools, and insights.',
  },
  {
    icon: '/goldlp/icony2.svg',
    title: 'AI-Backed Signals',
    description: 'Get real-time alerts powered by AI to catch golden opportunities.',
  },
  {
    icon: '/goldlp/icony3.svg',
    title: '24/7 Expert Support',
    description: 'Get help from real trading pros whenever markets are open.',
  },
];

const TradeGoldFeatures = () => {
  return (
    <section className="bg-white py-6 md:py-16 text-center relative overflow-hidden">

      <h2 className="text-xl md:text-3xl font-medium text-[#0b1244] mb-20 px-5">
        Trade gold like it’s meant to be.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 max-w-5xl mx-auto px-5 md:px-0 relative z-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#f3f3f3] min-h-[240px] rounded-xl shadow-lg p-8 pt-24 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute -top-12 w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={128} height={128} />
            </div>
            <h3 className="text-lg font-semibold text-[#0b1244] mt-4 mb-2">{item.title}</h3>
            <p className="text-sm text-primary">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradeGoldFeatures;