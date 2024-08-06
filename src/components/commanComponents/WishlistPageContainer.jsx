import { useContext, useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishListContext } from "../contextProvider/WishlistFilter";
import "/src/components/styling/CardContainer.css";
import { useNavigate } from "react-router-dom";

function WishlistPageContainer({ header, data }) {
  const { wishListItems, addToWishList, wishListValue } =
    useContext(WishListContext);
  const [likedItems, setLikedItems] = useState({});
  const [exploreCoursesBtn, setExploreCoursesBtn] = useState(false);

  const navigate = useNavigate();

  const handleExploreCoursesClick = () => {
    navigate('/')
  }

  useEffect(() => {
    setExploreCoursesBtn(wishListValue === "Wishlist");
  }, [wishListValue]);

  const handleLikeClick = (item) => {
    addToWishList(item);
    setLikedItems((prevState) => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
  };

  return (
    <div className="cardContainer">
      <h3>{header}</h3>
      <span>List of your {header}</span>
      <div className="cardData">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="card" key={index}>
              <div className="cardImgContainer">
                <span
                  className="cardImgIconSpan"
                  onClick={() => handleLikeClick(item)}
                >
                  {likedItems[item.id] ||
                  wishListItems.find((wishItem) => wishItem.id === item.id) ? (
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
                      item.cardDescription === "Completed!"
                        ? "#3DCBB1"
                        : "inherit",
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
        {exploreCoursesBtn && <button className="exploreCoursesBtn" onClick={handleExploreCoursesClick}>Explore Courses</button>}
    </div>
  );
}

export default WishlistPageContainer;
