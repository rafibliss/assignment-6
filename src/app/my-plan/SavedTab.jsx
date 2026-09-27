'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Flame, Star, X } from 'lucide-react';

export default function SavedTab({ items, onRemove }) {
    if (items.length === 0) {
        return (
            <div className="border border-dashed border-gray-800/80 rounded-2xl p-16 text-center flex flex-col items-center justify-center min-h-[320px] bg-[#101217]/40">
                <h2 className="font-extrabold text-xl text-white uppercase tracking-tight font-sans mb-2">
                    NOTHING SAVED YET
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-sm">
                    Save workouts from the details page to access them quickly here.
                </p>
                <Link
                    href="/"
                    className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all"
                >
                    Go to workouts
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {items.map((work) => (
                <div
                    key={work.id}
                    className="bg-[#13151b] border border-gray-800/60 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                    {/* Workout Info */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0">
                            <Image
                                src={work.image}
                                alt={work.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-white font-extrabold text-base tracking-wide uppercase font-sans">
                                {work.name}
                            </h3>
                            <p className="text-gray-400 text-xs font-medium mt-0.5">
                                {work.equipment}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mt-2">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                                    <span>{work.duration} min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Flame className="w-3.5 h-3.5 text-gray-400" />
                                    <span>{work.caloriesBurned} kcal</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5 text-gray-400" />
                                    <span>{work.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons WITHOUT Mark as Done */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-800/80">
                        <Link
                            href={`/woroutdetail/${work.id}`}
                            className="border border-gray-700/80 hover:border-gray-500 bg-transparent text-gray-300 text-xs font-bold px-4 py-2.5 rounded-full transition-colors"
                        >
                            View Details
                        </Link>

                        <button
                            type="button"
                            onClick={() => onRemove(work.id)}
                            className="text-gray-500 hover:text-white transition-colors cursor-pointer p-1"
                            title="Remove item"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}