import Navbar2 from "./Navbar2";
import KitaniStudioCard from "/src/components/homePage1/KitaniStudioCard";
import TrendingCourse from "/src/components/homePage1/TrendingCourse";
import PopularInstructor from "/src/components/homePage1/PopularInstructor";
import SubscribeCard from "/src/components/homePage1/SubscribeCard";
import Categories from "/src/components/homePage1/Categories";
import CourseData from "./CourseData";
import HomeFooter from "/src/components/commanComponents/FooterComponent";

function HomePage2() {
  return (
    <>
      <Navbar2 />
      <CourseData />
      <Categories />
      <KitaniStudioCard />
      <TrendingCourse />
      <PopularInstructor />
      <SubscribeCard />
      <HomeFooter />
    </>
  );
}

export default HomePage2;
