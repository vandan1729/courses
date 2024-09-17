import { CompleteCourseCardData } from '../../data/CourseData'
import { KitaniStudioCardData } from '../../data/KitaniStudioCard'
import { PopularInstructorData } from '../../data/PopularInstructor'
import { TrendingCourseData } from '../../data/TrendingCourse'
import Layout from '../../layoutComponent/Layout'
import CardContainer from '../common/CardContainer'
import HomeFooter from '../common/FooterComponent'
import InstructorCard from '../common/InstructorCard'
import Categories from '../homePage1/Categories'
import SubscribeCard from '../homePage1/SubscribeCard'
import Navbar2 from './Navbar2'

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
  )
}

export default HomePage2
