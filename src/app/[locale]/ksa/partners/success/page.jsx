"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainHeader from "@/app/[locale]/components/MainHeader";
import MainFooter from "@/app/[locale]/components/MainFooter";
import ConfirmationThankYou from "./components/thankYouConfirmation";
import HelpSection from "./components/helpSection";
  
const ThankYouPage = () => {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [checked, setChecked] = useState(false); // Track if we've checked localStorage

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setChecked(true); // Mark check complete
        }

        return () => {
            localStorage.removeItem("user");
        };
    }, []);

    useEffect(() => {
        // Only redirect after checking
        if (checked && !user) {
            router.push("/");
        }
    }, [checked, user]);

    if (!checked) return null; // Don't render anything until we've checked

    return (
        <section className="">
            <MainHeader />
            <ConfirmationThankYou user={user} />
            <HelpSection />
            <MainFooter />

        </section>
    
    );
};

export default ThankYouPage;
