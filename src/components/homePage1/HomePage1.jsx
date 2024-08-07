import Navbar1 from "./Navbar1";
import SubscribeCard from "./SubscribeCard";
import SliderComponent from "./SliderComponent";
import Categories from "./Categories";
import HomeFooter from "../common/FooterComponent";
import { KitaniStudioCardData } from "../../data/KitaniStudioCard";
import { TrendingCourseData } from "../../data/TrendingCourse";
import { PopularInstructorData } from "../../data/PopularInstructor";
import CardContainer from "../common/CardContainer";
import InstructorCard from "../common/InstructorCard";


function HomePage1() {
  return (
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
  );
}

export default HomePage1;
