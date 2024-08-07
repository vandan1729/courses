import Navbar2 from "./Navbar2";
import { KitaniStudioCardData } from "../../data/KitaniStudioCard";
import { TrendingCourseData } from "../../data/TrendingCourse";
import { PopularInstructorData } from "../../data/PopularInstructor";
import SubscribeCard from "../homePage1/SubscribeCard";
import Categories from "../homePage1/Categories";
import { CompleteCourseCardData } from "../../data/CourseData";
import HomeFooter from "../common/FooterComponent";
import CardContainer from "../common/CardContainer";
import InstructorCard from "../common/InstructorCard";
import Layout from "../../layoutComponent/Layout";

function HomePage2() {
  return (
    <>
      <Layout>
        <CardContainer
          header="Complete your Course"
          heading="We know the best things for You.  Top picks for You."
          data={CompleteCourseCardData}
        />

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
      </Layout>
    </>
  );
}

export default HomePage2;
