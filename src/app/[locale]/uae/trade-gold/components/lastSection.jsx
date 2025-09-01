'use client';

import Image from 'next/image';

export default function HeroBetterWay({ setIsOpen }) {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* BG image on desktop/tablet (left side), fully visible */}
            <div className="hidden md:block absolute inset-y-0 left-0 w-full z-0">
                <div className="relative h-full w-full">
                    <Image
                        src="/trade-gold/last.png"           // ensure this exists in /public/trade-gold/last.png
                        alt="Smiling trader holding gold bars"
                        fill
                        priority
                        sizes="(min-width: 1024px) 52vw, 100vw"
                        className="object-fill object-left" // show full image without cropping
                    />
                </div>
            </div>

            {/* Gentle fade on the right so text is always readable */}
            <div className="hidden md:block absolute inset-y-0 left-[52%] right-0 z-0 bg-gradient-to-r from-white/0 via-white/70 to-white" />

            {/* Content; on md+ we pad-left so it doesn't overlap the image area */}
            <div className="relative z-10 container flex justify-end  flex-col md:flex-row mx-auto py-2 md:py-16 md:pl-[56%] md:min-h-[420px]">
                <div className="max-w-[560px] text-center md:text-left">
                    <h1 className="text-[#0E1443] font-extrabold text-center md:text-left tracking-tight
                         text-[28px] leading-[34px]
                         md:text-[34px] md:leading-[42px]
                         xl:text-[36px] xl:leading-[44px]">
                        Trade Gold the Better Way
                        <br className="hidden md:block" />
                        Today.
                    </h1>

                    <p className="mt-3 text-[14px] leading-[22px] text-[#6E6E7A]">
                        It only takes a few minutes to open your GTC account and access
                        everything we’ve talked about above.
                    </p>

                    <p className="mt-3 text-[14px] leading-[22px] text-[#6E6E7A]">
                        Say goodbye to the frustrations you’re facing when trading gold with your
                        current broker. Say hello to faster trades, bigger rewards, and real
                        transparency.
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 inline-flex h-[42px] w-full md:w-fit items-center justify-center
                       rounded-[10px] px-5 text-[16px] font-semibold text-white
                       bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                       shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                    >
                        Trade Gold
                    </button>
                </div>

                {/* Mobile image: AFTER text */}
                <div className="mt-6 md:hidden">
                    <Image
                        src="/trade-gold/last.png"
                        alt="Smiling trader holding gold bars"
                        width={900}
                        height={900}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
