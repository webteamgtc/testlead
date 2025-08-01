'use client';
import CustomButton from "@/app/components/common/CustomButton";

const ComparisonTable = ({setIsOpen,data,title}) => {
  return (
        <section className="relative text-white py-8 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Faded Background Image at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-20">
        <img
          src="/ib/layer5.webp" // ✅ change this path if needed
          alt="Decorative background"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 justify-center text-center px-4 md:px-0">
        <h2 className="text-[21px] md:text-3xl xl:text-[40px] font-bold text-[#000032] capitalize max-w-3xl mx-auto leading-none md:leading-tight">
          {title||""}
        </h2>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e0e4f6]">
          <table className="w-full text-sm md:text-base text-[#1e2c54]">
            <thead>
              <tr className="bg-[#f1f4fb] text-left font-semibold text-[#1e2c54]">
                <th className="py-4 px-5">Feature</th>
                <th className="py-4 px-5 bg-gray-50 text-center">Your Broker</th>
                <th className="py-4 px-5 bg-gray-50 text-center">
                  <img src="/logo-blue.svg" alt="GTC Logo" className="h-8 inline-block" />
                </th>
              </tr>
            </thead>
            <tbody>
            {data?.map((item, idx) => (
                <tr key={idx} className="border-t border-[#e0e4f6]">
                  <td className="py-4 px-5 font-medium text-left bg-gray-100">{item.feature}</td>
                  <td className="py-4 px-5 text-center">{item.broker}</td>
                  <td className="py-4 px-5 text-center">{item.gtc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

   <div className="flex justify-center md:mt-2">
      <CustomButton
          text="Refer Your Traders"
          bgColor="bg-[#000032] hover:bg-[#4e4d71]"
          textColor="text-[#fff]"
           onClick={() => setIsOpen(true)}
          showIcon={false} // No SVG arrow
        />
   </div>
      
      </div>
    </section>
  );
};

export default ComparisonTable;
