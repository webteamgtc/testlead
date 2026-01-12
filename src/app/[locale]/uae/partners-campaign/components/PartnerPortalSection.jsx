'use client';

import Image from 'next/image';

export default function PartnerPortalSection() {
  const cards = [
    {
      title: (
        <>
          Use the <span className="text-[#2E59D9]">IB link builder</span> to create your custom
          <br />
          partnership link in seconds
        </>
      ),
    },
    {
      title: (
        <>
          Use the promotional content &amp; download
          <br />
          detailed client reports
        </>
      ),
    },
    {
      title: (
        <>
          Withdraw earnings through{' '}
          <span className="text-[#2E59D9]">flexible payout</span>
          <br />
          <span className="text-[#2E59D9]">options</span>
        </>
      ),
    },
    {
      title: (
        <>
          Exclusive <span className="text-[#2E59D9]">marketing materials</span>, such as
          <br />
          website banners &amp; widgets
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f6f6f6] md:py-14 py-10">
      <div className="mx-auto container">
        {/* Heading */}
        <div className="text-center">
          <h2 className="md:text-[40px] text-[24px] font-extrabold leading-tight text-primary">
            The <span className="text-[#B78855]">GTCFX Partner</span> Portal: Explore now!
          </h2>

          <p className="mt-4 md:text-[32px] text-[18px] font-semibold text-[#404040]">
            Your clients, closer than ever
          </p>

          <p className="mx-auto mt-4 max-w-5xl md:text-[16px] text-[14px] font-medium leading-[1.65] text-[##000000]">
            Take complete control of your client network. The GTCFX Partner Portal delivers a
            comprehensive dashboard for insights, trading stats, registrations, deposits, and
            withdrawals. Gain real-time insights, streamline client management, and access powerful
            marketing tools — all in one comprehensive dashboard. Maximize your potential with
            GTCFX.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid md:gap-6 gap-4 md:grid-cols-2">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-[20px] px-12 pb-0 pt-8 "
              style={{
                backgroundImage: 'url(/partner-with-us/portal-bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="relative text-center z-10">
                <p className="md:text-[18px] text-[16px] font-semibold leading-[1.35] text-white">{c.title}</p>
              </div>

              {/* screenshot area */}
              <div className="relative mt-4 md:h-[320px] h-[220px] border-8 border-[#7D7980] rounded-[20px] border-b-0 w-full z-10">
                {/* replace this image later */}
                <img
                  src="/partner-with-us/portal.svg"
                  alt="Portal preview"
                  className="h-full w-full rounded-[10px]  object-cover"
                />
              </div>

              </div>
          ))}
        </div>
   <div className="mt-12 text-center">
              <button
                className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42]
                           hover:from-[#293794] hover:to-[#000021]
                           text-sm font-bold md:text-base
                           text-white px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => {
                  document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen?.(false);
                }}
              >
                Become Our Partner
              </button>
            </div>
   
      </div>
    </section>
  );
}
