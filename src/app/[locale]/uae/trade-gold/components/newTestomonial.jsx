'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';



/* ---- UI bits ---- */
function StarRow({ n }) {
    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={i < n ? 'text-[#E1CFBB]' : 'text-[#E1CFBB]'}
                    fill="currentColor"
                    aria-hidden
                >
                    <path d="M12 3.7l2.2 4.5 5 .7-3.6 3.6.9 5.1-4.5-2.4-4.5 2.4.9-5.1L4.8 8.9l5-.7L12 3.7z" />
                </svg>
            ))}
        </div>
    );
}

function Card({ t }) {
    return (
        <article className="rounded-[10px] border border-[#E7E8EE] bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)] p-4 md:p-5 min-h-[170px] flex flex-col justify-between">
            <div>
                <StarRow n={t.stars} />
                <p className="mt-5 text-[16px] leading-[24px] text-[#4D4D70]">“{t.quote}”</p>
            </div>
            <div className="mt-8">
                <p className="text-[13px] font-semibold text-[#0E1443]">{t.author}</p>
                <p className="text-[12px] leading-[16px] text-[#6E6E7A]">{t.location}</p>
            </div>
        </article>
    );
}

/* ---- main ---- */
export default function ArabicTestimonials({ setIsOpen }) {
    const t = useTranslations("tradeGold");


    const ITEMS = [
        {
            stars: 4,
            quote: t("testimonial.card1.title"),
            author: t("testimonial.card1.name"),
            location: t("testimonial.card1.country"),
        },
        {
            stars: 4,
            quote: t("testimonial.card2.title"),
            author: t("testimonial.card2.name"),
            location: t("testimonial.card2.country"),
        },
        {
            stars: 4,
            quote: t("testimonial.card3.title"),
            author: t("testimonial.card3.name"),
            location: t("testimonial.card3.country"),
        },
        {
            stars: 4,
            quote: t("testimonial.card4.title"),
            author: t("testimonial.card4.name"),
            location: t("testimonial.card4.country"),
        },
    ];

    // slider only on >= sm
    const [perView, setPerView] = useState(3);
    useEffect(() => {
        const compute = () => {
            const w = window.innerWidth;
            // tablet: 2, desktop: 3 (slider not rendered on mobile anyway)
            setPerView(w >= 1024 ? 3 : 2);
        };
        compute();
        window.addEventListener('resize', compute);
        return () => window.removeEventListener('resize', compute);
    }, []);

    const pages = useMemo(() => {
        const out = [];
        for (let i = 0; i < ITEMS.length; i += perView) out.push(ITEMS.slice(i, i + perView));
        return out;
    }, [perView]);

    const [page, setPage] = useState(0);
    useEffect(() => {
        if (page > pages.length - 1) setPage(0);
    }, [pages.length, page]);

    const next = () => setPage((p) => (p + 1) % pages.length);
    const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);

    return (
        <section className="bg-white">
            <div className="mx-auto container py-10 md:py-14">
                <h2 className="text-[#000032] font-extrabold text-center md:text-left tracking-tight text-[24px] leading-[32px] md:text-[32px] md:leading-[38px] xl:text-[34px] xl:leading-[42px]">
                    {t("testimonial.heading")}
                </h2>
                <p className="mt-3 md:text-[18px] text-[16px] text-center md:text-left leading-[26px] text-[#4D4D70] max-w-[720px]">
                    {t("testimonial.desc")}
                </p>

                {/* MOBILE: no slider, 1 per row */}
                <div className="sm:hidden mt-6 grid grid-cols-1 gap-5">
                    {ITEMS.map((t, i) => (
                        <Card key={i} t={t} />
                    ))}
                </div>

                {/* TABLET/DESKTOP: slider */}
                <div className="hidden sm:block relative mt-8">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${page * 100}%)` }}
                        >
                            {pages.map((group, gi) => (
                                <div key={gi} className="w-full shrink-0 px-0">
                                    <div className={`grid gap-6 ${perView === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                        {group.map((t, i) => (
                                            <Card key={`${gi}-${i}`} t={t} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* controls */}
                    <div className="mt-6 flex items-center justify-between">
                        {/* dots */}
                        <div className="flex items-center gap-2">
                            {pages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2.5 w-2.5 rounded-full transition ${i === page ? 'bg-[#0E1443]' : 'bg-[#D8DAE6]'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <IconCircle onClick={prev} title="Previous">
                                    <ArrowLeft />
                                </IconCircle>
                                <IconCircle onClick={next} title="Next">
                                    <ArrowRight />
                                </IconCircle>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 inline-flex items-center justify-center
                         h-[42px] px-5 rounded-[10px]
                         text-white text-[16px] font-semibold
                         bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                         shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                    >
                        {t("testimonial.btnText")}
                    </button>
                </div>
            </div>
        </section>
    );
}

/* ---- arrow buttons ---- */
function IconCircle({
    children,
    onClick,
    title,
}) {
    return (
        <button
            aria-label={title}
            onClick={onClick}
            className="h-9 w-9 rounded-full border border-[#D9D9E8] text-[#0E1443] flex items-center justify-center hover:bg-[#F7F8FF] transition"
        >
            {children}
        </button>
    );
}
function ArrowLeft() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function ArrowRight() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
