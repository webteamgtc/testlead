'use client';

import Image from 'next/image';

export default function GoldBonus({ setIsOpen }) {
    return (
        <section className="relative bg-white">
            <div className="mx-auto container">
                <div className="grid items-end gap-10 md:gap-14 md:grid-cols-2 pt-10 md:pt-16">
                    {/* LEFT: Artwork */}
                    <div className="order-1 md:order-none flex justify-center md:justify-start">
                        <div className="relative w-[330px] sm:w-[400px] md:w-[430px] lg:w-[470px]">
                            {/* Replace src with your asset path */}
                            <Image
                                src="/trade-gold/section3.svg"
                                alt="Gold coins"
                                width={940}
                                height={940}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT: Copy */}
                    <div className="max-w-[560px] pb-10 md:ml-auto">
                        <h1 className="text-[#000032] font-extrabold tracking-tight
                           text-[24px] leading-[30px]
                           md:text-[38px] md:leading-[36px]
                           xl:text-[32px] xl:leading-[40px] ">
                            Trade Gold with GTC &amp; Get  a {" "}
                            <br className="hidden md:block" />
                            Bonus That Boosts Your Margin,
                            <br className="hidden md:block" />
                            Not Your Hopes
                        </h1>

                        <p className="mt-3 text-[16px] leading-[24px] text-[#4D4D70]">
                            Forget losable or tricky bonuses when trading gold. When you switch
                            to GTC, deposit $500 or more, and trade gold, we’ll match your deposit
                            with a Margin Bonus. You get extra trading margin with real cashback
                            rewards.
                        </p>

                        <p className="mt-6 md:text-[22px] text-[16px] leading-[20px] md:leading-[28px] font-bold text-[#4D4D70]">
                            Trade gold &amp; hit the cashback target. Withdraw your reward.
                        </p>

                        {/* 2×2 Feature list */}
                        <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-8 text-[#0E1443] text-[14px] leading-[20px]">
                            <Feature icon={"/trade-gold/icon1.svg"} label="Great Bonus" />
                            <Feature icon={"/trade-gold/icon2.svg"} label="No Hidden Terms" />
                            <Feature icon={"/trade-gold/icon3.svg"} label="No Equity Confusion" />
                            <Feature icon={"/trade-gold/icon4.svg"} label="Get Cashback Too" />
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-6 inline-flex w-full sm:w-fit items-center justify-center
                         h-[42px] px-5 rounded-[10px]
                         text-white text-[16px] font-semibold
                         bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                         shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                        >
                            Trade Gold
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- small feature item ---------- */
function Feature({ icon, label }) {
    return (
        <div className="flex flex-col gap-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6B5AE0]">
                <img src={icon} alt="" />
            </span>
            <span className=' text-[#101828] md:text-[20px] text-[18px] font-bold'>{label}</span>
        </div>
    );
}

/* ---------- minimal inline icons to match the look ---------- */
function PlusIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}
function ShieldIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l7 3v5c0 4.97-3.03 8.9-7 10-3.97-1.1-7-5.03-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function BalanceIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M7 6l-3 6h6l-3-6zm10 0l-3 6h6l-3-6zM12 12v6M9 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}
function CashbackIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 3a9 9 0 109 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M21 3v6h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 13c.5 1 1.5 1.5 2.5 1.5 1.2 0 2-.7 2-1.6 0-2.2-4.4-1.2-4.4-3.4 0-1 .9-1.8 2.2-1.8 1 0 1.9.4 2.3 1.2M12 7.7v.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
