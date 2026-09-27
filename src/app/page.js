import React from 'react';
import Banner from './component/banner';
import WorkoutCards from './component/workout';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkoutCards></WorkoutCards>
    </div>
  );
};

export default HomePage;