import { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import logo from "/src/assets/logo.png";
import CartMenu from '../homePage1/CartMenu'; 


import "../styling/Navbar2.css";
import { UserContext } from "../profileContext/UserContextProvider";
import { useNavigate } from "react-router-dom";

function Navbar2() {

  const { userData } = useContext(UserContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const naviGate = useNavigate();

  const toggleCartMenu = () => {
    setIsCartVisible(prevState => !prevState);
  };

  const closeCartMenu = () => {
    setIsCartVisible(false);
  };

  const handleNavigate = () => {
    naviGate('/loginPage')
  }

  const handleMyCourses = () => {
    naviGate('/myCoursePage')
  }

  const handleAccountSetting = () => {
    naviGate('/myAccount1')
  }

  const handleMainLogoClick = () => {
    naviGate('/')
  }

  const browse = [
    "Design",
    "Programming",
    "Business & Marketing",
    "Photo & Video",
    "Writing",
  ];

  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isBrowseArrowUp, setIsBrowseArrowUp] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  const toggleBrowseDropdown = () => {
    setIsBrowseOpen((prev) => !prev);
    setIsBrowseArrowUp(!isBrowseArrowUp);
  };

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar2">
      <div className="navbar2Logo">
        <img src={logo} alt="Logo" onClick={handleMainLogoClick}/>
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
        <MdShoppingCart className="navbar2CartIcon" onClick={toggleCartMenu}/>
        <FaRegBell className="navbar2CartIcon" />
        <div className="cartDropdownContainer">
          <p className="navbar2CartEmojiIcon" onClick={toggleCartDropdown}>
            😎
          </p>
          {isCartDropdownOpen && (
            <div className="cartDropdownMenu">
              <p>{userData.userFirstName}{" "}{userData.userLastName}</p>
              <p className="cartDropdownMenuEmailId">{userData.userEmail}</p>
              <p onClick={handleMyCourses}>My Courses</p>
              <p>My Cart</p>
              <p className="cartDropdownWhishlist">Wishlist</p>
              <p>Notifications</p>
              <p className="cartDropdownAccountSetting" onClick={handleAccountSetting}>Account Settings</p>
              <p className="cartDropdownAccountLogout" onClick={handleNavigate}>Logout</p>
            </div>
          )}
        </div>
      </div>
      <CartMenu isVisible={isCartVisible} onClose={closeCartMenu} />
    </div>
  );
}

export default Navbar2;
