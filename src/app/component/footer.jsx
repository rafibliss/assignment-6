import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0d0d0f] border-t border-[#1f222a] py-8 px-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
                <p className="text-gray-500 text-xs text-center sm:text-right font-medium">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;