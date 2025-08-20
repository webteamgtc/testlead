"use client"
// app/landing/page.tsx

import HeroSection from './components/hero';
import ComparisonSection from '../partners/components/table';
import BonusSection from './components/bonusSection';
import TrustSection from './components/trustSection';
import TestimonialsSection from './components/testomonialSection';
import CTASection from './components/ctaSection';
import MainFooter from '../../components/MainFooter';
import SliderModal from '../partners/components/SliderModal';
import { useState } from 'react';
import Meta from '@/app/components/common/MetaData';
import MainHeader from '../../components/MainHeader';
import { useTranslations, useLocale } from 'next-intl'; // ⬅️ add useLocale

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('switchToGtc');
  const locale = useLocale(); // ⬅️ get current locale

  // ---- localized successPath ----
  const successBase = '/uae/switch-to-gtc/success';

  // normalize like "zh-CN" -> "zh"
  const baseLocale = String(locale || '').toLowerCase().split('-')[0];

  // which locales should be prefixed in the URL
  const prefixLocales = new Set(['zh', 'pt', 'ru', 'es']);

  // if you want to skip prefix for default 'en', leave it as-is
  const successPath =
    prefixLocales.has(baseLocale) ? `/${baseLocale}${successBase}` : successBase;
  // --------------------------------

  const comparisonData = [
    // ... (unchanged)
  ];

  return (
    <>
      <Meta title={t("meta.title")} description={t("meta.description")} />
      <MainHeader />
      <HeroSection setIsOpen={setIsOpen} />
      <ComparisonSection data={comparisonData} title={t("banner.tableHeading")} setIsOpen={setIsOpen} butText={t("bonusSection.buttonText")} />
      <BonusSection setIsOpen={setIsOpen} />
      <TrustSection setIsOpen={setIsOpen} butText={t("bonusSection.buttonText")} />
      <TestimonialsSection setIsOpen={setIsOpen} />
      <CTASection setIsOpen={setIsOpen} />
      <MainFooter />
      <SliderModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/u48ff80/"
        successPath={successPath}  // ⬅️ use the localized path here
      />
    </>
  );
}
