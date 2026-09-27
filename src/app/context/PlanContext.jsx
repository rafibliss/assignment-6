'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedPlan = localStorage.getItem('fitlog_todays_plan');
            return savedPlan ? JSON.parse(savedPlan) : [];
        }
        return [];
    });

    const [savedItems, setSavedItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedList = localStorage.getItem('fitlog_saved_items');
            return savedList ? JSON.parse(savedList) : [];
        }
        return [];
    });
    useEffect(() => {
        localStorage.setItem('fitlog_todays_plan', JSON.stringify(todaysPlan));
    }, [todaysPlan]);

    useEffect(() => {
        localStorage.setItem('fitlog_saved_items', JSON.stringify(savedItems));
    }, [savedItems]);

    const addToPlan = (workout) => {
        if (!todaysPlan.find((item) => item.id === workout.id)) {
            setTodaysPlan((prev) => [...prev, workout]);
        }
    };

    const addToSaved = (workout) => {
        if (!savedItems.find((item) => item.id === workout.id)) {
            setSavedItems((prev) => [...prev, workout]);
        }
    };

    const removeFromPlan = (id) => {
        setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
    };

    const removeFromSaved = (id) => {
        setSavedItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <PlanContext.Provider
            value={{
                todaysPlan,
                savedItems,
                addToPlan,
                addToSaved,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => useContext(PlanContext);