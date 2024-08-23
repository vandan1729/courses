import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWishListValue, setAllCourseCardData } from '../redux/features/wishListSlice';
import Navbar2 from '../components/homePage2/Navbar2';
import FooterComponent from '../components/common/FooterComponent';
import WishlistPageContainer from '../components/common/WishlistPageContainer';
import { myCourseCardData } from '../data/MyCourseCardData';
import '../styling/WishlistPage.css';

function WishlistPage() {
  const dispatch = useDispatch();
  const wishListValue = useSelector((state) => state.wishList.wishListValue);
  const wishListItems = useSelector((state) => state.wishList.wishListItems) || [];
  const myCourseCardDataFromStore = useSelector((state) => state.wishList.allCourseCardData) || [];

  useEffect(() => {
    dispatch(setAllCourseCardData(myCourseCardData));
  }, [dispatch]);

  const handleClick = (value) => {
    dispatch(setWishListValue(value));
  };

  // Determine which data to use based on wishListValue
  const displayedData = wishListValue === 'Wishlist' ? wishListItems : myCourseCardDataFromStore;

  const wishlistData = ['All Courses', 'Courses', 'Wishlist', 'Completed'];

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
              className={`sidebarOption ${wishListValue === wish ? 'selected' : ''}`}
              onClick={() => handleClick(wish)}
            >
              {wish}
            </p>
          ))}
        </div>

        <WishlistPageContainer 
          data={displayedData} 
        />
       
      </div>
      <FooterComponent />
    </>
  );
}

export default WishlistPage;
