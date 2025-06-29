import React from "react";

const testimonials = [
    {
        text: `“As an IB, getting up to 80% RevShare and paid out instantly was a game changer. I moved my entire client book to GTC where they’re looked after.”`,
        name: "Ravi T., Mumbai",
        stars: 5,
    },
    {
        text: `“I run monthly trading classes in Hyderabad. GTC gave me banners, an LP, and real bonuses for my traders. The support is unreal!”`,
        name: "Fatima S., Hyderabad",
        stars: 5,
    },
    {
        text: `“My trading educator recommended GTC. I was sceptical at first, but now I see why he recommended them. The spreads, bonus, everything just works really well.”`,
        name: "Rakesh P., Pune",
        stars: 5,
    },
    {
        text: `“GTC doesn’t just talk, they deliver! I get paid on time, every time, and my traders are sticking around longer than ever. They also trade gold and GTC is great with them.”`,
        name: "Jignesh K., Dahil",
        stars: 5,
    },
];

const TestimonialCard = ({ text, name, stars }) => (
    <div className="bg-white rounded-lg p-6 text-sm space-y-4"
        style={{
            boxShadow: "1px 6px 16px 0px #0000001A"
        }}
    >
        <p className=" m-0 text-3xl leading-tight">❝ </p>
        <p className="text-gray-700">{text}</p>
        <div className="flex justify-between items-center text-sm font-[200] text-[#808098] italic">
            <span>{name}</span>
        </div>
        <div className="flex text-[#E6B34A] justify-end text-lg">
            {"★".repeat(stars)}
        </div>
    </div>
);

const IBTestimonials = () => {
    return (
        <section className="bg-[#f9f9f9] india-bg md:py-20 py-12">
            <div className="container mx-auto">
                <div className=" grid md:grid-cols-2 items-start md:gap-16 gap-10">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#4D4D70] leading-snug">
                            What India’s IBs & Traders <br /> Are Saying
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 max-w-md">
                            Whether you’re a seasoned IB or just getting started, these partners made the switch and they or their traders haven’t looked back.
                        </p>
                        <button className="w-fit bg-white border border-gray-300 hover:border-gray-400 text-sm font-medium text-[#1f2937] px-5 py-2 rounded-xl transition">
                            Join Us →
                        </button>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {testimonials.map((item, idx) => (
                            <TestimonialCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IBTestimonials;
