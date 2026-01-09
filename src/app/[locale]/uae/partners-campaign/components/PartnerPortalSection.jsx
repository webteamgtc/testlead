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
    <section className="w-full bg-white py-14">
      <div className="mx-auto container">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold leading-tight text-[#0B0F1A]">
            The <span className="text-[#B78855]">naqdi Partner</span> Portal: Explore now!
          </h2>

          <p className="mt-4 text-[32px] font-semibold text-[#404040]">
            Your clients, closer than ever
          </p>

          <p className="mx-auto mt-4 max-w-5xl text-[16px] font-medium leading-[1.65] text-[##000000]">
            Take complete control of your client network. The naqdi Partner Portal delivers a
            comprehensive dashboard for insights, trading stats, registrations, deposits, and
            withdrawals. Gain real-time insights, streamline client management, and access powerful
            marketing tools — all in one comprehensive dashboard. Maximize your potential with
            naqdi.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
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
                <p className="text-[18px] font-semibold leading-[1.35] text-white">{c.title}</p>
              </div>

              {/* screenshot area */}
              <div className="relative mt-4 h-[320px] border-8 border-[#7D7980] rounded-[20px] border-b-0 w-full z-10">
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
