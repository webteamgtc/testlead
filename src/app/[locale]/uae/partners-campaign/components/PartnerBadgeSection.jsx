'use client';

import Image from 'next/image';

export default function ClaimPartnerBadge() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto container">
        {/* Card */}
        <div className="rounded-[30px] bg-[#F7F7F7] px-10 py-14">
          <div className="flex items-center justify-between gap-8">
            {/* Left text */}
            <div className="max-w-xl">
              <h3 className="text-[36px] font-extrabold leading-tight text-[#000]">
                Claim Your Partner <span className="text-[#B48755]">Badge!</span>
              </h3>

              <p className="mt-3 max-w-xl text-[16px] font-medium leading-[1.6] text-[#000000]">
                Get your official GTCFX Partner Badge now! Display it on your website and
                immediately highlight your trusted broker partnership.
              </p>
            </div>

            {/* Right images */}
            <div className="flex items-center gap-4">
              <div className="relative flex justify-center items-center p-2.5 h-[140px] w-[140px] overflow-hidden"
              style={{
                borderRadius: "20px",
                background: "#FFF",
                boxShadow: "0 4px 30px 0 rgba(0, 0, 0, 0.15)",
              }}
              >
                <img
                  src="/partner-with-us/logo-blue.svg"
                  alt="Badge light"
                  fill
                  className="h-[46px] object-cover"
                />
              </div>

              <div className="relative flex justify-center items-center p-2.5 h-[140px] w-[140px] overflow-hidden"
              style={{borderRadius: "20px",
                background: "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
                boxShadow: "0 4px 30px 0 #243484",
              }}>
              
                <img
                  src="/partner-with-us/logo-white.svg"
                  alt="Badge dark"
                  fill
                  className=" h-[46px] opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
