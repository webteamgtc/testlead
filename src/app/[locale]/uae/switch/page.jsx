"use client"
// app/landing/page.tsx

import HeroSection from './components/hero';
import ComparisonSection from '../partners/components/table';
import BonusSection from './components/bonusSection';
import TrustSection from './components/trustSection';
import TestimonialsSection from './components/testomonialSection';
import CTASection from './components/ctaSection';
import NewHeader from '../../components/NewHeader';
import MainFooter from '../../components/MainFooter';
import SliderModal from '../partners/components/SliderModal';
import { useState } from 'react';

export default function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    const comparisonData = [
        {
            feature: 'Average EURUSD Spread',
            broker: '3 pips',
            gtc: '2 pips'
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
        <main className="text-white">
            <NewHeader />
            <HeroSection setIsOpen={setIsOpen} />
            <ComparisonSection data={comparisonData} title={"Comparison Snapshot Your Broker vs GTC"} setIsOpen={setIsOpen} />
            <BonusSection setIsOpen={setIsOpen} />
            <TrustSection setIsOpen={setIsOpen} />
            <TestimonialsSection setIsOpen={setIsOpen} />
            <CTASection setIsOpen={setIsOpen} />
            <MainFooter />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </main>
    );
}









