import Image from "next/image";
const Paymore = () => {
    return (
           <section className="bg-gradient-to-b from-[#0B0A2F] to-[#101243] text-[#E5E5EA] py-16 relative overflow-hidden text-center">
             <div className="absolute top-0 h-[600px] w-full opacity-50 pointer-events-none">
           <Image
             src="/ib/pattern.webp"
             alt="Decorative background"
             fill
             className="object-cover"
           />
         </div>
            <div className="relative container mx-auto">
                <div className="ib-background-img ">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-lg md:text-2xl font-[200] mb-">An IB Programme That</h2>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#D9C3AA] mb-6">
                            Pays More Than Just Commission
                        </h1>
                        <p className="text-sm md:text-base text-white font-[200] mb-10 max-w-3xl mx-auto leading-relaxed">
                            Welcome to a partnership built for performance. At GTC, we don’t just give you up to 80% RevShare; we give you the tools to grow your business.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                            {[
                                {
                                    icon: "/star-icon.svg", // replace with real icons if needed
                                    title: "Earn Up to 80% RevShare"
                                },
                                {
                                    icon: "/star-icon.svg", // replace with real icons if needed
                                    title: "Tradeable Bonus For Your Traders"
                                },
                                {
                                    icon: "/star-icon.svg", // replace with real icons if needed
                                    title: "Events & Marketing Tools"
                                },
                                {
                                    icon: "/star-icon.svg", // replace with real icons if needed
                                    title: "Instant Commission Payouts"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-[#1F2937] rounded-lg py-6 px-4 flex flex-col items-center shadow-md"
                                >
                                    <img className="text-3xl mb-3" src={item.icon}/>
                                    <p className="font-medium text-center">{item.title}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm md:text-base text-white mb-10 max-w-xl mx-auto">
                            From real trader bonuses to marketing support and instant payouts, this is the IB programme serious partners are switching to.
                        </p>

                        <button className="bg-gradient-to-r  from-[#E1CFBB] to-[#956D42] text-sm text-white  px-6 py-2 rounded-xl transition-all duration-300">
                            Partner with GTC
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Paymore;