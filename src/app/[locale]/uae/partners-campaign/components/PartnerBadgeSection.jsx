"use client";

import Image from "next/image";

export default function ClaimPartnerBadge() {
  return (
    <section className="w-full bg-white md:pb-12 pb-8">
      <div className="mx-auto container">
        {/* Card */}
        <div className="rounded-[30px] bg-[#F7F7F7] md:px-10 px-4 md:py-14 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left text */}
            <div className="max-w-5xl">
              <h3 className="md:text-[36px] text-[20px] font-extrabold leading-tight text-primary text-center md:text-left ">
                Claim Your  
                <span className="text-[#B48755]"> Partner Starter Pack</span>
              </h3>

              <p className="text-center md:text-left mt-3 max-w-5xl md:text-[16px] text-[14px] font-medium leading-[1.6] text-primary">
               Get instant access to promotional materials, training resources, and tools designed to help you grow with GTCFX.
              </p>
            </div>

            {/* Right images */}
            <div className=" text-center">
              <button
                className="bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]
                           hover:from-[#293794] hover:to-[#000021]
                           text-sm font-bold md:text-base
                           text-white px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => {
                  document
                    .getElementById("register-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen?.(false);
                }}
              >
                Register Now
              </button>
            </div>
            {/* <div className=" items-center gap-4 hidden md:flex">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
