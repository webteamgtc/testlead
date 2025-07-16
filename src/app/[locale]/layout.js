import "./globals.css";
import { ToastContainer } from "react-toastify";
import CookieConsent from "../components/CookieConsent";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const isArabic = locale === 'ar';


  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;@300;@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSWH9QF');`,
          }}
        />
      </head>
      <style>{`
          body {
            font-family: '${isArabic ? 'Noto Kufi Arabic' : 'Outfit'}', sans-serif;
          }
        `}</style>
      <body

      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
        <CookieConsent />
      </body>
    </html>
  );
}