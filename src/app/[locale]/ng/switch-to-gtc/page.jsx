'use client'
import { useState } from "react";
import CommonPage from '../../pages/switch-to-gtc'
import { useTranslations } from "next-intl";
import Meta from "@/app/components/common/MetaData";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations()

    return (
        <>
            <Meta title={t('qatar.meta.title')} description={t('qatar.meta.description')} />
            <section className="">
                <CommonPage />
            </section>
        </>
    );
}
