"use client";

export default function WhyTradeSection() {
  const cards = [
    {
      title: "Smooth Trading Experience",
      desc: "Fast execution, competitive spreads, and deep liquidity across global markets.",
      icon: "/partner-with-us/last-icon1.svg",
    },
    {
      title: "Easy-to-Use Platforms",
      desc: "Trade on stable MT4 & MT5 platforms across desktop, web, and mobile devices.",
      icon: "/partner-with-us/last-icon2.svg",
    },
    {
      title: "Safe & Regulated",
      desc: "Trade with confidence under a multi-regulated broker backed by over 14 years of industry experience.",
      icon: "/partner-with-us/last-icon3.svg",
    },
    {
      title: "Always-Available Support",
      desc: "Multilingual customer support ready to assist whenever needed.",
      icon: "/partner-with-us/last-icon4.svg",
    },
    {
      title: "Rewards & Investment Options",
      desc: "Loyalty programs, copy trading, PAMM and MAM solutions that keep clients engaged.",
      icon: "/partner-with-us/last-icon5.svg",
    },
    {
      title: "More Markets, More Opportunity",
      desc: "Access global instruments and trading opportunities designed for active traders and long-term investors.",
      icon: "/partner-with-us/last-icon6.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto container">
        {/* Title */}
        <h2 className="text-center md:text-[25px] lg:text-[36px] text-[20px] font-extrabold text-primary">
          Why Your Clients Will Love <span className="text-secondary">GTCFX</span>
        </h2>

        {/* Grid */}
        <div className="mt-10 grid md:gap-6 gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className={[
                "group relative overflow-hidden rounded-[20px] md:px-8 px-4 lg:py-10 py-4",
                "bg-[#f6f6f6] text-[#0B0F1A]",
                "transition-all duration-300",
                "hover:bg-gradient-to-br hover:from-[#213A8F] hover:to-[#0B143A] hover:shadow-[0_18px_32px_rgba(11,20,58,0.22)]",
              ].join(" ")}
            >
              {/* icon */}
              <div className="flex gap-3 lg:gap-6 items-center">
                <div className="flex-shrink-0">
                  <img
                    className="lg:w-[64px] w-[50px] lg:h-[64px] h-[50px]"
                    src={c.icon}
                    alt={c.title}
                    width={64}
                    height={64}
                  />
                </div>

                <div className="md:w-[2px] w-[1px] md:h-[64px] h-[50px] bg-[#ABABAB] group-hover:bg-white flex-shrink-0" />

                <div className="lg:text-[18px] text-[15px] font-semibold text-[#000] transition-colors duration-300 group-hover:text-white">
                  {c.title}
                </div>
              </div>

              <p className="mt-6 lg:text-[16px] text-[13px] font-medium leading-[1.5] text-[#000] transition-colors duration-300 group-hover:text-white">
                {c.desc}
              </p>

              {/* subtle diagonal light for default state only */}
              <div className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-0">
                <div className="absolute -left-10 top-10 md:h-20 h-[16px] md:w-44 w-[36px] -rotate-45 bg-white/40 blur-[1px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
