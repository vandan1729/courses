import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setWishListValue,
  setAllCourseCardData,
} from '../redux/features/wishListSlice'
import WishlistPageContainer from '../components/common/WishlistPageContainer'
import { myCourseCardData } from '../data/MyCourseCardData'
import Layout from '../layoutComponent/Layout'

import '../styling/WishlistPage.css'

function WishlistPage() {
  const dispatch = useDispatch()
  const wishListValue = useSelector((state) => state.wishList.wishListValue)

  useEffect(() => {
    dispatch(setAllCourseCardData(myCourseCardData))
  }, [dispatch])

  const handleClick = (value) => {
    dispatch(setWishListValue(value))
  }

  const wishlistData = ['All Courses', 'Courses', 'Wishlist', 'Completed']

  return (
    <>
      <Layout>
        <div className="wishlistPageMainDiv">
          <div className="wishlistPageTitle">
            <h2>My Course</h2>
          </div>
          <div className="wishlistPageSideBar">
            {wishlistData.map((wish, index) => (
              <p
                key={index}
                className={`sidebarOption ${wishListValue === wish ? 'selected' : ''}`}
                onClick={() => handleClick(wish)}
              >
                {wish}
              </p>
            ))}
          </div>

          <WishlistPageContainer />
        </div>
      </Layout>
    </>
  )
}

export default WishlistPage
