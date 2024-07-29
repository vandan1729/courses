import Navbar2 from './navbar2/Navbar2'
import KitaniStudioCard from '../homePage1/kitani_Studio/KitaniStudioCard'
import TrendingCourse from '../homePage1/trendingCourse/TrendingCourse'
import PopularInstructor from '../homePage1/popular_Instructor/PopularInstructor'
import SubscribeCard from '../homePage1/subscribeCard/SubscribeCard'
import Footer from '../homePage1/footer/Footer'

function HomePage2() {
  return (
    <>
    <Navbar2 />
    <KitaniStudioCard/>
    <TrendingCourse />
    <PopularInstructor />
    <SubscribeCard />
    <Footer />
    </>
  )
}

export default HomePage2