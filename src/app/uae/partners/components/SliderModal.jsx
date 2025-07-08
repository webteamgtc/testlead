import { useEffect } from "react";
import Image from "next/image";
import CommonMainForm from "@/app/components/MainForm";

const SliderModal = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open (optional but helps iOS stability)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[99] transition-opacity duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative Background Image (Faded) */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <img
          src="/ib/lp.webp"
          alt="Decorative background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Modal Panel Wrapper (slides) */}
      <div
        className={`absolute top-0 right-0 z-20 h-full w-full md:w-[700px] max-w-full transition-all duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Actual Modal Container */}
        <div className="h-full w-full bg-[#0F1035] text-white shadow-lg flex flex-col items-center justify-center px-4 overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-end w-full pt-6 pr-4">
            <button
              className="text-white text-2xl"
              onClick={onClose}
              aria-label="Close"
            >
              <img src="/close.svg" alt="Close" className="w-6 h-6" />
            </button>
          </div>

          {/* Form Block */}
          <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center text-center md:py-4">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
              width={200}
              height={72}
              alt="GTCFX"
              className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
            />

            <h2 className="text-center text-xl md:text-3xl font-medium my-5 md:my-8">
              Register Now
            </h2>

            <CommonMainForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderModal;
