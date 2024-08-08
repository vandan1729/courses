import { useContext } from 'react'
import { FilteredData } from '../data/MyCourseCardData'
import { WishListContext } from '../contextProvider/WishlistFilter'

import Navbar2 from '../components/homePage2/Navbar2'
import FooterComponent from '../components/common/FooterComponent'
import WishlistPageContainer from '../components/common/WishlistPageContainer'

import '../styling/WishlistPage.css'

function WishlistPage() {
  const { newWishListData, wishListValue } = useContext(WishListContext)

  const handleClick = (value) => {
    newWishListData(value)
  }

  const wishlistData = ['All Courses', 'Courses', 'Wishlist', 'Completed']
  const filteredCourses = FilteredData()

  return (
    <>
      <Navbar2 />
      <div className="wishlistPageMainDiv">
        <div className="wishlistPageTitle">
          <h2>My Course</h2>
        </div>
        <div className="wishlistPageSideBar">
          {wishlistData.map((wish, index) => (
            <p
              key={index}
              className={`sidebarOption ${
                wishListValue === wish ? 'selected' : ''
              }`}
              onClick={() => handleClick(wish)}
            >
              {wish}
            </p>
          ))}
        </div>

        <WishlistPageContainer data={filteredCourses} header={wishListValue} />
      </div>
      <FooterComponent />
    </>
  )
}

export default WishlistPage
