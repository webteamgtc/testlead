// import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ComparisonTable = () => {
    return (
        <section className="bg-[#f9f9fc] md:py-20 p-12 table-bg text-center">
            <div className=" container mx-auto">
                <div className="max-w-4xl mx-auto ">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#000032] inline-block pb-2">
                        Here’s what your traders will get when you refer them to GTC
                    </h2>

                    <div className="overflow-x-auto mt-6 mx-auto"
                        style={{
                            boxShadow: "1px 6px 16px 0px #0000001A"
                        }}
                    >
                        <table className="w-full text-sm md:text-base bg-white shadow border border-[#dbe1f4] rounded-lg">
                            <thead>
                                <tr className="bg-[#f1f4fb] text-[#1e2c54] font-semibold">
                                    <th className="py-4 px-3 border-b border-[#dbe1f4] text-left">Feature</th>
                                    <th className="py-4 px-3 border-b border-[#dbe1f4] text-left">Your Broker</th>
                                    <th className="py-4 px-3 border-b border-[#dbe1f4] text-left">
                                        <img src="/logo-blue.svg" alt="GTC Logo" className="h-5 inline-block" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-[#1e2c54]">
                                {[
                                    ['Average EURUSD Spread', '3 pips', '0 pips'],
                                    ['Leverage', '1:500', '1:2000'],
                                    ['Withdrawal Time', '24 hours', 'Instant – 10 hours max'],
                                    ['Scalping Rule', '3 minutes', '1 minute'],
                                    ['Slippage During News', 'Increased', 'Unchanged'],
                                    ['Support Quality', 'Scripted replies', 'Real human care'],
                                    ['Loyalty Rewards',
                                        <>
                                            <span className="text-red-500 flex items-center gap-1">
                                                Scripted replies
                                            </span>
                                        </>,
                                        <>
                                            <span className="text-green-600 flex items-center gap-1">
                                                GTC VIP + Exclusive Bonus
                                            </span>
                                        </>
                                    ]
                                ].map(([feature, broker, gtc], idx) => (
                                    <tr key={idx} className="border-t border-[#dbe1f4]">
                                        <td className="py-3 px-3 text-left">{feature}</td>
                                        <td className="py-3 px-3 text-left">{broker}</td>
                                        <td className="py-3 px-3 text-left">{gtc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <button className="mt-8 bg-[#000032] text-white font-[200] text-sm px-6 py-2 rounded-xl hover:bg-[#09225f] transition">
                        Refer Your Traders
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
