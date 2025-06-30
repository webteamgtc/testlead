const Broker = () => {
    return (
        <div className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42] text-white py-12 md:py-20 text-center relative overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 text-left items-center">
                    {/* Left Column */}
                    <div className="text-right">
                        <h3 className="text-lg md:text-2xl font-medium text-white mb-3">
                            A Broker You Can <br /> <span className="text-white font-medium">Actually Trust</span>
                        </h3>
                        <p className="text-sm text-right text-white/90 ">
                            We’re not a fly-by-night operation. GTC is licensed and regulated in multiple respected jurisdictions. Here’s how we give you confidence to trade.
                        </p>

                    </div>
                    <div>
                        <ul className="text-sm text-white/90 list-disc list-inside space-y-2">
                            <li>Licensed by the UAE’s SCA, Australia’s ASIC, the UK’s FCA, Mauritius’s FSC, and South Africa’s FSCA.</li>
                            <li>Headquartered in Dubai with nearly 1 million global traders.</li>
                            <li>World-class support with a real human touch.</li>
                            <li>Customer-first culture where service is strategy.</li>
                        </ul>
                    </div>
                    {/* Right Column */}

                </div>
                <div>
                    <img src="/divider.svg" alt="Broker Image" className="mx-auto py-16 w-full max-w-md md:max-w-lg" />
                </div>
                <div className="text-center col-span-2">
                    <h2 className="text-3xl md:text-6xl font-bold text-center text-white leading-tight mb-6">
                        Switch to a broker that doesn’t just <br /> say it, we prove it every day.
                    </h2>
                    <button className="mt-8 bg-white text-[#b57c50] hover:bg-[#f5f5f5] px-6 py-2 text-sm rounded-xl shadow transition-all duration-300">
                        Start Earning →
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Broker;