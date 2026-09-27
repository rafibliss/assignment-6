import React from 'react';
import Banner from './component/banner';
import WorkoutCards from './component/workout';
import Footer from './component/footer';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkoutCards></WorkoutCards>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;