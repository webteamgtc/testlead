import MainFooter from '../components/MainFooter'
import React from 'react'
import MainHeader from '../components/MainHeader'
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('privacyPolicy');

  return (
    <>
    <MainHeader />
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
       <header className="bg-white text-primary py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('header.title')}</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          {t('header.subtitle')}
        </p>
      </div>
    </header>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Who We Are */}
       <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-start mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg className="text-primary text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-blue-900">{t('whoWeAre.title')}</h2>
      </div>

      <p className="text-gray-700 mb-6">{t('whoWeAre.intro1')}</p>
      <p className="text-gray-700 mb-4">{t('whoWeAre.intro2')}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Entity 1 */}
        <div className="border-l-4 border-secondary pl-4 py-2 bg-blue-50 rounded-r">
          <h3 className="font-bold text-blue-900">{t('whoWeAre.entity1.title')}</h3>
          <p className="text-gray-700">{t('whoWeAre.entity1.line1')}</p>
          <p className="text-gray-700">{t('whoWeAre.entity1.line2')}</p>
          <p className="text-gray-700">{t('whoWeAre.entity1.line3')}</p>
        </div>

        {/* Entity 2 */}
        <div className="border-l-4 border-secondary pl-4 py-2 bg-blue-50 rounded-r">
          <h3 className="font-bold text-blue-900">{t('whoWeAre.entity2.title')}</h3>
          <p className="text-gray-700">{t('whoWeAre.entity2.line1')}</p>
          <p className="text-gray-700">{t('whoWeAre.entity2.line2')}</p>
          <p className="text-gray-700">{t('whoWeAre.entity2.line3')}</p>
        </div>
      </div>
    </section>

        {/* Our Commitment */}
   <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-start mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg
            className="text-primary text-2xl"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-blue-900">{t('ourCommitment.title')}</h2>
      </div>

      <p className="text-gray-700 mb-6">{t('ourCommitment.description')}</p>

      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <p className="text-gray-700 font-semibold mb-4">{t('ourCommitment.subheading')}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['one', 'two', 'three', 'four'].map((key) => (
            <li key={key} className="flex items-start">
              <span className="bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 mr-2">
                ✓
              </span>
              <span className="text-gray-700">{t(`ourCommitment.point.${key}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Section Header */}
      <div className="flex items-start mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg
            className="text-primary text-2xl"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6" />
            <path d="M17 11h6" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-blue-900">{t('personalData.title')}</h2>
      </div>

      {/* Section Intro */}
      <p className="text-gray-700 mb-6">{t('personalData.intro')}</p>

      {/* Two-column Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Personal Info Block */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">{t('personalData.personal.title')}</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>{t('personalData.personal.items.one')}</li>
            <li>{t('personalData.personal.items.two')}</li>
            <li>{t('personalData.personal.items.three')}</li>
          </ul>
        </div>

        {/* Financial Info Block */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">{t('personalData.financial.title')}</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>{t('personalData.financial.items.one')}</li>
            <li>{t('personalData.financial.items.two')}</li>
            <li>{t('personalData.financial.items.three')}</li>
            <li>{t('personalData.financial.items.four')}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-blue-100 border-l-4 border-secondary p-4 rounded-r">
        <p className="text-gray-700">{t('personalData.note')}</p>
      </div>
    </section>

      <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <div className="flex items-start mb-6">
    <div className="bg-blue-100 p-3 rounded-full mr-4">
      <svg className="text-primary text-2xl" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </div>
    <h2 className="text-2xl font-bold text-blue-900">{t("howWeUse.title")}</h2>
  </div>
  <p className="text-gray-700 mb-6">{t("howWeUse.description")}</p>

  <div className="grid md:grid-cols-2 gap-4 mb-6">
    {["one", "two", "three", "four", "five", "six", "seven"].map((key, index) => (
      <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
        <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3">✓</span>
        <span className="text-gray-700">{t(`howWeUse.points.${key}`)}</span>
      </div>
    ))}
  </div>

  <div className="bg-blue-900 text-white p-4 rounded-lg">
    <p className="font-semibold text-center">{t("howWeUse.footer")}</p>
  </div>
</section>

<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("whoWeShare.title")}</h2>
  <p className="text-gray-700 mb-6">{t("whoWeShare.description")}</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {["one", "two", "three", "four", "five"].map((key, index) => (
      <div key={index} className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
        <span className="text-2xl mb-2">📌</span>
        <p className="text-gray-700">{t(`whoWeShare.items.${key}`)}</p>
      </div>
    ))}
  </div>

  <div className="bg-blue-100 p-4 rounded-lg">
    <p className="text-gray-700">{t("whoWeShare.footer")}</p>
  </div>
</section>

     {/* Cookies & Tracking */}
<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <div className="flex items-start mb-6">
    <div className="bg-blue-100 p-3 rounded-full mr-4">
      <svg className="text-primary text-2xl" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l2 2" />
      </svg>
    </div>
    <h2 className="text-2xl font-bold text-blue-900">{t("cookiesTracking.title")}</h2>
  </div>
  <p className="text-gray-700 mb-4">{t("cookiesTracking.description")}</p>
  <div className="grid md:grid-cols-2 gap-4 mb-6">
    {["one", "two", "three", "four"].map((key, index) => (
      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
        <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
        <span className="text-gray-700">{t(`cookiesTracking.points.${key}`)}</span>
      </div>
    ))}
  </div>
  <div className="bg-blue-100 p-4 rounded-lg">
    <p className="text-gray-700">
      {t("cookiesTracking.footer")}{" "}
      <a href="#" className="text-secondary underline">{t("cookiesTracking.linkText")}</a>.
    </p>
  </div>
</section>

{/* International Transfers */}
<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("internationalTransfers.title")}</h2>
  <p className="text-gray-700 mb-6">{t("internationalTransfers.description")}</p>
</section>

{/* Your Rights */}
<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("yourRights.title")}</h2>
  <p className="text-gray-700 mb-6">{t("yourRights.description")}</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    {["one", "two", "three", "four", "five", "six", "seven"].map((key, index) => (
      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
        <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">{index + 1}</span>
        <span className="text-gray-700">{t(`yourRights.points.${key}`)}</span>
      </div>
    ))}
  </div>
  <div className="bg-blue-100 p-4 rounded-lg">
    <p className="text-gray-700">
      {t("yourRights.footer")}{" "}
      <a href={`mailto:${t("yourRights.email")}`} className="text-secondary font-semibold">
        {t("yourRights.email")}
      </a>.
    </p>
  </div>
</section>

    {/* Data Retention */}
<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("dataRetention.title")}</h2>
  <p className="text-gray-700 mb-6">{t("dataRetention.intro")}</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {["one", "two", "three"].map((key, index) => (
      <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
        <div className="text-4xl font-bold text-primary mb-2">{t(`dataRetention.points.${key}.icon`)}</div>
        <p className="text-gray-700">{t(`dataRetention.points.${key}.text`)}</p>
      </div>
    ))}
  </div>
</section>

{/* Keeping Your Data Safe */}
<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("dataSafety.title")}</h2>
  <p className="text-gray-700 mb-6">{t("dataSafety.description")}</p>
</section>

{/* Updates to This Policy */}
<section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("policyUpdates.title")}</h2>
  <p className="text-gray-700 mb-6">{t("policyUpdates.description")}</p>
</section>

{/* Contact */}
<section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl shadow-lg p-8">
  <div className="flex flex-col items-center text-center">
    <div className="bg-white p-3 rounded-full mb-4">
      <span className="text-3xl">📧</span>
    </div>
    <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
    <p className="mb-6 max-w-md">{t("contact.description")}</p>
    <a
      href={`mailto:${t("contact.email")}`}
      className="bg-white text-primary hover:bg-blue-100 font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center"
    >
      {t("contact.buttonText")}
    </a>
  </div>
</section>

      </main>

  
    </div>
    <MainFooter />
    </>
  )
}

export default page