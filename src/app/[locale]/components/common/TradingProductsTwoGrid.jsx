"use client";

import React from "react";

export default function TradingProductsTwoGrid() {
  const items = [
    {
      title: "Copy Trading",
      desc: "Automatically follow and copy top-performing traders.",
      ctaPrimary: "Explore Copy Trading",
      ctaSecondary: "Create an account",
      image: "/ib/original-size.webp", // replace
      imageAlt: "Copy Trading mobile preview",
      reverseOnDesktop: false,
    },
    {
      title: "PAMM & MAM Accounts",
      desc: "Manage multiple client accounts with ease and transparency.",
      ctaPrimary: "Explore PAMM & MAM",
      ctaSecondary: "Create an account",
      image: "/ib/original.webp", // replace
      imageAlt: "PAMM & MAM mobile preview",
      reverseOnDesktop: true,
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {items.map((item, idx) => (
          <ProductRow key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

function ProductRow({
  title,
  desc,
  ctaPrimary,
  ctaSecondary,
  image,
  imageAlt,
  reverseOnDesktop,
}) {
  return (
    <div
      className={[
        "grid grid-cols-1 md:grid-cols-12 items-center gap-10",
        reverseOnDesktop ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : "",
      ].join(" ")}
    >
      {/* LEFT: Content (6/12) */}
      <div className="md:col-span-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0b0b]">
          {title}
        </h3>
        <p className="mt-3 text-[#333333] text-base sm:text-lg max-w-md">
          {desc}
        </p>

           <div className='flex flex-row items-start justify-baseline mt-10'>
          <button
  className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42]
             hover:from-[#293794] hover:to-[#000021]
             text-sm font-bold md:text-base xl:text-lg
             text-white px-8 py-3 rounded-full
             transition-all duration-300 cursor-pointer"
  onClick={() => {
    document
      .getElementById("register-form")
      ?.scrollIntoView({ behavior: "smooth" });

    setIsOpen(true);
  }}
>
  Register now
</button>
        </div>
      </div>

      {/* RIGHT: Image (6/12) */}
      <div className="md:col-span-6 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[420px]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </div>
  );
}
