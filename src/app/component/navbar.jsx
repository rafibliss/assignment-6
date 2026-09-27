'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const isWorkoutsActive = pathname === '/';
    const isMyPlanActive = pathname === '/my-plan';

    return (
        <header className="w-full bg-[#0d0d0f] border-b border-[#1f222a] py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Fitlog Logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                    />
                    <span className="font-extrabold tracking-wider text-base uppercase text-white font-sans">
                        FITLOG
                    </span>
                </Link>

                <nav className="flex items-center gap-2 bg-[#13151b] p-1.5 rounded-full border border-gray-800/60">

                    <Link
                        href="/"
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${isWorkoutsActive
                            ? 'bg-[#1e290f] text-[#ccff00] border border-[#3b520d]'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${isMyPlanActive
                            ? 'bg-[#1e290f] text-[#ccff00] border border-[#3b520d]'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        My Plan
                    </Link>

                </nav>

                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <span>Plan</span>
                        <span className="bg-[#ccff00] text-black w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[10px]">
                            0
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>Saved</span>
                        <span className="bg-gray-800 text-gray-300 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] border border-gray-700">
                            0
                        </span>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;