import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="px-6 pt-6 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-[#13151b] border border-gray-800/60 p-8 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="flex-1 max-w-xl z-10">
                        <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-4 block">
                            WORKOUT LIBRARY
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95] mb-6 font-sans">
                            TRAIN WITH INTENT. LOG EVERY SET.
                        </h1>


                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>


                        <button
                            type="button"
                            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
                        >
                            BROWSE WORKOUTS
                        </button>
                    </div>


                    <div className="flex-1 flex justify-center md:justify-end w-full max-w-md z-10">

                        <Image
                            src="/banner.png"
                            alt="Gym Equipment Illustration"
                            width={450}
                            height={450}
                            priority
                            className="object-contain w-full max-w-[320px] md:max-w-100 h-auto drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;