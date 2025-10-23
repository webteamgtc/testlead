'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

function smoothScrollToId(id, offset = 0) {
  if (typeof window === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) {
    // fallback to top if ID not found
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const rect = el.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  const targetY = Math.max(absoluteTop - offset, 0);
  window.scrollTo({ top: targetY, behavior: 'smooth' });
}

export default function HeroBetterWay({
  setIsOpen,
  page = 'UAE',
  scrollTargetId = 'topSection',
  stickyOffset = 0
}) {
  const t = useTranslations('tradeGold');

  const handleCta = () => {
    smoothScrollToId(scrollTargetId, stickyOffset);
    // If you also want to open the modal, uncomment:
    // setIsOpen?.(true);
  };

  return (
    <section className="relative overflow-hidden md:bg-[#e8eaec] bg-gradient-to-r from-[#e8eaec] to-[#edeff6]">
      {/* BG image on desktop/tablet (left side), fully visible */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-full z-0">
        <div className={page === 'South Africa' ? 'relative h-full w-1/2' : 'relative h-full w-full'}>
          <Image
            src={page === 'South Africa' ? '/trade-gold/za-footer.png' : '/trade-gold/footerbg.webp'}
            alt="Smiling trader holding gold bars"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Gentle fade on the right so text is always readable */}
      <div className="hidden md:block absolute inset-y-0 left-[52%] right-0 z-0 bg-gradient-to-r from-[#f1f5f9] via-transparent to-[#fff]" />

      {/* Content */}
      <div className="relative z-10 container flex justify-end flex-col md:flex-row mx-auto pt-8 md:py-16 md:pl-[56%] md:min-h-[420px]">
        <div className="max-w-[560px] text-center md:text-left">
          <h1 className="text-[#0E1443] font-extrabold text-center md:text-left tracking-tight
                         text-[28px] leading-[34px]
                         md:text-[34px] md:leading-[42px]
                         xl:text-[36px] xl:leading-[44px]">
            {t('tradeToday.heading')}
          </h1>

          <p className="mt-3 text-[14px] leading-[22px] text-[#6E6E7A]">{t('tradeToday.desc1')}</p>
          <p className="mt-3 text-[14px] leading-[22px] text-[#6E6E7A]">{t('tradeToday.desc2')}</p>

          <button
            onClick={handleCta}
            className="mt-6 inline-flex h-[42px] w-full md:w-fit items-center justify-center
                       rounded-[10px] px-5 text-[16px] font-semibold text-white
                       bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                       shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
          >
            {t('tradeToday.btnText')}
          </button>
        </div>

        {/* Mobile image: AFTER text */}
        <div className="mt-6 md:hidden">
          <Image
            src={page === 'South Africa' ? '/trade-gold/za-footer.png' : '/trade-gold/footerbg.webp'}
            alt="Smiling trader holding gold bars"
            width={900}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
