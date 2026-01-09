"use client";

import React from "react";

export default function SecureClientFundsBar() {
  return (
    <section className="w-full bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%">
      <div className="max-w-6xl mx-auto px-5 ">
        <div
          className="
            relative bg-transparent w-full
            flex flex-col sm:flex-row
            items-start sm:items-center
            gap-4 sm:gap-6
            py-4 sm:py-5
            border-b border-[#b68756]/70
          "
        >
          {/* Left Icon */}
          <div className="shrink-0">
            <div
              className="
                h-12 w-12 sm:h-14 sm:w-14
                rounded-full
                flex items-center justify-center
                bg-white/5
                ring-1 ring-[#b68756]/60
              "
            >
              {/* Shield icon (inline SVG) */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.5L32 8.4V18.2C32 27.1 25.9 32.7 20 36C14.1 32.7 8 27.1 8 18.2V8.4L20 3.5Z"
                  stroke="#b68756"
                  strokeWidth="2"
                />
                <path
                  d="M16.5 19.5V17.8C16.5 15.9 18.1 14.4 20 14.4C21.9 14.4 23.5 15.9 23.5 17.8V19.5"
                  stroke="#b68756"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="15"
                  y="19.5"
                  width="10"
                  height="9"
                  rx="2"
                  stroke="#b68756"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-base sm:text-lg leading-tight">
              Secure Client Funds
            </h3>
            <p className="mt-1 text-white/85 text-sm sm:text-[15px] leading-relaxed">
              Protect your clients with robust fund security, segregated accounts,
              and trusted financial safeguards.
            </p>
          </div>

          {/* Optional CTA (remove if not needed) */}
     

          {/* subtle top gradient like sample */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
