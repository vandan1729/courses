// src/components/homePage2/Navbar2.jsx
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSearch } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { setWishListValue } from '../../redux/features/wishListSlice';
import { useEffect, useRef, useState } from 'react';

import {setUserData} from "../../redux/features/userDataSlice"

import logo from '/src/assets/logo.png';
import CartMenu from '../homePage1/CartMenu';

import '../../styling/Navbar2.css';

function Navbar2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access Redux state
  const userData = useSelector(state => state.user);
  // const wishListValue = useSelector(state => state.wishList.wishListValue);

  // Local state
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isBrowseArrowUp, setIsBrowseArrowUp] = useState(false);

  const cartDropdownRef = useRef(null);

  const toggleCartMenu = () => setIsCartVisible(prev => !prev);
  const closeCartMenu = () => setIsCartVisible(false);
  const handleNavigate = () => {
    navigate('/');
    dispatch(setUserData({userEmail:""}))
  }
  const handleMyCourses = () => {
    navigate('/wishlistPage');
    dispatch(setWishListValue('All Courses'));
  };
  const handleAccountSetting = () => navigate('/myAccount1');
  const handleMainLogoClick = () => navigate('/');
  const handleWishlistClick = () => {
    navigate('/wishlistPage');
    dispatch(setWishListValue('Wishlist'));
  };

  const browse = ['Design', 'Programming', 'Business & Marketing', 'Photo & Video', 'Writing'];

  const toggleBrowseDropdown = () => {
    setIsBrowseOpen(prev => !prev);
    setIsBrowseArrowUp(prev => !prev);
  };

  const toggleCartDropdown = () => setIsCartDropdownOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = event => {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setIsCartDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
              {browse.map(item => (
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
          <div className="cartDropdownProfile">
            {userData.userProfile ? (
              <img
                src={userData.userProfile}
                alt="Profile"
                className="navbar2ProfileImage"
                onClick={toggleCartDropdown}
              />
            ) : (
              <p className="navbar2CartEmojiIcon" onClick={toggleCartDropdown}>
                😎
              </p>
            )}
          </div>
          {isCartDropdownOpen && (
            <div className="cartDropdownMenu">
              <p>
                {userData.userFirstName} {userData.userLastName}
              </p>
              <p className="cartDropdownMenuEmailId">{userData.userEmail}</p>
              <p onClick={handleMyCourses}>My Courses</p>
              <p onClick={toggleCartMenu}>My Cart</p>
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
