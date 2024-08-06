import { useContext } from "react";
import Navbar2 from "../homePage2/Navbar2";
import MyCourseCardData from "../homePage1/MyCourseCardData";
import { WishListContext } from "../contextProvider/WishlistFilter";
import "../styling/WishlistPage.css";
import FooterComponent from "./FooterComponent";

function WishlistPage() {
  const { newWishListData, wishListValue } = useContext(WishListContext);

  const handleClick = (value) => {
    newWishListData(value);
  };

  const wishlistData = ["All Courses", "Courses", "Wishlist", "Completed"];

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
                wishListValue === wish ? "selected" : ""
              }`}
              onClick={() => handleClick(wish)}
            >
              {wish}
            </p>
          ))}
        </div>
        <MyCourseCardData />
      </div>
      <FooterComponent />
    </>
  );
}

export default WishlistPage;
