'use client';

import React, { useState } from 'react';
import Footer from '@/app/component/footer';
import { usePlan } from '@/app/context/PlanContext';
import TodaysPlanTab from './TodaysPlanTab';
import SavedTab from './SavedTab';

export default function MyPlanPage() {
    const [activeTab, setActiveTab] = useState('plan');
    const [sortBy, setSortBy] = useState('duration');

    const { todaysPlan, savedItems, removeFromPlan, removeFromSaved } = usePlan();

    const currentList = activeTab === 'plan' ? todaysPlan : savedItems;

    const totalExercises = currentList.length;
    const totalMinutes = currentList.reduce((acc, item) => acc + (Number(item.duration) || 0), 0);
    const totalCalories = currentList.reduce((acc, item) => acc + (Number(item.caloriesBurned) || 0), 0);

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') return (b.duration || 0) - (a.duration || 0);
        if (sortBy === 'calories') return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white flex flex-col justify-between font-sans">
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
                            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'plan'
                                ? 'bg-gray-800/90 text-white shadow'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('saved')}
                            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'saved'
                                ? 'bg-gray-800/90 text-white shadow'
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

                {activeTab === 'plan' ? (
                    <TodaysPlanTab items={sortedList} onRemove={removeFromPlan} />
                ) : (
                    <SavedTab items={sortedList} onRemove={removeFromSaved} />
                )}

            </main>

            <Footer />
        </div>
    );
}