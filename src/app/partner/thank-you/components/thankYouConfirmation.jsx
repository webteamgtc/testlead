import React from 'react';
import Image from 'next/image';

const ConfirmationThankYou = ({ user }) => {
    return (
        <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-50 hidden md:block">
                     <div className="relative w-full sm:h-96 xl:h-[500px] 2xl:h-[500px] 3xl:h-[600px] scale-[1.2] origin-bottom-right">
                       <Image
                         src="/ib/bottom-overlay.webp"
                         alt="Decorative background"
                         fill
                         className="object-right-bottom object-contain"
                       />
                     </div>
                   </div>

            <div className="relative container">
                <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative mb-8">
                    {/* Left Column */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-5">
                            Thanks, <span className="text-white">{user?.nickname}</span>!
                        </h2>
                        <h4 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-gray-200 mb-5">
                            You’re Almost There!
                        </h4>
                        <div className='max-w-xl'>
                          
                            <p className="text-sm md:text-base mb-5 leading-relaxed">
                                We’ve just sent you an email to {user?.email}. which explains what happens next.
                            </p>
                            <p className="text-sm md:text-base mb-5 leading-relaxed">
                                It’s also a good idea to check your spam or junk folder as sometimes emails like to hide there. If the email we’ve sent you has made its way into your spam or junk folder, simply move it back into your inbox.
                            </p>
                              <p className="text-sm md:text-base mb-5 leading-relaxed">
                            See you soon! <br />
                            
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
