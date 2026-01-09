"use client";

import { useState } from "react";

export default function NaqdiIbOnboardingForm({ isIb = false }) {
  const offers = [
    { label: "Level 1 - Earn $10/lot", full: true },
    { label: "Level 2 - Earn $15/lot" },
    { label: "Level 3 - Earn $20/lot" },
    { label: "Level 4 - Earn $25/lot" },
    { label: "Level 5 - Earn $30/lot" },
    { label: "Premium - Earn $2/lot" },
    { label: "Elite RAW - Earn $1/lot" },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className={`relative w-full`}>
      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-[20px] bg-white p-8 ${
          isIb ? "px-16 py-12" : ""
        }`}
        style={{ boxShadow: isIb ? "0px 0px 10px 0px #0000001A" : "none" }}
      >
        {/* subtle circle bg bottom like screenshot */}
        <div className="pointer-events-none absolute -bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-[#E9ECF7]" />
        <div className="pointer-events-none absolute -bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-gradient-to-t from-[#E9ECF7] to-transparent opacity-80" />

        <div className="relative">
          {/* Title */}
          {isIb && (
            <div className="text-center mb-6">
              <h2 className="text-center text-[32px] uppercase font-extrabold text-[#000]">
                Become A <span className="text-[#B48755]">IB</span>
              </h2>
              <p className="text-[16px] text-center font-normal text-[#000000]">
                Complete Your Registration
              </p>
            </div>
          )}
          <h3 className="text-[18px] font-normal text-[#293B93]">
            Automated Onboarding Clients Offers
          </h3>

          {/* Offers */}
          <div className="mt-4 grid grid-cols-2 gap-6">
            {offers.map((o, idx) => {
              const isActive = selected === idx;

              // first item spans full width like image
              const span = o.full ? "col-span-2" : "col-span-1";

              return (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => setSelected(idx)}
                  className={[
                    span,
                    "group flex px-4 py-3 items-center justify-between rounded-[8px] border bg-white",
                    isActive ? "border-[#9FB3FF]" : "border-[#D9D9D9]",
                    "shadow-[0_1px_0_rgba(0,0,0,0.02)]",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-2">
                    {/* radio */}
                    <span
                      className={[
                        "grid h-[14px] w-[14px] place-items-center rounded-full border",
                        isActive ? "border-[#2E59D9]" : "border-[#D9D9D9]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-[6px] w-[6px] rounded-full",
                          isActive ? "bg-[#2E59D9]" : "bg-transparent",
                        ].join(" ")}
                      />
                    </span>

                    <span className="text-[14px] font-normal text-[#4D4D4D]">
                      {o.label}
                    </span>
                  </span>

                  {/* info icon */}
                  <span className="grid h-[16px] w-[16px] place-items-center rounded-full border border-[#E5E7EB] text-[10px] text-[#9CA3AF]">
                    i
                  </span>
                </button>
              );
            })}
          </div>

          {/* Fields row 1 */}
          <div className="mt-5 grid grid-cols-2 gap-4">
            <Field label="First Name*" />
            <Field label="Last Name*" />
          </div>

          {/* Email */}
          <div className="mt-4">
            <Field label="Email*" full />
          </div>

          {/* Country */}
          <div className="mt-4">
            <SelectField
              label="Country Of Residence*"
              placeholder="Please select or type your country name !"
            />
          </div>

          {/* Phone */}
          <div className="mt-4 grid grid-cols-[130px_1fr] items-end gap-4">
            <SelectField label="Phone Number*" placeholder="" compact />
            <div className="pt-[18px]">
              <input
                className="h-[46px] w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 text-[10px] font-medium text-[#111827] outline-none focus:border-[#2E59D9]"
                placeholder=""
              />
            </div>
          </div>

          {/* OTP */}
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              className="h-[46px] whitespace-pre rounded-[8px] border border-[#2E59D9] bg-white px-6 text-[14px] font-semibold text-[#293B93]"
            >
              Send OTP
            </button>

            <div className="flex gap-3 w-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[46px] w-full rounded-[6px] border border-[#E5E7EB] bg-white"
                />
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-[14px] font-normal leading-[1.5] text-[#7A7A7A]">
            <span className="font-medium text-[#293B93]">Disclaimer:</span> By
            submitting this form, I acknowledge that I have read, understood,
            and agree to the Client Agreement. I give my consent for Naqdi to
            contact me for marketing purposes.
          </p>

          {/* Terms */}
          <label className="mt-4 flex items-center gap-3 text-[14px] font-medium text-[#7A7A7A]">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#D1D5DB]"
            />
            <span>
              By Becoming A Partner, You Agree To Our Partnership{" "}
              <span className="text-[#293B93] underline">
                Terms And Conditions
              </span>
            </span>
          </label>

          {/* Submit */}
          <button
            type="button"
            className="mt-8 py-4 w-full rounded-full bg-[#DCDCDC] text-[16px] font-medium text-[#868686]"
          >
            Become A Partner
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- bits ---------------- */

function Field({ label }) {
  return (
    <div>
      <div className="mb-1 text-[14px] font-normal text-[#868686]">{label}</div>
      <input className="h-[46px] w-full rounded-[8px] border border-[#E5E7EB] bg-white px-3 text-[14px] font-medium text-[#000] outline-none placeholder:text-[#9CA3AF] focus:border-[#2E59D9]" />
    </div>
  );
}

function SelectField({ label, placeholder, compact }) {
  return (
    <div>
      <div className="mb-1 text-[14px] font-normal text-[#868686]">{label}</div>
      <div className="relative">
        <input
          className={[
            "h-[46px] w-full rounded-[8px] border border-[#E5E7EB] bg-white pl-3 pr-9 text-[14px] font-medium text-[#000] outline-none placeholder:text-[#B6BCC8] focus:border-[#2E59D9]",
            compact ? "placeholder:text-transparent" : "",
          ].join(" ")}
          placeholder={placeholder}
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
