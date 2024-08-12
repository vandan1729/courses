import { useContext, useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdShoppingCart, MdTimelapse } from 'react-icons/md';
import { HomePageColorOpacityContext } from '../../contextProvider/HomePageColorOpacity';

import logo from '/src/assets/logo.png';
import CartMenu from './CartMenu';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';

import '/src/styling/Navbar1.css';

function Navbar1() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const { newOpacityValue } = useContext(HomePageColorOpacityContext);

  const toggleCartMenu = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  const closeCartMenu = () => {
    setIsCartVisible(false);
    newOpacityValue(false);
  };

  const closeSignUpMenu = () => {
    setIsSignUpVisible(false);
    newOpacityValue(false);
  };

  const openSignUpMenu = () => {
    setIsSignUpVisible(true);
    newOpacityValue(true);
  };

  const openLoginMenu = () => {
    setIsLoginVisible(true);
    newOpacityValue(true);
  };

  const closeLoginMenu = () => {
    setIsLoginVisible(false);
    newOpacityValue(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbarLogo">
          <img src={logo} alt="Logo" />
          <span>My Course.io</span>
        </div>

        <div className="navbarMenu">
          <div className="navbarSearch">
            <input type="text" placeholder="Search For Courses" />
            <IoIosSearch className="navbarSearchIcon" />
          </div>
          <span className="navbarItem">Become Instructor</span>
          <MdShoppingCart className="navbarCartIcon" onClick={toggleCartMenu} />
          <button className="navbarLoginBtn" onClick={openLoginMenu}>
            Login
          </button>

          <button className="navbarSignUpBtn" onClick={openSignUpMenu}>
            <MdTimelapse className="navbarTimeLapIcon" />
            Sign Up
          </button>
        </div>
      </nav>

      <LoginPage isVisible={isLoginVisible} onClose={closeLoginMenu} />
      <SignUpPage isVisible={isSignUpVisible} onClose={closeSignUpMenu} />
      <CartMenu isVisible={isCartVisible} onClose={closeCartMenu} />
    </>
  );
}

export default Navbar1;
