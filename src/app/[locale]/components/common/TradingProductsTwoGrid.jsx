"use client";

import React from "react";

export default function TradingProductsTwoGrid() {
  const items = [
    {
      title: "Copy Trading",
      desc: "Automatically follow and copy top-performing traders.",
      ctaPrimary: "Explore Copy Trading",
      ctaSecondary: "Create an account",
      image: "/ib/image3.png", // replace
      imageAlt: "Copy Trading mobile preview",
      reverseOnDesktop: false,
    },
    {
      title: "PAMM & MAM Accounts",
      desc: "Manage multiple client accounts with ease and transparency.",
      ctaPrimary: "Explore PAMM & MAM",
      ctaSecondary: "Create an account",
      image: "/ib/image4.png", // replace
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
        "grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20",
        reverseOnDesktop
          ? "md:[&>div.content]:order-2 md:[&>div.image]:order-1"
          : "",
      ].join(" ")}
    >
      {/* IMAGE — TOP on mobile, RIGHT on desktop */}
      <div className="image md:col-span-6 flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative w-full max-w-[200px] md:max-w-[300px]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      {/* CONTENT — BELOW image on mobile, LEFT on desktop */}
      <div className="content text-center md:text-left md:col-span-6 order-2 md:order-1">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0b0b]">
          {title}
        </h3>

        <p className="mt-3 text-[#333333] text-base sm:text-lg max-w-md">
          {desc}
        </p>

        <div className="flex flex-row items-start justify-center md:justify-start mt-10">
          <button
            className="bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]
                       hover:from-[#293794] hover:to-[#000021]
                       text-sm font-bold md:text-base xl:text-lg
                       text-white px-8 py-3 rounded-full
                       transition-all duration-300 cursor-pointer"
            onClick={() => {
              document
                .getElementById('register-form')
                ?.scrollIntoView({ behavior: 'smooth' });

              // setIsOpen(true);
            }}
          >
            Register now
          </button>
        </div>
      </div>
    </div>
  );
}

