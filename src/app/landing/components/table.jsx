'use client';

const ComparisonTable = () => {
  return (
    <section className="bg-[#f9f9fc] py-16 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#000032] mb-10 max-w-3xl mx-auto leading-tight">
          Here’s what your traders will get when you refer them to GTC
        </h2>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e0e4f6]">
          <table className="w-full text-sm md:text-base text-[#1e2c54]">
            <thead>
              <tr className="bg-[#f1f4fb] text-left font-semibold text-[#1e2c54]">
                <th className="py-4 px-5">Feature</th>
                <th className="py-4 px-5">Your Broker</th>
                <th className="py-4 px-5">
                  <img src="/logo-blue.svg" alt="GTC Logo" className="h-8" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Average EURUSD Spread', '3 pips', '0 pips'],
                ['Leverage', '1:500', '1:2000'],
                ['Withdrawal Time', '24 hours', 'Instant – 10 hours max'],
                ['Scalping Rule', '3 minutes', '1 minute'],
                ['Slippage During News', 'Increased', 'Unchanged'],
                ['Support Quality', 'Scripted replies', 'Real human care'],
                [
                  'Loyalty Rewards',
                  <span className="text-red-500 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Scripted replies
                  </span>,
                  <span className="text-green-600 flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GTC VIP + Exclusive Bonus
                  </span>,
                ],
              ].map(([feature, broker, gtc], idx) => (
                <tr key={idx} className="border-t border-[#e0e4f6]">
                  <td className="py-4 px-5 font-medium text-left bg-gray-100">{feature}</td>
                  <td className="py-4 px-5 text-left">{broker}</td>
                  <td className="py-4 px-5 text-left">{gtc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-10 bg-[#000032] text-white text-sm px-6 py-3 rounded-xl hover:bg-[#091c45] transition">
          Refer Your Traders
        </button>
      </div>
    </section>
  );
};

export default ComparisonTable;
