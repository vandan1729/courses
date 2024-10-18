import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateOfflineCardDetails } from '../../redux/features/paidOfflineVideo'
import { toggleWishListItem } from '../../redux/features/wishListSlice'
import '../../styling/CardContainer.css'
import { useGetWishlistQuery } from '../../api/wishlist/wishlistApi'
import { colgroup } from 'framer-motion/client'

function WishlistPageContainer() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const myCourseCardDataFromStore =
    useSelector((state) => state.wishList.allCourseCardData) || []
  const wishListItems = useSelector((state) => state.wishList.wishListItems)
  const wishListValue = useSelector((state) => state.wishList.wishListValue)
  const buyCourseData = useSelector((state) => state.wishList.buyCourseData)

  const [likedItems, setLikedItems] = useState({})
  const [filteredData, setFilteredData] = useState([])
  const {data} = useGetWishlistQuery()
  console.log(data)

  useEffect(() => {
    const updatedLikedItems = {}
    wishListItems.forEach((item) => {
      updatedLikedItems[item.id] = true
    })
    setLikedItems(updatedLikedItems)
  }, [wishListItems])

  useEffect(() => {
    const filterDataByValue = () => {
      switch (wishListValue) {
        case 'All Courses':
          return myCourseCardDataFromStore
        case 'Completed':
          return myCourseCardDataFromStore.filter(
            (item) => item.cardDescription === 'Completed!',
          )
        case 'Wishlist':
          return wishListItems
        case 'Courses':
          return buyCourseData
        default:
          return myCourseCardDataFromStore.filter((item) =>
            item.cardContent.includes(wishListValue),
          )
      }
    }
    setFilteredData(filterDataByValue())
  }, [wishListValue, myCourseCardDataFromStore, wishListItems, buyCourseData])

  const handleExploreCoursesClick = () => navigate('/')

  const handleLikeClick = (item) => dispatch(toggleWishListItem(item))

  const handleImgClick = (item) => {
    if (wishListValue === 'Courses') {
      dispatch(
        updateOfflineCardDetails({
          price: {
            newPrice: item.cardNewPrice,
            oldPrice: item.cardOldPrice,
          },
          discount: item.cardDiscount || '20% OFF',
          details: {
            sections: item.cardSections || 'No Sections',
            lectures: item.cardLectures || 'NO Lectures',
            length: item.cardLength || 'NO length',
            language: item.cardLanguage || 'English',
          },
          id: item.id,
          courseName: item.cardContent,
          courseDetails: item.cardDescription,
          courseImage: item?.cardImg,
        }),
      )
      navigate('/paidOfflineVideo1')
    }
  }

  return (
    <div className="cardContainer">
      <h3>{wishListValue}</h3>
      <span>List of your {wishListValue}</span>
      <div className="cardData">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="card" key={item.id}>
              <div className="cardImgContainer">
                <span
                  className="cardImgIconSpan"
                  onClick={() => handleLikeClick(item)}
                  aria-label={
                    likedItems[item.id]
                      ? 'Remove from wishlist'
                      : 'Add to wishlist'
                  }
                >
                  {likedItems[item.id] ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
                <img
                  src={item?.cardImg}
                  alt="Card Img"
                  className="cardImg"
                  onClick={() => handleImgClick(item)}
                />
              </div>
              <div className="cardContent">
                <h4>{item.cardContent}</h4>
                <p className="cardAuthor">
                  <IoPersonOutline />
                  <span>{item.cardAuthor}</span>
                </p>
                <p
                  className="cardDescription"
                  style={{
                    color:
                      item.cardDescription === 'Completed!'
                        ? '#3DCBB1'
                        : 'inherit',
                  }}
                >
                  {item.cardDescription}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
      {wishListValue === 'Wishlist' && (
        <button
          className="exploreCoursesBtn"
          onClick={handleExploreCoursesClick}
        >
          Explore Courses
        </button>
      )}
    </div>
  )
}

export default WishlistPageContainer
