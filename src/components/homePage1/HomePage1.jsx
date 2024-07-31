import Navbar1 from './Navbar1'
import KitaniStudioCard from './KitaniStudioCard'
import TrendingCourse from './TrendingCourse'
import PopularInstructor from './PopularInstructor'
import SubscribeCard from './SubscribeCard'
import SliderComponent from './SliderComponent'
import Categories from './Categories'
import HomeFooter from '../commanComponents/FooterComponent'

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