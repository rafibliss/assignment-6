import React from 'react';
import Image from 'next/image';
import Footer from '@/app/component/footer';

const getWorkoutById = async (id) => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    const workout = data.find((item) => String(item.id) === String(id));
    return workout;
};

const WorkoutDetailPage = async ({ params }) => {
    const { id } = await params;
    const workout = await getWorkoutById(id);

    if (!workout) {
        return (
            <div className="min-h-screen bg-[#0a0b0d] text-white flex items-center justify-center">
                <p className="text-gray-400">Workout not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white flex flex-col justify-between">
            <div>

                <main className="max-w-7xl mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="relative w-full h-[450px] md:h-[550px] bg-[#13151b] border border-gray-800/60 rounded-3xl overflow-hidden">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-sans text-white mb-3">
                                {workout.name}
                            </h1>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                {workout.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {workout.muscleGroups?.map((group, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black text-xs font-extrabold uppercase tracking-wide"
                                    >
                                        {group}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-[#13151b] border border-gray-800/60 rounded-2xl p-5 mb-8">
                                <div className="divide-y divide-gray-800/60 text-xs md:text-sm">
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Equipment</span>
                                        <span className="text-white font-medium">{workout.equipment}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Difficulty</span>
                                        <span className="text-white font-medium">{workout.difficulty}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Sets</span>
                                        <span className="text-white font-medium">{workout.sets}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Reps</span>
                                        <span className="text-white font-medium">{workout.reps}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Duration</span>
                                        <span className="text-white font-medium">{workout.duration} min</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Calories</span>
                                        <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="text-gray-400 uppercase font-semibold">Rating</span>
                                        <span className="text-white font-medium">{workout.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                                    INSTRUCTIONS
                                </h3>
                                <ol className="space-y-3 list-decimal list-inside text-gray-300 text-sm leading-relaxed">
                                    {workout.instructions?.map((step, idx) => (
                                        <li key={idx} className="pl-1">
                                            <span className="text-gray-300">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
                                >
                                    <span>📅</span> Add to today&apos;s plan
                                </button>

                                <button
                                    type="button"
                                    className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 bg-transparent text-gray-300 text-xs font-bold uppercase px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
                                >
                                    <span>🔖</span> Save for later
                                </button>
                            </div>

                        </div>

                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default WorkoutDetailPage;