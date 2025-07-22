'use client';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    setVisible(true); // Always show in dev
  } else {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setVisible(true);
  }
}, []);

  const handleAccept = () => {
    // Store in localStorage
    localStorage.setItem('cookiesAccepted', 'true');

    // Push to GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent',
      consent_status: 'accepted',
    });

    // Set cookie via API
    fetch('/api/set-cookie-consent');

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-[#293794] to-[#000021] text-white px-6 py-4 text-xs md:text-sm  rounded-md border border-[#f2f2f27c] border-opacity-30" >
    <div className='rtl:hidden ltr:flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8'>


<p className="text-center md:text-left">
  By clicking "Find By Me”, you agree to the storing of cookies on your device to enhance your user experience, site navigation, analyse site usage, and assist in our marketing efforts  
  <span className="mx-1"></span> {/* Adds horizontal spacing */}
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
    className="bg-secondary text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition md:w-64"
  >
    Fine By Me
  </button>
 
      </div>

          <div className='ltr:hidden rtl:flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8'>


<p className="text-center md:text-right">
 من خلال النقر على "موافق"، فإنك توافق على تخزين ملفات تعريف الارتباط على جهازك لتحسين تجربتك، والتنقل في الموقع، وتحليل استخدامه، والمساعدة في جهودنا التسويقية
  <span className="mx-1"></span> {/* Adds horizontal spacing */}
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
    className="bg-secondary text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition md:w-64"
  >
   موافق
  </button>
 
      </div>

      
</div>

  );
}
