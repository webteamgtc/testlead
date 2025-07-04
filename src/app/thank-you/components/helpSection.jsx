import React from 'react';
import Image from 'next/image';

const HelpSection = () => {
    return (
        <section className="relative bg-white  py-16 md:py-20">
            {/* Background Chart Image */}
            <div className="absolute inset-0 top-12 z-0 opacity-30">
                <Image
                    src="/bg-help.svg" // Replace with actual path
                    alt="Chart Background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className='container mx-auto relative'>

                {/* Content Box */}
                <div className="relative z-10 max-w-3xl mx-auto bg-[#f9f1e8] rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#956D42] mb-3">
                            Having trouble?
                        </h2>
                        <p className="text-sm text-[#956D42] mb-3">
                            Contact me on <span className="font-medium">[BDM PHONE NUMBER]</span> or email <span className="font-medium">[BDM EMAIL]</span>@gtcfx.com
                        </p>
                        <p className="text-sm text-[#956D42]">
                            See you soon! <br />
                            <span className="font-medium">[BDM EMAIL SIGNATURE]</span>
                        </p>
                    </div>

                    {/* Question Mark Icon */}
                    <div className="flex-shrink-0 absolute -top-6 right-6">
                        <div className="w-[70px] h-[70px] relative">
                            <Image
                                src="/help.svg" // Replace with actual path
                                alt="Help Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div >

        </section>
    );
};

export default HelpSection;
