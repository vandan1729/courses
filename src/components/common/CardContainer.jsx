import {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateCardDetails } from '../../redux/features/unPaidWebinarSlice'
import { IoPersonOutline } from 'react-icons/io5'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

import CardRatingComponent from './CardRatingComponent'
import { toggleWishListItem } from '../../redux/features/wishListSlice'

import '/src/styling/CardContainer.css'

function CardContainer({ header, heading, data }) {
  const cardValue = useSelector((state) => state.card.cardValue)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [likedItems, setLikedItems] = useState({})


  // Filter data based on cardValue from Redux store
  const filteredData = data?.filter(
    (item) =>
      item.cardCategory === cardValue || cardValue === 'All Recommendation',
  )

  const wishListItems = useSelector((state) => state.wishList.wishListItems)

  const handleLikeClick = (item) => {
    dispatch(toggleWishListItem(item))
  }

  const handleImgClick = (item) => {
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
        courseName: item.cardContent,
        courseDetails: item.cardDescription,
        courseImage: item?.cardImg,
      }),
    )
    navigate('/unPaidWebinarPage')
  }

    // Update liked items state when wishlist changes
    useEffect(() => {
      const updatedLikedItems = {}
      wishListItems.forEach((item) => {
        updatedLikedItems[item.id] = true
      })
      setLikedItems(updatedLikedItems)
      console.log(updatedLikedItems)
    }, [wishListItems])

  return (
    <div className="cardContainer">
      {filteredData && filteredData.length > 0 ? (
        <>
          <h3>{header}</h3>
          <span>{heading}</span>
          <div className="cardData">
            {filteredData.map((item, index) => (
              <div className="card" key={index}>
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
                <div className="cardContent">
                  <h4>{item.cardContent}</h4>
                  <p className="cardAuthor">
                    <IoPersonOutline />
                    <span>{item.cardAuthor}</span>
                  </p>
                  <p className="cardDescription">{item.cardDescription}</p>
                  <div className="cardRatingSpan">
                    <div className="cardRating">
                      <CardRatingComponent cardRating={item.cardRating} />
                    </div>
                    <p>{item.cardTotalRating}</p>
                  </div>

                  <p className="cardNewPrice">
                    ${item.cardNewPrice}
                    <span className="cardOldPrice">${item.cardOldPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="noDataMessage">No Data In "{header}"</h2>
      )}
    </div>
  )
}

export default CardContainer
