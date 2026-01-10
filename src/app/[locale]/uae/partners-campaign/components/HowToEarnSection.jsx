'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HowToEarnSectionInteractive() {
  const items = [
    {
      title: 'Activate Your IB Account:',
      desc: 'Your IB area unlocks once approved with all earning levels ready to use.',
    },
    {
      title: 'Pick Your Preferred Earning Plan:',
      desc: 'Level 1-5, Premium, Elite RAW— all fully automated with final spreads included.',
    },
    {
      title: 'Share Your Referral Link Anywhere:',
      desc: 'Each plan has a unique URL. Copy → Share → Track your clients instantly.',
    },
    {
      title: 'Start Earning on Every Lot:',
      desc: 'Your clients trade—you receive instant rebates inside the Naqdi App.No manual work. No delays. 100% automated.',
    },
  ];

  const [active, setActive] = useState(3);

  // Inject wave animation styles
  useEffect(() => {
    const styleId = "wave-animation-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes wave {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.7;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.4;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.4);
          opacity: 0;
        }
      }
      .wave-circle {
        animation: wave 3s ease-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto container py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="relative flex items-center justify-center md:justify-start">
            {/* Laptop image container - for positioning reference */}
            <div className="relative z-10 w-[360px] drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)] md:ml-2">
              {/* Animated circle waves - positioned behind laptop, centered */}
              <div className="absolute left-1/2 top-1/2 z-0 ">
                {/* Wave 1 */}
                <div 
                  className="wave-circle absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full bg-[#B8C0DB]/55"
                  style={{ 
                    animation: 'wave 3s ease-out infinite',
                  }} 
                />
                {/* Wave 2 */}
                <div 
                  className="wave-circle absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full bg-[#B8C0DB]/40"
                  style={{ 
                    animation: 'wave 3s ease-out infinite 1s',
                  }} 
                />
                {/* Wave 3 */}
                <div 
                  className="wave-circle absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full bg-[#B8C0DB]/30"
                  style={{ 
                    animation: 'wave 3s ease-out infinite 2s',
                  }} 
                />
              </div>
              {/* Laptop image - on top */}
              <Image
                src="/partner-with-us/laptop.svg"
                alt="Platform"
                width={520}
                height={420}
                className="relative z-10 h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className='max-w-xl'>
            <h2 className="text-center text-[32px] font-extrabold leading-tight text-[#000] md:text-left">
              How To Earn As IB With <span className="text-[#B48755]">Naqdi</span>.
            </h2>

            <div className="relative mt-7">
              {/* dotted spine (fixed, behind everything) */}
              <div className="absolute left-[26px] top-[30px] h-[350px] border-l-2 border-dotted border-[#1F2D6B]/70" />

              <div className="space-y-4">
                {items.map((it, idx) => {
                  const isActive = idx === active;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActive(idx)}
                      className="relative"
                    >
                      {/* Row wrapper ALWAYS same height so no jump */}
                      <div
                        className={[
                          'relative flex items-center',
                          'min-h-[78px]', // keeps layout stable
                        ].join(' ')}
                      >
                        {/* connector line (fixed position) */}
                        <div className="absolute left-[26px] top-1/2 h-[2px] w-[18px] -translate-y-1/2 bg-[#1F2D6B]/50" />

                        {/* The “pill” background exists ALWAYS (transparent when not active) */}
                        <div
                          className={[
                            'relative w-full rounded-full transition-colors',
                            // reserve the same paddings always
                            'py-[14px] pr-10 pl-[104px]',
                            isActive
                              ? 'bg-gradient-to-r from-[#0D1A4B] to-[#0B143A] shadow-[0_10px_22px_rgba(11,20,58,0.22)]'
                              : 'bg-transparent',
                          ].join(' ')}
                        >
                          {/* Number circle: ALWAYS absolute at same place */}
                          <div
                            className={[
                              'absolute left-[8px] top-1/2 -translate-y-1/2',
                              'flex items-center justify-center rounded-full bg-white font-extrabold',
                              'transition-all',
                              isActive
                                ? 'h-[62px] w-[62px] text-[22px] text-[#13235D] ring-[6px] ring-[#13235D]'
                                : 'h-[38px] w-[38px] text-[16px] text-[#1F2D6B] ring-2 ring-[#1F2D6B]/70',
                            ].join(' ')}
                          >
                            {idx + 1}
                          </div>

                          {/* Text (same start X always) */}
                          <div
                            className={[
                              'text-[16px] font-extrabold',
                              isActive ? 'text-white' : 'text-[#000]',
                            ].join(' ')}
                          >
                            {it.title}
                          </div>

                          <div
                            className={[
                              'mt-[3px] max-w-[430px] text-[14px] font-medium leading-[1.55]',
                              isActive ? 'text-white' : 'text-[#000]',
                            ].join(' ')}
                          >
                            {it.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
