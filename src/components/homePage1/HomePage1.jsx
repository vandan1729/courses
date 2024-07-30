import Navbar1 from './navbar/Navbar1'
import KitaniStudioCard from './kitani_Studio/KitaniStudioCard'
import TrendingCourse from './trendingCourse/TrendingCourse'
import PopularInstructor from './popular_Instructor/PopularInstructor'
import SubscribeCard from './subscribeCard/SubscribeCard'
import SliderComponent from './slider/SliderComponent'
import Categories from './categories/Categories'
import HomeFooter from './footer/HomeFooter'

function HomePage1() {
  return (
    <>
    
    <Navbar1/>
    <SliderComponent />
    <Categories />
    <KitaniStudioCard />
    <TrendingCourse/>
    <PopularInstructor />
    <SubscribeCard />
    <HomeFooter />
    
    </>
  )
}

export default HomePage1