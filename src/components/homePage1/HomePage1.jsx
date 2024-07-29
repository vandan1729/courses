import Navbar1 from './navbar/Navbar1'
import KitaniStudioCard from './kitani_Studio/KitaniStudioCard'
import TrendingCourse from './trendingCourse/TrendingCourse'
import PopularInstructor from './popular_Instructor/PopularInstructor'
import Footer from './footer/Footer'
import SubscribeCard from './subscribeCard/SubscribeCard'
import SliderComponent from './slider/SliderComponent'

function HomePage1() {
  return (
    <>
    
    <Navbar1/>
    <SliderComponent />
    <KitaniStudioCard />
    <TrendingCourse/>
    <PopularInstructor />
    <SubscribeCard />
    <Footer />
    
    </>
  )
}

export default HomePage1