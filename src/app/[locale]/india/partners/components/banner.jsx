
"use client"
import React from "react";
import Image from "next/image";
import CustomButton from "@/app/components/common/CustomButton";

const HeroSection = ({setIsOpen}) => {
  const data = [
    {
      icon: (
        <svg
  width="41"
  height="41"
  viewBox="0 0 41 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_2308_72637)">
    <circle
      cx="20.3333"
      cy="19"
      r="15.75"
      stroke="white"
      strokeWidth="0.5"
      shapeRendering="crispEdges"
    />
  </g>
  <path
    d="M16.1875 18C15.2611 18 14.4705 17.6583 13.8156 16.975C13.1607 16.2917 12.8333 15.4667 12.8333 14.5C12.8333 13.5333 13.1607 12.7083 13.8156 12.025C14.4705 11.3417 15.2611 11 16.1875 11C17.1139 11 17.9045 11.3417 18.5594 12.025C19.2142 12.7083 19.5416 13.5333 19.5416 14.5C19.5416 15.4667 19.2142 16.2917 18.5594 16.975C17.9045 17.6583 17.1139 18 16.1875 18ZM16.1875 16C16.5868 16 16.9264 15.8543 17.2062 15.563C17.486 15.2717 17.6256 14.9173 17.625 14.5C17.6243 14.0827 17.4847 13.7287 17.2062 13.438C16.9276 13.1473 16.5881 13.0013 16.1875 13C15.7869 12.9987 15.4476 13.1447 15.1697 13.438C14.8918 13.7313 14.7519 14.0853 14.75 14.5C14.7481 14.9147 14.888 15.269 15.1697 15.563C15.4515 15.857 15.7907 16.0027 16.1875 16ZM24.8125 27C23.8861 27 23.0955 26.6583 22.4406 25.975C21.7857 25.2917 21.4583 24.4667 21.4583 23.5C21.4583 22.5333 21.7857 21.7083 22.4406 21.025C23.0955 20.3417 23.8861 20 24.8125 20C25.7389 20 26.5295 20.3417 27.1844 21.025C27.8392 21.7083 28.1666 22.5333 28.1666 23.5C28.1666 24.4667 27.8392 25.2917 27.1844 25.975C26.5295 26.6583 25.7389 27 24.8125 27ZM24.8125 25C25.2118 25 25.5514 24.8543 25.8312 24.563C26.111 24.2717 26.2506 23.9173 26.25 23.5C26.2493 23.0827 26.1097 22.7287 25.8312 22.438C25.5526 22.1473 25.2131 22.0013 24.8125 22C24.4119 21.9987 24.0726 22.1447 23.7947 22.438C23.5168 22.7313 23.3769 23.0853 23.375 23.5C23.3731 23.9147 23.513 24.269 23.7947 24.563C24.0765 24.857 24.4157 25.0027 24.8125 25ZM14.175 27L12.8333 25.6L26.825 11L28.1666 12.4L14.175 27Z"
    fill="white"
  />
  <defs>
    <filter
      id="filter0_d_2308_72637"
      x="0.333313"
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
        result="effect1_dropShadow_2308_72637"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2308_72637"
        result="shape"
      />
    </filter>
  </defs>
</svg>),
      title: "Up to 80% RevShare Paid On Demand"
    },
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
      title: "Become an Partners in Just a Few Clicks"
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
      icon: (
        <svg
  width="41"
  height="41"
  viewBox="0 0 41 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_2308_72654)">
    <circle
      cx="20.3333"
      cy="19"
      r="15.75"
      stroke="white"
      strokeWidth="0.5"
      shapeRendering="crispEdges"
    />
  </g>
  <g clipPath="url(#clip0_2308_72654)">
    <path
      d="M20.7717 12.8688L22.3992 15.8178C22.4706 15.9473 22.5904 16.0398 22.7287 16.0721L25.8748 16.8032C26.2537 16.8914 26.4035 17.3796 26.1454 17.6876L24.0047 20.2414C23.9103 20.3538 23.8649 20.5027 23.8789 20.6527L24.1959 24.0538C24.2343 24.4635 23.8424 24.7656 23.487 24.6L20.5365 23.229C20.4067 23.1688 20.259 23.1688 20.1292 23.229L17.1787 24.6C16.8232 24.7651 16.4313 24.4635 16.4698 24.0538L16.7868 20.6527C16.8008 20.5032 16.7553 20.3538 16.661 20.2414L14.5203 17.6876C14.2622 17.3801 14.412 16.8914 14.7909 16.8032L17.937 16.0721C18.0753 16.0398 18.1951 15.9479 18.2665 15.8178L19.894 12.8688C20.0902 12.5135 20.574 12.5135 20.7702 12.8688H20.7717Z"
      fill="white"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.3333 7.70972V9.96778"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.3333 28.0323V30.2904"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.5753 9.22205L24.5269 11.178"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1398 26.8221L15.0914 28.778"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.4129 13.3549L27.5966 14.4839"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.07 23.5161L11.2538 24.6451"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.4129 24.6451L27.5966 23.5161"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.07 14.4839L11.2538 13.3549"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.5753 28.778L24.5269 26.8221"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1398 11.178L15.0914 9.22205"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.8172 19H28.7204"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9462 19H9.84945"
      stroke="white"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <filter
      id="filter0_d_2308_72654"
      x="0.333313"
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
        result="effect1_dropShadow_2308_72654"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2308_72654"
        result="shape"
      />
    </filter>
    <clipPath id="clip0_2308_72654">
      <rect
        width="21.6667"
        height="23.3333"
        fill="white"
        transform="translate(9.49996 7.33337)"
      />
    </clipPath>
  </defs>
</svg>
      ),
      title: "Your Traders Get a Tradable Bonus"
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
    {
      icon: (<svg
  width="41"
  height="41"
  viewBox="0 0 41 41"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_2308_72665)">
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
    d="M18.75 19.3688L17.1312 17.75L16.25 18.6312L18.75 21.1312L23.75 16.1312L22.8688 15.25L18.75 19.3688Z"
    fill="white"
  />
  <path
    d="M20 27.75L16.14 25.6919C15.0395 25.1066 14.1192 24.2325 13.4779 23.1637C12.8366 22.0948 12.4985 20.8715 12.5 19.625V11.5C12.5 11.1685 12.6317 10.8505 12.8661 10.6161C13.1005 10.3817 13.4185 10.25 13.75 10.25H26.25C26.5815 10.25 26.8995 10.3817 27.1339 10.6161C27.3683 10.8505 27.5 11.1685 27.5 11.5V19.625C27.5015 20.8715 27.1634 22.0948 26.5221 23.1637C25.8808 24.2325 24.9605 25.1066 23.86 25.6919L20 27.75ZM13.75 11.5V19.625C13.7493 20.6448 14.0262 21.6456 14.5509 22.52C15.0757 23.3945 15.8285 24.1096 16.7288 24.5887L20 26.3331L23.2713 24.5894C24.1716 24.1102 24.9245 23.3949 25.4492 22.5204C25.974 21.6458 26.2508 20.6449 26.25 19.625V11.5H13.75Z"
    fill="white"
  />
  <defs>
    <filter
      id="filter0_d_2308_72665"
      x="-2.08616e-07"
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
        result="effect1_dropShadow_2308_72665"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2308_72665"
        result="shape"
      />
    </filter>
  </defs>
</svg>
),
      title: "Multi-Regulated Brokerage: SCA, FSC"
    }
  ]
  return (
    <section className="bg-gradient-to-r from-[#00062a] to-[#000021] text-[#E5E5EA] py-8 md:py-28 relative overflow-hidden">

  {/* Desktop Background Image Only */}
  <div className="hidden md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
    <Image
      src="/ib/banner-main.webp"
      alt="Hero BG"
      fill
      className="object-cover object-right 3xl:object-contain"
      priority
    />
  </div>

     


      <div className="container">
        <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative">
          {/* Left Column */}
          <div className="text-center md:text-left">
           <h3 className="text-xl md:text-3xl font-light w-60 md:w-full mx-auto">
              India’s Top Partners Now Earn Up to
            </h3>
                  <h1 className="text-3xl md:text-[73px] font-bold text-secondary leading-tight">
        <span className="text-6xl md:text-[88px]">80% </span> 
        <br className="block md:hidden" />
         RevShare
      </h1>
                  <h3 className="text-xl md:text-3xl mb-6 font-light leadging-none">
              with GTC
            </h3>
            <p className="text-sm md:text-base mb-6 leading-relaxed max-w-xl">
              Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.
            </p>
            <div className="flex flex-row justify-center md:justify-start items-center gap-4 pb-8 md:pb-20">
              <CustomButton
                        text="Get 80% RevShare"
                        bgColor="bg-white hover:bg-[#b2b2c2]"
                        textColor="text-[#1F2937]"
                        strokeColor="#000032"
                        onClick={() => setIsOpen(true)}
                      />
            </div>
        
          </div>

        </div>

        {/* Bottom Feature Bar */}
        <div className="relative z-50 bg-gradient-to-b from-[#293794af] to-[#000021ab] mt-0 py-5 px-4 md:px-10 rounded-[16px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-sm text-center text-white/90 gap-6 md:gap-0"

          style={{
            boxShadow: "1px 6px 16px 0px #00000080",

            backdropFilter: "blur(8px)"
          }}>
          {data?.map((item, idx) => (
            <div key={idx} className="px-2 flex flex-col gap-2 items-center justify-center">
           <p>{item?.icon}</p>
              <span className="block text-xs xl:text-base w-40 sm:w-40 xl:w-48 mx-auto line-clamp-2">{item?.title}</span>
            </div>
          ))}
        </div>
      </div>

    </section >
   );
};

export default HeroSection;