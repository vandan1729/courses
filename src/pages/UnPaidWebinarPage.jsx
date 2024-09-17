import React, { useEffect, useState } from 'react'
import { BsPeople } from 'react-icons/bs'
import { CiViewList } from 'react-icons/ci'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FaVolumeHigh } from 'react-icons/fa6'
import { MdShoppingCart } from 'react-icons/md'
import { MdOutlineRateReview } from 'react-icons/md'
import { MdOutlineChromeReaderMode } from 'react-icons/md'
import { MdLiveTv } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import SubscribeCard from '../components/homePage1/SubscribeCard'
import Layout from '../layoutComponent/Layout'
import { setBuyProduct } from '../redux/features/buyProductSlice'
import { toggleWishListItem } from '../redux/features/wishListSlice'
import '../styling/UnPaidWebinarPage.css'
import img2 from '/src/assets/homePage1/PaidWebinar/image2.jpg'
import img3 from '/src/assets/homePage1/paidOfflineVideo/thumbnail.png'

function UnPaidWebinarPage() {
  const {
    price,
    discount,
    details,
    courseName,
    courseDetails,
    courseImage,
    id,
  } = useSelector((state) => state.unPaidWebinar)
  const wishListItems = useSelector((state) => state.wishList.wishListItems)
  const buyProductId = useSelector((state) => state.buyProduct.items)
  const auth = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const [isInWishlist, setIsInWishlist] = useState(
    wishListItems.some((item) => item.id === id),
  )

  const [isInCart, setIsInCart] = useState(
    buyProductId.some((product) => product.id === id),
  )

  const opacityValue = useSelector((state) => state.modal.opacityValue)

  useEffect(() => {
    setIsInCart(buyProductId.some((product) => product.id === id))
  }, [buyProductId, courseName])

  const handleWishlistClick = () => {
    if (auth) {
      const cardData = {
        id: id,
        cardImg: courseImage,
        cardContent: courseName,
        cardAuthor: 'Kitani Studio',
        cardDescription:
          courseDetails || 'Default course description goes here...',
      }
      dispatch(toggleWishListItem(cardData))
      setIsInWishlist(!isInWishlist)
    } else {
      toast.warn('Please Login To Add In Wishlist')
    }
  }

  const handleBuyProduct = () => {
    if (auth) {
      const productData = {
        id: id,
        cardImg: courseImage,
        cardContent: courseName,
        cardAuthor: 'Kitani Studio',
        cardDescription:
          courseDetails || 'Default course description goes here...',
        cardPrice: price.newPrice,
        cardDiscountPrice: price.oldPrice,
      }
      dispatch(setBuyProduct(productData))
      toast.success('Product added to cart!')
    } else {
      toast.warn('Please Login To Buy Product')
    }
  }

  return (
    <>
      <Layout>
        <div
          className="unPaidWebinarVideo no-select"
          style={{
            opacity: opacityValue ? '0.5' : '1',
            pointerEvents: opacityValue ? 'none' : 'auto',
          }}
        >
          <div className="unPaidWebinarCourseDetails">
            <img src={courseImage} alt="Video" />
          </div>

          <div className="unPaidWebinarDetails">
            <div className="unPaidWebinarPrice">
              <span className="unpaidWebinarNewPrice">${price.newPrice}</span>
              <span className="unpaidWebinarOldPrice">${price.oldPrice}</span>
            </div>
            <div className="unPaidWebinarDiscount">
              <span className="unPaidWebinarDiscountNumber">{discount}</span>
            </div>

            <div className="unPaidWebinarDetailsBtn">
              <button
                className="unPaidWebinarDetailsBuyBtn"
                onClick={handleBuyProduct}
                disabled={isInCart} // Disable button if already in cart
              >
                <MdShoppingCart className="unPaidWebinarDetailsCartIcon" />
                {isInCart ? 'In Cart' : 'Add To Cart'}
              </button>
              <button
                className="unPaidWebinarDetailsWishlistBtn"
                onClick={handleWishlistClick}
                aria-label={
                  isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
                }
              >
                {isInWishlist ? (
                  <FaHeart
                    color="red"
                    className="unPaidWebinarDetailsHeartIcon"
                  />
                ) : (
                  <FaRegHeart className="unPaidWebinarDetailsHeartIcon" />
                )}
                {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            <div className="unPaidWebinarInfo">
              <span className="unPaidWebinarInfoSection">
                <CiViewList className="unPaidWebinarInfoIcon" />{' '}
                {details.sections}
              </span>
              <span className="unPaidWebinarInfoLecture">
                <MdOutlineChromeReaderMode className="unPaidWebinarInfoIcon" />
                {details.lectures}
              </span>
              <span className="unPaidWebinarInfoTotalLength">
                <MdLiveTv className="unPaidWebinarInfoIcon" />
                {details.length}
              </span>
              <span className="unPaidWebinarInfoLanguage">
                <FaVolumeHigh className="unPaidWebinarInfoIcon" />
                {details.language}
              </span>
            </div>
          </div>
        </div>

        <div className="unPaidWebinarCourseInfo">
          <div className="unPaidWebinarCourseSummary">
            <h2>{courseName || 'Default Course Name'}</h2>
            <div className="unPaidWebinarCourseThumbnail">
              <div className="unPaidWebinarCourseCreator">
                <img src={img3} alt="Thumbnail" />
                <div className="unPaidWebinarCourseCreatorText">
                  <p>Kitani Studio</p>
                  <p>Design Studio</p>
                </div>
              </div>
              <div className="unPaidWebinarCourseStats">
                <span className="unPaidWebinarCourseStatsSpan">
                  <p className="unPaidWebinarCourseStatsP">
                    <BsPeople className="unPaidWebinarCourseStatsIcons" />
                    2.3k
                  </p>
                </span>
                <span className="unPaidWebinarCourseStatsSpan">
                  <p className="unPaidWebinarCourseStatsP">
                    <MdOutlineRateReview className="unPaidWebinarCourseStatsIcons" />
                    1.4k
                  </p>
                </span>
              </div>
            </div>
            <div className="unPaidWebinarCourseDescription">
              <h4>About Course</h4>
              <p>
                {courseDetails || 'Default course description goes here...'}
              </p>
            </div>
          </div>
          <div className="unPaidWebinarCourseImage">
            <div className="unPaidWebinarCourseImageText">
              <div>
                <p style={{ fontSize: '18px', fontWeight: '600' }}>WEBINAR</p>
                <p style={{ fontWeight: '300' }}>August 16, 2024</p>
              </div>

              <div className="unPaidWebinarCourseImagePTextDiv">
                <p className="unPaidWebinarCourseImagePText">
                  Photography <br /> Manual <br />
                  Scratch Course
                </p>
              </div>

              <div className="unPaidWebinarCoursePTextDiv2">
                <p>Kitani Sarasvati</p>
              </div>

              <button className="unPaidWebinarCourseBtn">Get it Now</button>
            </div>
            <img src={img2} alt="Course" />
          </div>
        </div>

        <SubscribeCard />
      </Layout>
    </>
  )
}

export default UnPaidWebinarPage
