import Image from "next/image";
import { useTranslations } from "next-intl";

const Broker = ({ setIsOpen, butText }) => {
  const t = useTranslations('partner.broker');
  return (
    <section className="relative text-white py-8 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#F7F3EE] z-0" />

      {/* Background Image at Bottom Center with Opacity */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-80">
        <Image
          src="/Motif.png"
          alt="Decorative background"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 text-left items-center">
          {/* Left Column */}
          <div className="text-left rtl:md:text-right">
            <h3 className="text-2xl md:text-2xl xl:text-[40px] font-bold text-[#B48755] mb-3">
              {t("heading")}
            </h3>
            <p className="text-base text-[#000021]">
                  {t("paragraph")}
            </p>
          </div>

          {/* Right Column */}
          <div>
            <ul className="text-sm md:text-base text-[#000021] list-disc pl-5 space-y-5 ltr:test-left rtl:text-right">
              <li>{t("points.p1")}</li>
              <li>{t("points.p2")}</li>
              <li>{t("points.p3")}</li>
              <li>{t("points.p4")}</li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/divider.svg" alt="Divider" className="mx-auto py-10 w-full max-w-md md:max-w-lg" />
        </div>

         <div className="text-center col-span-2 flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-center text-primary leading-tight mb-6 sm:max-w-2xl xl:max-w-5xl mx-auto">
           {t("bottomTitle")}
          </h2>
          <button className="bg-white text-[#B48755]  hover:bg-[#4e4d71] cursor-pointer px-6 py-3 text-sm md:text-base font-bold xl:text-lg rounded-lg flex flex-row gap-4 items-center justify-center shadow transition-all duration-300"
          onClick={() => setIsOpen(true)}
          >
            {butText || t('cta')}
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="#B48755" strokeWidth="3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Broker;