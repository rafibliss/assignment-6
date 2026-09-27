import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';

const getWorkout = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const WorkoutCards = async () => {
    const workdata = await getWorkout();

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="mb-8">
                <h2 className="font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight font-sans">
                    THE LIBRARY
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {workdata?.map((work) => (
                    <Link
                        href={`/woroutdetail/${work.id}`}
                        key={work.id}
                        className="block group cursor-pointer h-full"
                    >
                        <div className="bg-[#13151b] border border-gray-800/60 rounded-2xl overflow-hidden flex flex-col h-full group-hover:border-gray-700/80 transition-all duration-200">
                            <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        {work.muscleGroups.map((group, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-[#ccff00] text-black text-[11px] font-extrabold uppercase tracking-wide"
                                            >
                                                {group}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-white font-extrabold text-lg tracking-wide uppercase leading-tight font-sans">
                                        {work.name}
                                    </h3>

                                    <p className="text-gray-400 text-xs mt-1 font-medium">
                                        {work.equipment}
                                    </p>
                                </div>
                                <div className="pt-4 mt-6 border-t border-gray-800/80 flex items-center gap-5 text-xs text-gray-400 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{work.duration} min</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Flame className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{work.caloriesBurned} kcal</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Star className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{work.rating}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default WorkoutCards;