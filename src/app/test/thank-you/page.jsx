"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <div className='container mx-auto pt-12 md:pt-28'>

            <section className="py-10 md:pb-14 xl:pb-20 3xl:pb-20 5xl:pb-28">
                <div className="container text-center">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="content-left flex flex-col gap-5 max-w-xl mx-auto">
                            <h2 className="HeadingH2 text-center">{`Success! You're All Set, (${user?.nickname})!`}</h2>
                            <p className="text">{`Your account is almost ready to go.We've just sent a confirmation email to (${user?.email}). `}</p>
                            <p className="text">  Check your inbox and click the verification link to complete your registration. </p>
                            <p className="text"> Once you verify, we'll log you into the GTC Client Area and you’ll be ready to make your first deposit and start trading gold with us! </p>
                            <p className="text">  Need help ? Our support team is here for you.</p>

                            <p className=" ">
                                {" "}
                                Let’s make this your best trading experience yet!
                            </p>
                            <p className="text-secondary font-bold text-2xl py-2">Having Trouble ?</p>
                            <p className="">
                                {" "}
                                Contact Us at <a href="tel:+971800667788">+ 971 800 667788</a> & <a
                                    className="cursor-pointer ml-2 text-secondary"
                                    href="mailto:support@gtcfx.com"
                                >
                                    support@gtcfx.com
                                </a>
                            </p>


                            <p className="text-primary font-bold text-lg">See you soon! GTC Team</p>
                        </div>
                        {/* RIGHT (Image will appear first on mobile) */}
                     
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThankYouPage;
