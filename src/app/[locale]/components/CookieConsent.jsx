'use client';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      setVisible(true);
    } else {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent',
      consent_status: 'accepted',
    });

    fetch('/api/set-cookie-consent');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-0 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-5xl z-50 bg-gradient-to-r from-[#293794] to-[#000021] text-white px-4 py-5 rounded-md border border-[#f2f2f2]/20 shadow-lg">
      {/* English Section (LTR) */}
      <div className="hidden ltr:flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left text-xs md:text-sm leading-relaxed">
          By clicking "Fine By Me”, you agree to the storing of cookies on your device to enhance your user experience, site navigation, analyse site usage, and assist in our marketing efforts.
          <span className="mx-1" />
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            Read our privacy policy here.
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondary text-white font-semibold text-xs md:text-sm px-4 py-2 rounded-md hover:bg-opacity-90 transition w-full md:w-48"
        >
          Fine By Me
        </button>
      </div>

      {/* Arabic Section (RTL) */}
      <div className="rtl:flex hidden flex-col md:flex-row items-center justify-between gap-4 text-right">
        <p className="text-center md:text-right text-xs md:text-sm leading-relaxed">
          من خلال النقر على "موافق"، فإنك توافق على تخزين ملفات تعريف الارتباط على جهازك لتحسين تجربتك، والتنقل في الموقع، وتحليل استخدامه، والمساعدة في جهودنا التسويقية.
          <span className="mx-1" />
          <a
            href="/ar/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            اقرأ سياسة الخصوصية الخاصة بنا من هنا.
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondary text-white font-semibold text-xs md:text-sm px-4 py-2 rounded-md hover:bg-opacity-90 transition w-full md:w-48"
        >
          موافق
        </button>
      </div>
    </div>
  );
}