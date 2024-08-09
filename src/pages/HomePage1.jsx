import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/homePage1/Navbar1';
import SubscribeCard from '../components/homePage1/SubscribeCard';
import SliderComponent from '../components/homePage1/SliderComponent';
import Categories from '../components/homePage1/Categories';
import HomeFooter from '../components/common/FooterComponent';
import CardContainer from '../components/common/CardContainer';
import InstructorCard from '../components/common/InstructorCard';

import { KitaniStudioCardData } from '../data/KitaniStudioCard';
import { TrendingCourseData } from '../data/TrendingCourse';
import { PopularInstructorData } from '../data/PopularInstructor';
import LoadingPage from './LoadingPage';

function HomePage1() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar1 />
          <SliderComponent />
          <Categories />

          <CardContainer
            data={KitaniStudioCardData}
            header="More from Kitani Studio"
            heading="We know the best things for You. Top picks for You"
          />

          <CardContainer
            data={TrendingCourseData}
            header="Trending Course"
            heading="We know the best things for You.  Top picks for You."
          />

          <InstructorCard
            header="Popular Instructors"
            heading="We know the best things for You. Top picks for You."
            data={PopularInstructorData}
          />

          <SubscribeCard />
          <HomeFooter />
        </>
      )}
    </>
  );
}

export default HomePage1;
