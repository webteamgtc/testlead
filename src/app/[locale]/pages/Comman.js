'use client'
import React from 'react'
import ComparisonSection from '../uae/partners/components/table';
import BonusSection from '../za/switch-to-gtc/components/bonusSection'; 
import TrustSection from '../za/switch-to-gtc/components/trustSection';
import { useTranslations } from 'next-intl';
const Comman = () => {
    const t = useTranslations('switchToGtc');
  return (
    <>
     <ComparisonSection data={comparisonData} title={t("banner.tableHeading")} setIsOpen={setIsOpen} butText={t("bonusSection.buttonText")} />
      <BonusSection setIsOpen={setIsOpen} />
      <TrustSection setIsOpen={setIsOpen}  butText={t("bonusSection.buttonText")} />
    </>
  )
}

export default Comman