"use client";

import { useMemo, useState } from "react";

export default function IbEarningsCard() {
  const steps = useMemo(() => [5, 10, 15, 100, 200, 300], []);
  const [value, setValue] = useState(5);

  // demo earning curve (you can replace with your real logic)
  const income = useMemo(() => {
    // 5 -> 7500, 300 -> ~450k (nice curve)
    const minX = 5;
    const maxX = 300;
    const t = Math.max(0, Math.min(1, (value - minX) / (maxX - minX)));
    const eased = Math.pow(t, 0.72);
    const minY = 7500;
    const maxY = 450000;
    return Math.round(minY + (maxY - minY) * eased);
  }, [value]);

  const min = steps[0];
  const max = steps[steps.length - 1];
  const percent = ((value - min) / (max - min)) * 100;

  const formatMoney = (n) => {
    if (n >= 1000) return `$${n.toLocaleString("en-US")}`;
    return `$${n}`;
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto container">
        <div
          className="rounded-[22px] bg-white "
          style={{ boxShadow: "0px 0px 40px 0px #00000026" }}
        >
          <div className="px-10 py-10 md:px-14 md:py-12">
            {/* Top */}
            <p className="text-center text-[20px] font-semibold tracking-[0.14em] text-[#293B93]">
              INTRODUCING BROKERS
            </p>

            <h2 className="mt-4 text-center text-[40px] font-extrabold leading-[1.15] text-[#111827] md:text-[28px]">
              Partner with GTCFX.{" "}
              <span className="text-[#B78855]">Connect Clients.</span>
              <br />
              Grow Your Income!
            </h2>

            <p className="mx-auto mt-5 max-w-5xl text-center text-[16px] font-normal leading-[1.6] text-[#000]">
              Drag the slider to see what you could potentially earn (based on
              the performance of our top Partners)
            </p>

            {/* Bullets */}
            <div className="mx-auto mt-4 max-w-5xl space-y-2 text-center">
              <p className="text-[16px] font-medium text-[#000]">
                • Partner with us and share in the success! Up to 60% of our
                revenue from each active trader you bring onboard.
              </p>
              <p className="text-[16px] font-medium text-[#000]">
                • Your earning potential grows with every referral.
              </p>
            </div>

            {/* Middle row */}
            <div className="mt-9 grid items-center gap-6 md:grid-cols-[160px_1fr_160px]">
              {/* Left stat */}
              <div className="text-center">
                <div className="text-[42px] font-extrabold leading-none text-[#000]">
                  5
                </div>
                <div className="mt-1 text-[16px] font-medium text-[#000]">
                  Total accumulated clients
                </div>
              </div>

              {/* Slider */}
              <div className="relative">
                <div className="mx-auto w-full max-w-[520px]">
                  <div className="relative h-[28px]">
                    {/* Track */}
                    <div className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#E5E7EB]" />
                    <div
                      className="absolute left-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#2D3B8F]"
                      style={{ width: `${percent}%` }}
                    />

                    {/* Dots */}
                    {steps.map((s) => {
                      const p = ((s - min) / (max - min)) * 100;
                      const active = s <= value;

                      return (
                        <div
                          key={s}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                          style={{ left: `${p}%` }}
                        >
                          <div
                            className={`h-[8px] w-[8px] rounded-full ${
                              active ? "bg-[#2D3B8F]" : "bg-[#D1D5DB]"
                            }`}
                          />
                        </div>
                      );
                    })}

                    {/* Range input */}
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={value}
                      step={1}
                      onChange={(e) => setValue(Number(e.target.value))}
                      className="absolute left-0 top-0 h-[28px] w-full appearance-none bg-transparent"
                    />

                    {/* Thumb */}
                    <style jsx>{`
                      input[type="range"] {
                        -webkit-appearance: none;
                        appearance: none;
                      }
                      input[type="range"]::-webkit-slider-runnable-track {
                        height: 28px;
                        background: transparent;
                      }
                      input[type="range"]::-moz-range-track {
                        height: 28px;
                        background: transparent;
                      }
                      input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 18px;
                        height: 18px;
                        border-radius: 9999px;
                        background: #2d3b8f;
                        border: 4px solid #ffffff;
                        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
                        cursor: pointer;
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                      }
                      input[type="range"]::-moz-range-thumb {
                        width: 18px;
                        height: 18px;
                        border-radius: 9999px;
                        background: #2d3b8f;
                        border: 4px solid #ffffff;
                        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
                        cursor: pointer;
                      }
                    `}</style>
                  </div>

                  {/* Labels */}
                  <div className="mt-2 flex items-center justify-between px-1 text-[14px] font-semibold text-[#767676]">
                    {steps.map((s) => (
                      <span key={s} className="min-w-[22px] text-center">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right stat */}
              <div className="text-center">
                <div className="text-[42px] font-extrabold leading-none text-[#000]">
                  {formatMoney(income)}
                </div>
                <div className="mt-1 text-[16px] font-medium text-[#000]">
                  Your income per month
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#293B93] px-16 py-[14px] text-[16px] font-semibold text-white hover:brightness-110 active:translate-y-[1px]"
              >
                Become An IB
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
