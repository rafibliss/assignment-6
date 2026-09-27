# FitLog

FitLog is a modern, responsive workout library and logging web app designed to help users discover exercises, build a realistic daily training schedule, and keep track of saved workouts.

It features an interactive workout catalog, detailed exercise views, and a dynamic daily planning system built with client-side state persistence.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Library:** React 19
* **Styling:** Tailwind CSS
* **Icons & Notifications:** Lucide React, React Toastify
* **State & Persistence:** React Context API + Browser `localStorage`

---

## ✨ Key Features

1. **Exercise Library & Search**: Explore workouts categorized by muscle groups, difficulty, equipment, and duration with visual cards and detail pages.
2. **5-Lift Daily Planner**: Build a focused workout plan capped at 5 exercises per day to maintain realistic training goals, featuring a dynamic summary row for total time, exercises, and calorie burn.
3. **Saved Workouts Section**: Bookmark favorite exercises to a dedicated "Saved" tab to quickly build future workout routines.
4. **Interactive Completion**: Mark workouts as complete directly inside "Today's Plan" with feedback powered by `react-toastify`.
5. **Persistent Local Storage**: Built with custom React Context synchronized with `localStorage` so items remain saved even after page refreshes or closing the browser.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── component/       # Shared UI components (Navbar, Footer, etc.)
│   ├── context/         # React Context for global state (PlanContext)
│   ├── my-plan/         # My Plan page with TodaysPlanTab & SavedTab
│   ├── woroutdetail/    # Dynamic workout details route [id]
│   ├── globals.css      # Global styles and Tailwind configuration
│   └── layout.jsx       # Root layout wrapping PlanProvider & ToastContainer