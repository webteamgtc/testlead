import React from 'react'
import GoldBanner from '../components/GoldTrade/GoldBanner';
import BannerWithFeatureBar from '../components/GoldTrade/BannerWithFeatureBar';
import GoldOpportunitySection from '../components/GoldTrade/GoldOpportunitySection';
import WhyChooseGTC from '../components/GoldTrade/WhyChooseGTC';
import GoldFeatureStrip from '../components/GoldTrade/GoldFeatureStrip';
import GoldTrustSection from '../components/GoldTrade/GoldTrustSection';
import TradeGoldFeatures from '../components/GoldTrade/TradeGoldFeatures';
import GoldContentHighlights from '../components/GoldTrade/GoldContentHighlights';
import GoldMarketEdge from '../components/GoldTrade/GoldMarketEdge';
import TradeTrust from '../components/GoldTrade/TradeTrust';
import Footer from '../components/Footer';

export const metadata = {
  title: "Trade Gold with Tight Spreads & Fast Execution | GTC",
  description: "Join over 985,000 traders choosing GTC for reliable, low-spread gold trading. Sign up in minutes and start trading today!",
};

const page = () => {
  return (
    <>
    <GoldBanner />
    <BannerWithFeatureBar />
    <GoldOpportunitySection />
    <WhyChooseGTC />
    <GoldFeatureStrip />
    <GoldTrustSection />
    <GoldContentHighlights />
    <TradeGoldFeatures />
    <TradeTrust />
    <GoldMarketEdge />
    <Footer />
    </>
  )
}

export default page