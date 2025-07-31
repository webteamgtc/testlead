"use client";
import { useState } from "react";
import HeroSection from '../uae/partners/components/banner'
import IBTestimonials from '../uae/partners/components/IBTraders'
import SliderModal from '../uae/partners/components/SliderModal'
import ComparisonTable from "../uae/partners/components/table";
import Broker from '../uae/partners/components/broker'
import GrowIBSection from '../uae/partners/components/growIBsection'
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import PayMoreCom from "../india/partners/components/PayMoreCom";
import NewHeader from "../components/NewHeader";

const UaePartnerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const comparisonData = [
    {
      feature: 'Average EURUSD Spread',
      broker: '3 pips',
      gtc: '0 pips'
    },
    {
      feature: 'Leverage',
      broker: '1:500',
      gtc: '1:2000'
    },
    {
      feature: 'Withdrawal Time',
      broker: '24 hours',
      gtc: 'Instant – 10 hours max'
    },
    {
      feature: 'Scalping Rule',
      broker: '3 minutes',
      gtc: '1 minute'
    },
    {
      feature: 'Slippage During News',
      broker: 'Increased',
      gtc: 'Unchanged'
    },
    {
      feature: 'Support Quality',
      broker: 'Scripted replies',
      gtc: 'Real human care'
    },
    {
      feature: 'Loyalty Rewards',
      broker: (
          <span className="text-red-500 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                      fillRule="evenodd"
                      d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z"
                      clipRule="evenodd"
                  />
              </svg>
          </span>
      ),
      gtc: (
          <span className="text-green-600 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                  />
              </svg>
              GTC VIP + Margin Bonus
          </span>
      )
  }
  ];
  return (
    <>
      <NewHeader />
      <HeroSection setIsOpen={setIsOpen} />
      <ComparisonTable setIsOpen={setIsOpen} data={comparisonData} title="Here’s what your traders will get when you refer them to GTC" />
      <PayMoreCom setIsOpen={setIsOpen} />
      <Broker setIsOpen={setIsOpen} />
      <IBTestimonials setIsOpen={setIsOpen} />
      <GrowIBSection setIsOpen={setIsOpen} />
      <MainFooter />
      <SliderModal isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default UaePartnerPage