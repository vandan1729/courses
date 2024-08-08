import { useState } from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import '/src/styling/CardContainer.css'

function MyCourseCardContainer({ header, heading, data }) {
  const [likedItems, setLikedItems] = useState({})

  const handleLikeClick = (id) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <div className="cardContainer">
      <div className="cardData">
        {data?.map((item, index) => (
          <div className="card" key={index}>
            <div className="cardImgContainer">
              <span
                className="cardImgIconSpan"
                onClick={() => handleLikeClick(item.id)}
              >
                {likedItems[item.id] ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
              <img src={item?.cardImg} alt="Card Img" className="cardImg" />
            </div>
            <div className="cardContent">
              <h4>{item.cardContent}</h4>
              <p className="cardAuthor">
                <IoPersonOutline />
                <p>{item.cardAuthor}</p>
              </p>
              {item.cardDescription === 'Completed!' ? (
                <p className="cardDescription" style={{ color: '#3DCBB1' }}>
                  {item.cardDescription}
                </p>
              ) : (
                <p className="cardDescription">{item.cardDescription}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCourseCardContainer
