import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoPersonOutline } from 'react-icons/io5';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toggleWishListItem } from '../../redux/features/wishListSlice';
import '../../styling/CardContainer.css';

function WishlistPageContainer({ header, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  const wishListValue = useSelector((state) => state.wishList.wishListValue);
  
  const [likedItems, setLikedItems] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  // Handle the click on the 'Explore Courses' button
  const handleExploreCoursesClick = () => {
    navigate('/');
  };

  // Handle adding/removing items from the wishlist
  const handleLikeClick = (item) => {
    dispatch(toggleWishListItem(item));
  };

  // Filter data based on wishlist value and wishlist items
  useEffect(() => {
    let updatedFilteredData = [];

    if (wishListValue === 'All Courses') {
      updatedFilteredData = data;
    } else if (wishListValue === 'Completed') {
      updatedFilteredData = data.filter(item => item.cardDescription === 'Completed!');
    } else if (wishListValue === 'Wishlist') {
      updatedFilteredData = data.filter(item => wishListItems.some(wishItem => wishItem.id === item.id));
    } else {
      updatedFilteredData = data.filter(item => item.cardContent.includes(wishListValue));
    }

    setFilteredData(updatedFilteredData);
  }, [wishListValue, data, wishListItems]);

  // Update liked items state when wishlist changes
  useEffect(() => {
    const updatedLikedItems = {};
    wishListItems.forEach(item => {
      updatedLikedItems[item.id] = true;
    });
    setLikedItems(updatedLikedItems);
  }, [wishListItems]);

  return (
    <div className="cardContainer">
      <h3>{header}</h3>
      <span>List of your {header}</span>
      <div className="cardData">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="card" key={item.id}>
              <div className="cardImgContainer">
                <span
                  className="cardImgIconSpan"
                  onClick={() => handleLikeClick(item)}
                  aria-label={likedItems[item.id] ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {likedItems[item.id] ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
                <img src={item?.cardImg} alt="Card Img" className="cardImg" />
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
      {header === 'Wishlist' && (
        <button
          className="exploreCoursesBtn"
          onClick={handleExploreCoursesClick}
        >
          Explore Courses
        </button>
      )}
    </div>
  );
}

export default WishlistPageContainer;
