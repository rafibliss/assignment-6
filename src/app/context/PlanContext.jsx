'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [savedItems, setSavedItems] = useState([]);

    useEffect(() => {
        const savedPlan = localStorage.getItem('fitlog_todays_plan');
        const savedList = localStorage.getItem('fitlog_saved_items');
        if (savedPlan) setTodaysPlan(JSON.parse(savedPlan));
        if (savedList) setSavedItems(JSON.parse(savedList));
    }, []);

    useEffect(() => {
        localStorage.setItem('fitlog_todays_plan', JSON.stringify(todaysPlan));
    }, [todaysPlan]);

    useEffect(() => {
        localStorage.setItem('fitlog_saved_items', JSON.stringify(savedItems));
    }, [savedItems]);

    const addToPlan = (workout) => {
        if (todaysPlan.find((item) => item.id === workout.id)) {
            alert('This exercise is already in today\'s plan!');
            return false;
        }
        if (todaysPlan.length >= 5) {
            alert('Cap of five lifts for today reached! Finish them, then load more.');
            return false;
        }
        setTodaysPlan((prev) => [...prev, workout]);
        return true;
    };
    const addToSaved = (workout) => {
        if (savedItems.find((item) => item.id === workout.id)) {
            setSavedItems((prev) => prev.filter((item) => item.id !== workout.id));
        } else {
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