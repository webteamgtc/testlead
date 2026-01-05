
"use client"
import React from "react";
import Image from "next/image";
import CustomButton from "@/app/components/common/CustomButton";
import CommonMainForm from "@/app/[locale]/components/MainForm";
import SliderModal from "./SliderModal";
import SlidePanelExample from "./SlidePanel";
const HeroSection = ({setIsOpen}) => {
  const data = [
  
    {
      icon: (<svg
  width="42"
  height="41"
  viewBox="0 0 42 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_2308_72643)">
    <circle
      cx="20.6667"
      cy="19"
      r="15.75"
      stroke="white"
      strokeWidth="0.5"
      shapeRendering="crispEdges"
    />
  </g>
  <path
    d="M15.5867 13.956L14.1167 12.473M23.4257 13.956L24.8957 12.473M14.1157 23.353L15.5857 21.869M19.5057 11.979V10M13.6257 17.913H11.6667M25.5417 23.836L29.3557 22.33C29.4477 22.2932 29.5266 22.2296 29.5821 22.1475C29.6377 22.0655 29.6674 21.9686 29.6674 21.8695C29.6674 21.7704 29.6377 21.6735 29.5821 21.5915C29.5266 21.5094 29.4477 21.4458 29.3557 21.409L20.1907 17.794C20.1014 17.7595 20.0041 17.7517 19.9105 17.7717C19.8169 17.7916 19.7312 17.8384 19.6638 17.9063C19.5964 17.9742 19.5503 18.0603 19.5311 18.154C19.5119 18.2478 19.5204 18.345 19.5557 18.434L23.1377 27.685C23.2997 28.105 23.8877 28.105 24.0497 27.685L25.5417 23.836Z"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <defs>
    <filter
      id="filter0_d_2308_72643"
      x="0.666656"
      y="0.333333"
      width="40.5333"
      height="40.5333"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.266667" dy="1.6" />
      <feGaussianBlur stdDeviation="2.13333" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_2308_72643"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2308_72643"
        result="shape"
      />
    </filter>
  </defs>
</svg>
),
      title: "Become a Partner in Just a Few Clicks"
    },
    {
      icon: (<svg
  width="41"
  height="41"
  viewBox="0 0 41 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_2308_72649)">
    <circle
      cx="20"
      cy="19"
      r="15.75"
      stroke="white"
      strokeWidth="0.5"
      shapeRendering="crispEdges"
    />
  </g>
  <path
    d="M21.2282 10.4727L21.0342 9.74823L21.7585 9.55417L21.9527 10.2785L21.2282 10.4727ZM14.2785 24.0099C14.0714 24.3686 13.6127 24.4915 13.254 24.2844C12.8953 24.0773 12.7724 23.6186 12.9795 23.2599L14.2785 24.0099ZM16.8571 11.6437L16.663 10.9192L21.0342 9.74823L21.2282 10.4727L21.4223 11.1971L17.0512 12.3681L16.8571 11.6437ZM21.2282 10.4727L21.9527 10.2785L23.1241 14.6495L22.3997 14.8437L21.6753 15.0378L20.5038 10.6668L21.2282 10.4727ZM21.2282 10.4727L21.8778 10.8477L14.2785 24.0099L13.629 23.6349L12.9795 23.2599L20.5787 10.0977L21.2282 10.4727Z"
    fill="white"
  />
  <path
    d="M18.7717 27.5275L18.0473 27.7216L18.2414 28.446L18.9658 28.2519L18.7717 27.5275ZM23.0208 21.6678C23.2279 21.309 23.105 20.8503 22.7463 20.6432C22.3876 20.4361 21.9289 20.559 21.7218 20.9178L23.0208 21.6678ZM17.6002 23.1565L16.8758 23.3506L18.0473 27.7216L18.7717 27.5275L19.4961 27.3333L18.3247 22.9623L17.6002 23.1565ZM18.7717 27.5275L18.9658 28.2519L23.3369 27.081L23.1428 26.3565L22.9487 25.632L18.5776 26.803L18.7717 27.5275ZM18.7717 27.5275L19.4212 27.9025L23.0208 21.6678L22.3713 21.2928L21.7218 20.9178L18.1222 27.1525L18.7717 27.5275Z"
    fill="white"
  />
  <defs>
    <filter
      id="filter0_d_2308_72649"
      x="0"
      y="0.333333"
      width="40.5333"
      height="40.5333"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.266667" dy="1.6" />
      <feGaussianBlur stdDeviation="2.13333" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_2308_72649"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2308_72649"
        result="shape"
      />
    </filter>
  </defs>
</svg>
),
      title: "Dynamic Leverage Up to 1:2000"
    },
    {
      icon: (<svg
  width="42"
  height="41"
  viewBox="0 0 42 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_2308_72659)">
    <circle
      cx="20.6666"
      cy="19"
      r="15.75"
      stroke="white"
      strokeWidth="0.5"
      shapeRendering="crispEdges"
    />
  </g>
  <g clipPath="url(#clip0_2308_72659)">
    <path
      d="M30.0993 16.9435C30.677 16.7542 31.2548 16.565 31.8323 16.3759C32.1516 16.2713 31.9716 15.8251 31.6519 15.9297C31.0741 16.119 30.4963 16.3082 29.9188 16.4972C29.5995 16.6018 29.7795 17.0481 30.0993 16.9435Z"
      fill="white"
    />
    <path
      d="M27.3207 13.7943C27.6089 13.3056 27.897 12.8172 28.1852 12.3285C28.3447 12.058 27.8657 11.8583 27.7067 12.128C27.4185 12.6166 27.1304 13.1051 26.8422 13.5937C26.6827 13.8643 27.1617 14.0639 27.3207 13.7943Z"
      fill="white"
    />
    <path
      d="M29.8183 20.9468C30.3881 21.1545 30.958 21.362 31.5279 21.5696C31.842 21.684 32.0666 21.2542 31.7508 21.1392C31.181 20.9315 30.6111 20.7241 30.0412 20.5164C29.7271 20.402 29.5025 20.8318 29.8183 20.9468Z"
      fill="white"
    />
    <path
      d="M11.0859 23.2489C11.1867 23.4981 11.2889 23.7468 11.3884 23.9965C11.5403 24.3783 11.3499 24.7881 10.923 24.9361C10.5091 25.0715 10.059 24.8727 9.9042 24.5074C9.82988 24.3321 9.76149 24.1546 9.69038 23.9785C9.47778 23.453 9.26198 22.9288 9.0526 22.4024C8.92297 22.0765 9.03581 21.7189 9.36667 21.5286C9.74569 21.3107 10.2731 21.4353 10.4886 21.7898C10.5862 21.9504 10.6393 22.1445 10.7084 22.3149L11.0862 23.2484L11.0859 23.2489Z"
      fill="white"
    />
    <path
      d="M27.6277 23.6094C27.6244 23.969 27.362 24.282 26.9946 24.4086C26.4588 24.5841 25.9304 24.3033 25.7432 23.8431C25.6637 23.6472 25.5847 23.4513 25.5052 23.2551L21.6879 13.8205C21.6699 13.7761 21.6514 13.7317 21.6338 13.6873C21.5323 13.4272 21.562 13.14 21.7331 12.9081C22.1689 12.3175 23.1679 12.4472 23.44 13.096C23.5 13.239 23.5563 13.3834 23.6143 13.5271L27.4612 23.035C27.5368 23.2216 27.6291 23.4071 27.6277 23.6096V23.6094Z"
      fill="white"
    />
    <path
      d="M25.223 23.9439C24.8825 23.9477 24.5415 23.9512 24.201 23.9545C23.1002 23.9661 22 23.9776 20.8993 23.989C19.5736 24.0027 18.2474 24.0165 16.9217 24.0303C15.7753 24.0421 14.6289 24.0543 13.4825 24.066C12.9765 24.0712 12.4617 24.0541 11.9548 24.076C11.9501 24.0496 11.9442 24.023 11.9375 23.9963C11.8832 23.7829 11.78 23.5754 11.697 23.3702C11.4756 22.8229 11.2637 22.2716 11.0323 21.7276C11.0012 21.6545 10.963 21.5852 10.9183 21.5206C11.2276 21.2925 11.5368 21.0644 11.8467 20.8363C12.6978 20.2086 13.5491 19.5809 14.4002 18.9534C15.4257 18.1973 16.4514 17.4412 17.4768 16.6851C18.3635 16.0314 19.2504 15.3777 20.137 14.7238C20.4837 14.4684 20.8348 14.2165 21.18 13.9589C21.2136 14.0422 21.2491 14.1246 21.2827 14.2076L25.1899 23.8646C25.2005 23.891 25.2116 23.9175 25.223 23.9439Z"
      fill="white"
    />
    <path
      d="M19.7402 24.475C19.742 24.6025 19.7434 24.73 19.7452 24.8577C19.7481 25.1049 19.7422 25.3401 19.5847 25.5571C19.3923 25.8223 19.0694 25.9645 18.7234 25.9723C18.5941 25.9754 18.4644 25.9751 18.3348 25.9763C17.7659 25.9823 17.1968 25.988 16.6279 25.9943C16.1765 25.9989 15.7247 26.05 15.362 25.7501C15.1052 25.538 15.0457 25.2566 15.0417 24.9585C15.04 24.8137 15.0378 24.6689 15.036 24.5241C15.5237 24.5187 16.0111 24.5138 16.4988 24.5087C17.5795 24.4976 18.66 24.4863 19.7405 24.4752L19.7402 24.475Z"
      fill="white"
    />
  </g>
  <defs>
    <filter
      id="filter0_d_2308_72659"
      x="0.666626"
      y="0.333333"
      width="40.5333"
      height="40.5333"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.266667" dy="1.6" />
      <feGaussianBlur stdDeviation="2.13333" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_2308_72659"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2308_72659"
        result="shape"
      />
    </filter>
    <clipPath id="clip0_2308_72659">
      <rect width="23" height="14" fill="white" transform="translate(9 12)" />
    </clipPath>
  </defs>
</svg>
),
      title: "Full Marketing & Event Support Provided"
    },
   
  ]
  return (
    <section className="bg-[url(/ib/banner.webp)] bg-cover bg-no-repeat bg-right text-[#E5E5EA] py-8 md:py-16 relative overflow-hidden">


     


      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] z-10 relative">
          {/* Left Column */}
          <div className="text-center md:text-left">
          
                  <h1 className="text-3xl md:text-[70px] font-bold text-secondary leading-tight pb-5">
      
         Grow Your Client Network. Earn More. Partner Stronger.
      </h1>
           
            <p className="text-sm md:text-xl md:mb-6 leading-relaxed max-w-2xl">
              Partner with the GTCFX multi-regulated company, our partnership program offers competitive rebates, fast payouts, and dedicated partner support
            </p>
    
          </div>
          <div className="md:rounded-[10px] p-4 shadow-[0_22px_55px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#24358ba4] via-[#242c75] to-[#141b43b0]">
            <CommonMainForm />
          </div>


        </div>

      {/* Bottom Feature Bar */}
<div
  className="relative z-50 bg-gradient-to-b from-[#293794af] to-[#000021ab]
             py-5 px-4 md:px-10 rounded-[16px]
             grid grid-cols-1 md:grid-cols-3
             text-center text-white/90
             mt-10"
  style={{
    boxShadow: "1px 6px 16px 0px #00000080",
    backdropFilter: "blur(8px)",
  }}
>
  {/* Item 1 */}
  <div className="flex flex-col items-center justify-center gap-1 relative">
    <span className="text-2xl font-semibold text-secondary">+28,000</span>
    <span className="text-xs xl:text-sm opacity-90">Partners</span>

    {/* divider (desktop only) */}
    <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/30" />
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center justify-center gap-1 relative">
    <span className="text-2xl font-semibold text-secondary">$6 Million</span>
    <span className="text-xs xl:text-sm opacity-90">Paid Per Month</span>

    {/* divider (desktop only) */}
    <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/30" />
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center justify-center gap-1">
    <span className="text-2xl font-semibold text-secondary">$450 Billion</span>
    <span className="text-xs xl:text-sm opacity-90">Monthly Trades</span>
  </div>
</div>

      </div>

    </section >
   );
};

export default HeroSection;