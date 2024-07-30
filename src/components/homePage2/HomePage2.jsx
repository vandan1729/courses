import Navbar2 from "./navbar2/Navbar2";
import KitaniStudioCard from "../homePage1/kitani_Studio/KitaniStudioCard";
import TrendingCourse from "../homePage1/trendingCourse/TrendingCourse";
import PopularInstructor from "../homePage1/popular_Instructor/PopularInstructor";
import SubscribeCard from "../homePage1/subscribeCard/SubscribeCard";
import Categories from "../homePage1/categories/Categories";
import CourseData from "./course_Card_Data/CourseData";
import HomeFooter from "../homePage1/footer/HomeFooter";

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
