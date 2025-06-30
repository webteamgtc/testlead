// import React from 'react';

// const BannerMain = () => {
//   return (
//     <section className="bg-gradient-to-br from-[#061a54] to-[#0b2c7a] text-white py-10 px-4 md:px-16 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">

//         {/* Left Content */}
//         <div>
//           <h2 className="text-xl text-[#E5E5EA] font-[300] md:text-3xl mb-2">India's Top IBs Now Earn Up to</h2>
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
//             80% REVSHARE
//           </h1>
//           <h2 className="text-xl text-[#E5E5EA] font-[300] md:text-3xl mb-4">with GTC</h2>

//           <p className="text-base text-[#E5E5EA] md:text-lg mb-6 max-w-md leading-relaxed">
//             Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.
//           </p>
//           <button className="bg-white text-[#0b2c7a] font-medium px-6 py-2 rounded-[12px] shadow-md hover:bg-gray-200 transition">
//             {"Get 80% Revshare "}
//           </button>

//           {/* Bottom Features */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 text-sm text-center">
//             <div className="bg-white bg-opacity-10 p-3 rounded">
//               Up to 80% RevShare Paid On Demand
//             </div>
//             <div className="bg-white bg-opacity-10 p-3 rounded">
//               Become an IB in Just a Few Clicks
//             </div>
//             <div className="bg-white bg-opacity-10 p-3 rounded">
//               Dynamic Leverage Up to 1:2000
//             </div>
//             <div className="bg-white bg-opacity-10 p-3 rounded">
//               Your Traders Get a Tradable Bonus
//             </div>
//             <div className="bg-white bg-opacity-10 p-3 rounded">
//               Full Marketing & Event Support Provided
//             </div>
//             <div className="bg-white bg-opacity-10 p-3 rounded">
//               Multi-Regulated Brokerage: SCA, FCA & ASIC
//             </div>
//           </div>
//         </div>

//         {/* Right Content - Mobile Form Image */}
//         <div className="flex justify-center relative">
//           <div className="relative w-full max-w-xs">
//             <img
//               src="/images/mobile-mockup.png" // replace with actual path
//               alt="Mobile Registration"
//               className="w-full"
//             />
//             {/* Optional decorations/backgrounds could go here */}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BannerMain;


import React from "react";

const HeroSection = () => {
  const data = [
    {
      icon: "/icon1.svg",
      title: "Up to 80% RevShare Paid On Demand"
    },
    {
      icon: "/icon2.svg",
      title: "Become an IB in Just a Few Clicks"
    },
    {
      icon: "/icon3.svg",
      title: "Dynamic Leverage Up to 1:2000"
    },
    {
      icon: "/icon4.svg",
      title: "Your Traders Get a Tradable Bonus"
    },
    {
      icon: "/icon5.svg",
      title: "Full Marketing & Event Support Provided"
    },
    {
      icon: "/icon6.svg",
      title: "Multi-Regulated Brokerage: SCA, FCA & ASIC"
    }
  ]
  return (
    <section className="bg-gradient-to-b from-[#0B0A2F] to-[#101243] text-[#E5E5EA] py-16 relative overflow-hidden">
      <div className=" container">
        <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative">
          {/* Left Column */}
          <div>
            <h1 className="text-xl md:text-2xl mb-6">
              India’s Top IBs Now Earn Up to <br />
              <span className="text-[#E6B34A] text-2xl md:text-4xl font-bold">80% REVSHARE</span>
              <br />
              with GTC
            </h1>

            <p className="text-sm md:text-base mb-8 leading-relaxed max-w-md">
              Join a multi-regulated broker trusted worldwide. Your traders get a tradable bonus just for switching to us, plus you earn up to 80% RevShare with fast payouts, multilingual support, and no setup costs.
            </p>

            <button className="bg-white text-[#1F2937] px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              Get 80% Revshare →
            </button>
          </div>

          {/* Right Column (Phone UI) */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg px-6 py-8 w-[320px] text-[#1F2937]">
              <img src="/logo.png" alt="GTC" className="w-24 mx-auto mb-4" />
              <h2 className="text-center font-semibold mb-1 text-sm">Register Now!</h2>
              <p className="text-center text-xs mb-4">
                India’s Top IBs Now Earn Up to 80% RevShare with GTC
              </p>

              <label className="text-xs block mb-1">First Name</label>
              <input
                type="text"
                placeholder="Ashok"
                className="w-full px-3 py-2 rounded-md border border-gray-300 mb-4 text-sm"
              />

              <label className="text-xs block mb-1">Phone</label>
              <div className="flex mb-4">
                <select className="text-sm border border-gray-300 rounded-l-md px-2 py-2 bg-gray-100">
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md text-sm"
                />
              </div>

              <button className="bg-[#E6B34A] hover:bg-[#d8a03d] text-[#1F2937] font-semibold px-4 py-2 w-full rounded-md text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="bg-gradient-to-r from-[#293794] to-[#000021] mt-14 py-2 px-4 md:px-10 rounded-[16px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-sm text-center text-white/90 gap-4"

          style={{
            boxShadow: "1px 6px 16px 0px #00000080",

            backdropFilter: "blur(8px)"
          }}>
          {data?.map((item, idx) => (
            <div key={idx} className="px-2">
              <img src={item?.icon} alt="Feature Icon" className="mx-auto mb-1 w-10 h-10" />
              <span className="block">{item?.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
