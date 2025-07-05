import React from 'react';
import Image from 'next/image';

const ConfirmationThankYou = ({ user }) => {
    return (
        <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden">

            <div className="container">
                <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative mb-8">
                    {/* Left Column */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">
                            Thanks, <span className="text-white">{user?.nickname}</span>!
                        </h2>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-4">
                            You’re Almost There!
                        </h4>
                        <div className='max-w-xl'>
                          
                            <p className="text-sm md:text-base mb-6 leading-relaxed">
                                I’ve just sent you an email to [EMAIL]. Go ahead and click on that link.
                            </p>
                            <p className="text-sm md:text-base mb-6 leading-relaxed">
                                Oh, and check your spam or junk folder as sometimes emails like to hide there! If the email we’ve sent you has made its way into your spam or junk folder, simply move it back into your inbox.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className="w-full h-auto max-w-[200px] md:max-w-[300px] mx-auto" src="/thank-you.svg" alt="Shield Check" />
                    </div>
                </div>
            </div>

        </section >
    );
};

export default ConfirmationThankYou;
