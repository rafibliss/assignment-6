'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/component/footer';

export default function MyPlanPage() {
    const [activeTab, setActiveTab] = useState('plan');
    const [sortBy, setSortBy] = useState('duration');
    const [loading, setLoading] = useState(false);

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [savedItems, setSavedItems] = useState([]);

    const currentList = activeTab === 'plan' ? todaysPlan : savedItems;
    const totalExercises = currentList.length;
    const totalMinutes = currentList.reduce((acc, item) => acc + (Number(item.duration) || 0), 0);
    const totalCalories = currentList.reduce((acc, item) => acc + (Number(item.caloriesBurned) || 0), 0);

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') return (b.duration || 0) - (a.duration || 0);
        if (sortBy === 'calories') return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
        return 0;
    });

    const handleRemove = (id) => {
        if (activeTab === 'plan') {
            setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
        } else {
            setSavedItems((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const handleMarkDone = (id) => {
        handleRemove(id);
    };

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white flex flex-col justify-between">
            <main className="max-w-7xl mx-auto px-6 py-10 w-full">

                <div className="mb-8">
                    <h1 className="font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight font-sans">
                        MY PLAN
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#13151b] border border-gray-800/60 rounded-2xl p-6 mb-8">
                    <div>
                        <p className="text-xs font-semibold text-gray-400">Exercises</p>
                        <p className="text-4xl font-extrabold text-[#ccff00] mt-2 font-sans">
                            {totalExercises}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400">Minutes</p>
                        <p className="text-4xl font-extrabold text-white mt-2 font-sans">
                            {totalMinutes}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400">Calories</p>
                        <p className="text-4xl font-extrabold text-white mt-2 font-sans">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

                    <div className="flex items-center gap-1 bg-[#13151b] p-1 rounded-xl border border-gray-800/60 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={() => setActiveTab('plan')}
                            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'plan'
                                ? 'bg-gray-800 text-white shadow'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('saved')}
                            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'saved'
                                ? 'bg-gray-800 text-white shadow'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-400 self-end sm:self-auto">
                        <span>Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-[#13151b] border border-gray-800/60 text-white rounded-lg px-3 py-1.5 focus:outline-none cursor-pointer"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-400 text-sm">
                        Loading workouts...
                    </div>
                ) : sortedList.length === 0 ? (

                    <div className="border border-dashed border-gray-800/80 rounded-2xl p-16 text-center flex flex-col items-center justify-center min-h-[320px] bg-[#101217]/40">
                        <h2 className="font-extrabold text-xl text-white uppercase tracking-tight font-sans mb-2">
                            NOTHING HERE YET
                        </h2>
                        <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-sm">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedList.map((work) => (
                            <div
                                key={work.id}
                                className="bg-[#13151b] border border-gray-800/60 rounded-2xl overflow-hidden flex flex-col justify-between"
                            >
                                <div>
                                    <div className="relative w-full h-44 bg-gray-900">
                                        <Image
                                            src={work.image}
                                            alt={work.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-white font-extrabold text-lg uppercase font-sans">
                                            {work.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs mt-1 font-medium">
                                            {work.equipment}
                                        </p>
                                        <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center gap-4 text-xs text-gray-400 font-medium">
                                            <span>⏱️ {work.duration} min</span>
                                            <span>🔥 {work.caloriesBurned} kcal</span>
                                            <span>⭐ {work.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 pt-0 flex items-center gap-2">
                                    <Link
                                        href={`/woroutdetail/${work.id}`}
                                        className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-2 rounded-lg transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleMarkDone(work.id)}
                                        className="bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                                    >
                                        Done
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleRemove(work.id)}
                                        className="text-gray-400 hover:text-red-400 px-2.5 py-2 text-xs font-bold"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
}