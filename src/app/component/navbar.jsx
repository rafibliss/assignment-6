import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Navbar = () => {
    const planCount = 0;
    const savedCount = 0;

    return (
        <nav className="w-full bg-[#0d0d0f] text-white border-b border-[#1f222a] px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">


                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Fitlog Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                    />
                    <span className="font-extrabold tracking-wider text-xl uppercase font-sans">
                        FITLOG
                    </span>
                </Link>


                <div className="flex items-center gap-2 bg-transparent">

                    <Link
                        href="/workouts"
                        className="px-5 py-1.5 rounded-full bg-[#1c2800] text-[#ccff00] text-sm font-medium border border-[#3b5200]/40 transition-colors"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="px-5 py-1.5 rounded-full text-gray-300 text-sm font-medium hover:text-white transition-colors"
                    >
                        My Plan
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2 text-gray-300">
                        <span>Plan</span>
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ccff00] text-black font-bold text-xs">
                            {planCount}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <span>Saved</span>
                        <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 text-gray-300 font-bold text-xs">
                            {savedCount}
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;