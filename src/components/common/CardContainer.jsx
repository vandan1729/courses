import { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateCardDetails } from '../../redux/features/unPaidWebinarSlice'
import { updateOfflineCardDetails } from '../../redux/features/paidOfflineVideo'
import { IoPersonOutline } from 'react-icons/io5'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

import CardRatingComponent from './CardRatingComponent'
import CardLoader from './Loader/CardLoader'
import { toast } from 'react-toastify'
import { toggleWishListItem } from '../../redux/features/wishListSlice'

import '/src/styling/CardContainer.css'

function CardContainer({ header, heading, data }) {
  const [loadingCards, setLoadingCards] = useState([]) // Loading state for each card
  const cardValue = useSelector((state) => state.card.cardValue)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [likedItems, setLikedItems] = useState({})

  const auth = useSelector((state) => state.auth.isAuthenticated)

  // Memoize the filteredData to avoid recalculating it on every render
  const filteredData = useMemo(() => {
    return data?.filter(
      (item) =>
        item.cardCategory === cardValue || cardValue === 'All Recommendation',
    )
  }, [data, cardValue])

  const wishListItems = useSelector((state) => state.wishList.wishListItems)
  const buyCourseData = useSelector((state) => state.wishList.buyCourseData)
  const buyCourseIds = buyCourseData.map((course) => course.id)

  const finalFilteredData = filteredData?.filter((item) =>
    buyCourseIds.includes(item.id),
  )

  const handleLikeClick = (item) => {
    if (auth) {
      dispatch(toggleWishListItem(item))
    } else {
      toast.error('Please Login!!')
    }
  }

  const handleImgClick = (item) => {
    const isInFinalFilteredData = finalFilteredData?.some(
      (finalItem) => finalItem.id === item.id,
    )
    if (!isInFinalFilteredData) {
      dispatch(
        updateCardDetails({
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
      navigate(`/unPaidWebinarPage/${item.cardContent}`)
    } else if (isInFinalFilteredData) {
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
      navigate(`/paidOfflineVideo1`)
    }
  }

  // Update liked items state when wishlist changes
  useEffect(() => {
    const updatedLikedItems = {}
    wishListItems.forEach((item) => {
      updatedLikedItems[item.id] = true
    })
    setLikedItems(updatedLikedItems)
  }, [wishListItems])

  // Set loading to false after 2 seconds for each card
  useEffect(() => {
    const loaders = Array(filteredData.length).fill(true)
    setLoadingCards(loaders)

    const timer = setTimeout(() => {
      setLoadingCards(Array(filteredData.length).fill(false))
    }, 3000)

    return () => clearTimeout(timer)
  }, [filteredData])

  return (
    <div className="cardContainer">
      {filteredData && filteredData.length > 0 ? (
        <>
          <h3>{header}</h3>
          <span>{heading}</span>
          <div className="cardData">
            {filteredData.map((item, index) => {
              const isInFinalFilteredData = finalFilteredData?.some(
                (finalItem) => finalItem.id === item.id,
              )

              return (
                <div className="card" key={index}>
                  {loadingCards[index] ? (
                    <CardLoader /> // Show loader while loading is true
                  ) : (
                    <>
                      <span
                        className="cardImgIconSpan"
                        onClick={() => handleLikeClick(item)}
                        aria-label={
                          likedItems[item.id]
                            ? 'Remove from wishlist'
                            : 'Add to wishlist'
                        }
                      >
                        {auth ? (
                          likedItems[item.id] ? (
                            <FaHeart color="red" className="heartLiked" />
                          ) : (
                            <FaRegHeart className="heartDisLiked" />
                          )
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
                      <div
                        className="cardContent"
                        onClick={() => handleImgClick(item)}
                      >
                        <h4>{item.cardContent}</h4>
                        <p className="cardAuthor">
                          <IoPersonOutline />
                          <span>{item.cardAuthor}</span>
                        </p>
                        <p className="cardDescription">
                          {item.cardDescription}
                        </p>
                        <div className="cardRatingSpan">
                          <div className="cardRating">
                            <CardRatingComponent cardRating={item.cardRating} />
                          </div>
                          <p>{item.cardTotalRating}</p>
                        </div>

                        {!isInFinalFilteredData ? (
                          <p className="cardNewPrice">
                            ${item.cardNewPrice}
                            <span className="cardOldPrice">
                              ${item.cardOldPrice}
                            </span>
                          </p>
                        ) : (
                          <div
                            className="goTOCourseBtnDiv"
                            onClick={() => handleImgClick(item)}
                          >
                            <button className="goToCourseBtn">
                              Go To Course
                            </button>
                            <FaArrowRightLong />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <h2 className="noDataMessage">No Data In "{header}"</h2>
      )}
    </div>
  )
}

export default CardContainer
