"use client";

import Image from "next/image";

export default function CompanyProfileCta() {
  return (
    <section className="w-full bg-white">
      {/* Light grey band like screenshot */}
      <div className="w-full bg-[#F3F4F6]">
        <div className="mx-auto flex container items-center justify-between py-14">
          {/* LEFT */}
          <div className="max-w-3xl">
            <h3 className="text-[36px] font-extrabold leading-tight text-[#000]">
              Naqdi Group{" "}
              <span className="text-[#B48755]">Company Profile</span>
            </h3>

            <p className="mt-3  text-[18px] font-normal leading-[1.4] text-[#000]">
              naqdi invites you to learn more about our services, values, and
              commitment to excellence. Download our comprehensive company
              profile PDF to discover how we can help you achieve success in the
              forex market.
            </p>

            <button
            type="button"
            className="rounded-full mt-10 bg-gradient-to-r from-[#293B93] to-[#0D122D] px-14 py-[14px] text-[16px] font-medium text-white hover:brightness-110 active:translate-y-[1px]"
          >
            Download Company Profile PDF
          </button>
          </div>

          {/* RIGHT (dummy image) */}
          <div className="relative hidden h-[320px] w-[430px] md:block mt-[-136px]">
            <div className="relative ml-auto h-[330px] w-[470px]">
              <img
                src="/partner-with-us/last-banner.svg"
                alt="Company profile visual"
                fill
                className="h-full w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
