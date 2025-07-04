const Broker = () => {
    return (
   <section className="relative text-white py-8 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cea679] to-[#956D42] z-0" />

      {/* Background Image at Bottom Center with Opacity */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-80">
        <img
          src="/ib/candle.webp"
          alt="Decorative candle"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-12 text-left items-center">
          {/* Left Column */}
          <div className="text-left md:text-right">
            <h3 className="text-2xl md:text-2xl xl:text-[40px] font-bold text-white mb-3">
              A Broker You Can <br /> Actually Trust
            </h3>
            <p className="text-base text-white/90">
              We’re not a fly-by-night operation. GTC is licensed and regulated in multiple respected jurisdictions. Here’s how we give you confidence to trade.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <ul className="text-sm md:text-base text-white/90 list-disc pl-5 space-y-5">
              <li>Licensed by the UAE’s SCA, Australia’s ASIC, the UK’s FCA, Mauritius’s FSC, and South Africa’s FSCA.</li>
              <li>Headquartered in Dubai with nearly 1 million global traders.</li>
              <li>World-class support with a real human touch.</li>
              <li>Customer-first culture where service is strategy.</li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/divider.svg" alt="Divider" className="mx-auto py-10 w-full max-w-md md:max-w-lg" />
        </div>

        <div className="text-center col-span-2 flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-center text-white leading-tight mb-5 sm:max-w-2xl xl:max-w-5xl mx-auto">
            Switch to a broker that doesn’t just say it, we prove it every day.
          </h2>
          <button className="bg-white text-[#6e4e35] hover:bg-[#f5f5f5] px-6 py-3 text-sm md:text-base xl:text-lg rounded-lg flex flex-row gap-4 items-center justify-center shadow transition-all duration-300">
            Start Earning
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="#B48755" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    )
}
export default Broker;