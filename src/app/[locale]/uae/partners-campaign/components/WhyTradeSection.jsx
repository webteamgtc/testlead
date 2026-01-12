"use client";

export default function WhyTradeSection() {
  const cards = [
    {
      title: "Unmatched Transparency",
      desc: "Ensuring a safe and secure trading environment with the highest level of transparency, regulated and monitored by global regulators",
      icon: "/partner-with-us/last-icon1.svg",
    },
    {
      title: "5-Star Support",
      desc: "Our multilingual team is available to provide topnotch customer service. Share your insights to help us enhance your experience",
      icon: "/partner-with-us/last-icon2.svg",
    },
    {
      title: "Premium Trading",
      desc: "Experience superior technology with GTCFX advanced tools & trading platforms",
      icon: "/partner-with-us/last-icon3.svg",
    },
    {
      title: "15 Year of Experience",
      desc: "When it comes to trading, experience is everything. That’s why we’re proud to boast a team of professionals with exceeding 15 years of experience who can anticipate potential market roadblocks and navigate through it with the most creative solutions",
      icon: "/partner-with-us/last-icon4.svg",
    },
    {
      title: "Your Protection, Our Priority",
      desc: "Your funds are secure with the highest levels of protection and accessibility on both desktop and mobile devices",
      icon: "/partner-with-us/last-icon5.svg",
    },
    {
      title: "Customized Solutions",
      desc: "Experience tailor-made trading solutions that align with your goals with personalized strategies",
      icon: "/partner-with-us/last-icon6.svg",
    },
  ];

  return (
    <section className="w-full bg-white pt-6 pb-14">
      <div className="mx-auto container">
        {/* Title */}
        <h2 className="text-center md:text-[40px] text-[30px] font-extrabold text-[#000]">
          Why Trade with <span className="text-[#293B93]">GTCFX</span>?
        </h2>

        {/* Grid */}
        <div className="mt-10 grid md:gap-6 gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className={[
                "group relative overflow-hidden rounded-[20px] md:px-8 px-4 md:py-10 py-8",
                "bg-[#F3F4F6] text-[#0B0F1A] ",
                "transition-all duration-300",
                "hover:bg-gradient-to-br hover:from-[#213A8F] hover:to-[#0B143A] hover:shadow-[0_18px_32px_rgba(11,20,58,0.22)]",
              ].join(" ")}
            >
              {/* icon */}
              <div className="flex gap-6  items-center">
                <div className="flex-shrink-0">
                  <img
                    className="md:w-[64px] w-[50px] md:h-[64px] h-[50px]"
                    src={c.icon}
                    alt={c.title}
                    width={64}
                    height={64}
                  />
                </div>

                <div className="md:w-[2px] w-[1px] md:h-[64px] h-[50px] bg-[#ABABAB] group-hover:bg-white flex-shrink-0"></div>

                <div className="md:text-[22px] text-[18px] font-semibold text-[#000] transition-colors duration-300 group-hover:text-white">
                  {c.title}
                </div>
              </div>
              
              <p className="mt-6 md:text-[16px] text-[14px] font-medium leading-[1.5] text-[#000] transition-colors duration-300 group-hover:text-white">
                {c.desc}
              </p>
              {/* subtle diagonal light for default state only (like screenshot) */}
              <div className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-0">
                <div className="absolute -left-10 top-10 md:h-20 h-[16px] md:w-44 w-[36px] -rotate-45 bg-white/40 blur-[1px]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-full w-full sm:w-auto bg-gradient-to-r from-[#293B93] to-[#0D122D] px-16 py-[14px] text-[16px] font-semibold text-white hover:brightness-110 active:translate-y-[1px]"
          >
            Become An IB
          </button>
        </div>
      </div>
    </section>
  );
}
