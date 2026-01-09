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
      desc: "Experience superior technology with Naqdi’s advanced tools & trading platforms",
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
        <h2 className="text-center text-[40px] font-extrabold text-[#000]">
          Why Trade with <span className="text-[#293B93]">Fxgtc</span>?
        </h2>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className={[
                "group relative overflow-hidden rounded-[20px] px-8 py-10",
                "bg-[#F3F4F6] text-[#0B0F1A] ",
                "transition-all duration-300",
                "hover:bg-gradient-to-br hover:from-[#213A8F] hover:to-[#0B143A] hover:shadow-[0_18px_32px_rgba(11,20,58,0.22)]",
              ].join(" ")}
            >
              {/* icon */}
              <div className="flex gap-6  items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-[64px] h-[64px]"
                    src={c.icon}
                    alt={c.title}
                    width={64}
                    height={64}
                  />
                </div>

                <div className="w-[2px] h-[64px] bg-[#ABABAB] group-hover:bg-white flex-shrink-0"></div>

                <div className="text-[22px] font-semibold text-[#000] transition-colors duration-300 group-hover:text-white">
                  {c.title}
                </div>
              </div>
              
              <p className="mt-6 text-[16px] font-medium leading-[1.5] text-[#000] transition-colors duration-300 group-hover:text-white">
                {c.desc}
              </p>
              {/* subtle diagonal light for default state only (like screenshot) */}
              <div className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-0">
                <div className="absolute -left-10 top-10 h-20 w-44 -rotate-45 bg-white/40 blur-[1px]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#293B93] to-[#0D122D] px-16 py-[14px] text-[16px] font-semibold text-white hover:brightness-110 active:translate-y-[1px]"
          >
            Become An IB
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons (updated to support hover: blue->white) ---------------- */

function IconBox({ children }) {
  return (
    <div className="grid h-[44px] w-[44px] place-items-center rounded-[10px] bg-[#E9F1FF] transition-colors duration-300 group-hover:bg-white/10">
      {children}
    </div>
  );
}

function IconShield() {
  return (
    <IconBox>
      <svg
        width="26"
        height="26"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4L31 8.5V18.5C31 26.6 24.9 32.2 20 35C15.1 32.2 9 26.6 9 18.5V8.5L20 4Z"
          fill="rgba(46,89,217,0.12)"
          className="transition-colors duration-300 group-hover:fill-white/15"
          stroke="#2E59D9"
          strokeWidth="1.8"
        />
        <path
          d="M16 20.2L18.6 22.8L24.8 16.6"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBox>
  );
}

function IconStar() {
  return (
    <IconBox>
      <svg
        width="26"
        height="26"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6l4 8.6 9.4 1.1-7 6.2 2.1 9.1L20 26.8 11.5 31l2.1-9.1-7-6.2 9.4-1.1L20 6Z"
          fill="#2E59D9"
          className="transition-colors duration-300 group-hover:fill-white"
          opacity="0.95"
        />
      </svg>
    </IconBox>
  );
}

function IconCube() {
  return (
    <IconBox>
      <svg
        width="26"
        height="26"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6l12 7v14l-12 7-12-7V13l12-7Z"
          fill="#2E59D9"
          className="transition-colors duration-300 group-hover:fill-white"
          opacity="0.18"
        />
        <path
          d="M20 6l12 7v14l-12 7-12-7V13l12-7Z"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
        <path
          d="M8 13l12 7 12-7"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
        <path
          d="M20 20v14"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
      </svg>
    </IconBox>
  );
}

function IconBriefcase() {
  return (
    <IconBox>
      <svg
        width="26"
        height="26"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 12v-2c0-2 1.6-3.6 3.6-3.6h4.8C24.4 6.4 26 8 26 10v2"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
        <rect
          x="9"
          y="12"
          width="22"
          height="20"
          rx="4"
          fill="#2E59D9"
          className="transition-colors duration-300 group-hover:fill-white"
          opacity="0.14"
        />
        <rect
          x="9"
          y="12"
          width="22"
          height="20"
          rx="4"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
        <path
          d="M9 20h22"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
      </svg>
    </IconBox>
  );
}

function IconCheckShield() {
  return (
    <IconBox>
      <svg
        width="26"
        height="26"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 5l11 4.6V20c0 7.5-5.8 12.6-11 15-5.2-2.4-11-7.5-11-15V9.6L20 5Z"
          fill="#2E59D9"
          className="transition-colors duration-300 group-hover:fill-white"
          opacity="0.12"
          stroke="#2E59D9"
          strokeWidth="2"
        />
        <path
          d="M16 20l3 3 7-8"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBox>
  );
}

function IconGear() {
  return (
    <IconBox>
      <svg
        width="26"
        height="26"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.7 7.5l1 3.1c.8.3 1.5.7 2.2 1.2l3.1-1.1 2.4 4.2-2.6 2c.1.4.2 1 .2 1.6s-.1 1.2-.2 1.6l2.6 2-2.4 4.2-3.1-1.1c-.7.5-1.4.9-2.2 1.2l-1 3.1h-4.8l-1-3.1c-.8-.3-1.5-.7-2.2-1.2l-3.1 1.1-2.4-4.2 2.6-2a6.5 6.5 0 0 1 0-3.2l-2.6-2 2.4-4.2 3.1 1.1c.7-.5 1.4-.9 2.2-1.2l1-3.1h4.8Z"
          fill="#2E59D9"
          className="transition-colors duration-300 group-hover:fill-white"
          opacity="0.12"
          stroke="#2E59D9"
          strokeWidth="2"
        />
        <circle
          cx="20"
          cy="20"
          r="4.2"
          stroke="#2E59D9"
          className="transition-colors duration-300 group-hover:stroke-white"
          strokeWidth="2"
        />
      </svg>
    </IconBox>
  );
}
