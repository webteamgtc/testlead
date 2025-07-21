// 'use client';

// import { useLocale } from 'next-intl';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { usePathname, useRouter } from '@/i18n/navigation';

// const languages = [
//     { code: 'en', label: 'English', country: 'gb' }, // Using 'gb' for UK flag
//     { code: 'ar', label: 'العربية', country: 'sa' }, // Saudi Arabia for Arabic
// ];

// const LanguageSwitcher = () => {
//     const locale = useLocale();
//     const router = useRouter()
//     const currentPath = usePathname()
//     const [isOpen, setIsOpen] = useState(false);

//     const handleSelect = (newLocale) => {
//         router.replace(currentPath, { locale: newLocale });

//         setIsOpen(false);
//     };

//     const current = languages.find((lang) => lang.code === locale);

//     return (
//         <div className="relative inline-block text-left z-50">
//             <button
//                 onClick={() => setIsOpen((prev) => !prev)}
//                 className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md text-sm hover:bg-gray-100 transition"
//             >
//                 <img
//                     src={`https://flagcdn.com/w40/${current?.country}.png`}
//                     alt={current?.label}
//                     width={30}
//                     height={20}
//                     className="rounded-sm w-[30px] h-[20px]"
//                 />
//                 <span>{current?.label}</span>
//                 <svg
//                     className="w-4 h-4 ml-1"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     viewBox="0 0 24 24"
//                 >
//                     <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//             </button>

//             {isOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
//                     {languages.map((lang) => (
//                         <button
//                             key={lang.code}
//                             onClick={() => handleSelect(lang.code)}
//                             className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                             <img
//                                 src={`https://flagcdn.com/w40/${lang.country}.png`}
//                                 alt={lang.label}
//                                 width={30}
//                                 height={20}
//                                 className="rounded-sm w-[30px] h-[20px]"
//                             />
//                             {lang.label}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LanguageSwitcher;


'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter()
    const currentPath = usePathname()

    const isArabic = locale === 'ar';
    const flag = isArabic ? 'gb' : 'sa';
    const label = isArabic ? 'English' : 'العربية';

    const handleLanguageChange = () => {
        router.replace(currentPath, { locale: locale == "ar" ? "en" : "ar" });
    };

    return (
        <button
            onClick={handleLanguageChange}
            className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md text-sm hover:bg-gray-100 transition"
        >
            <img
                src={`https://flagcdn.com/w40/${flag}.png`}
                alt={label}
                width={30}
                height={20}
                className="rounded-sm w-[30px] h-[20px]"
            />
            <span>{label}</span>
        </button>
    );
};

export default LanguageSwitcher;
