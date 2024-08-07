import { useContext, useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "/src/assets/logo.png";
import CartMenu from "../homePage1/CartMenu";

import "../../styling/Navbar2.css";
import { UserContext } from "../../contextProvider/UserContextProvider";
import { WishListContext } from "../../contextProvider/WishlistFilter";
import { useNavigate } from "react-router-dom";

function Navbar2() {
  const { userData } = useContext(UserContext);
  const { newWishListData } = useContext(WishListContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isBrowseArrowUp, setIsBrowseArrowUp] = useState(false);

  const cartDropdownRef = useRef(null);
  const naviGate = useNavigate();

  const toggleCartMenu = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  const closeCartMenu = () => {
    setIsCartVisible(false);
  };

  const handleNavigate = () => {
    naviGate("/loginPage");
  };

  const handleMyCourses = () => {
    naviGate("/wishlistPage");
    newWishListData("All Courses");
  };

  const handleAccountSetting = () => {
    naviGate("/myAccount1");
  };

  const handleMainLogoClick = () => {
    naviGate("/");
  };

  const handleWishlistClick = () => {
    naviGate("/wishlistPage");
    newWishListData("Wishlist");
  };

  const browse = [
    "Design",
    "Programming",
    "Business & Marketing",
    "Photo & Video",
    "Writing",
  ];

  const toggleBrowseDropdown = () => {
    setIsBrowseOpen((prev) => !prev);
    setIsBrowseArrowUp(!isBrowseArrowUp);
  };

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setIsCartDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar2">
      <div className="navbar2Logo">
        <img src={logo} alt="Logo" onClick={handleMainLogoClick} />
        <span onClick={handleMainLogoClick}>My Course.io</span>
        <div className="dropdown2">
          <button onClick={toggleBrowseDropdown} className="dropdown2Toggle">
            Browse {isBrowseArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {isBrowseOpen && (
            <ul className="dropdown2Menu">
              {browse.map((item) => (
                <li key={item} className="dropdown2Item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar2Search">
        <input type="text" placeholder="Search For Courses" />
        <IoIosSearch className="navbar2SearchIcon" />
      </div>
      <div className="navbar2Menu">
        <span className="navbar2Item">Become Instructor</span>
        <MdShoppingCart className="navbar2CartIcon" onClick={toggleCartMenu} />
        <FaRegBell className="navbar2CartIcon" />
        <div className="cartDropdownContainer" ref={cartDropdownRef}>
          <p className="navbar2CartEmojiIcon" onClick={toggleCartDropdown}>
            😎
          </p>
          {isCartDropdownOpen && (
            <div className="cartDropdownMenu">
              <p>
                {userData.userFirstName} {userData.userLastName}
              </p>
              <p className="cartDropdownMenuEmailId">{userData.userEmail}</p>
              <p onClick={handleMyCourses}>My Courses</p>
              <p>My Cart</p>
              <p
                className="cartDropdownWhishlist"
                onClick={handleWishlistClick}
              >
                Wishlist
              </p>
              <p>Notifications</p>
              <p
                className="cartDropdownAccountSetting"
                onClick={handleAccountSetting}
              >
                Account Settings
              </p>
              <p className="cartDropdownAccountLogout" onClick={handleNavigate}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
      <CartMenu isVisible={isCartVisible} onClose={closeCartMenu} />
    </div>
  );
}

export default Navbar2;
