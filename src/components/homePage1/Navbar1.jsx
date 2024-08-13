import { useDispatch, useSelector } from 'react-redux';
import { IoIosSearch } from 'react-icons/io';
import { MdShoppingCart, MdTimelapse } from 'react-icons/md';
import { setLoginVisible, setSignUpVisible, setCartVisible, setOpacityValue } from '../../redux/features/modalSlice';
import { toast } from 'react-toastify';

import logo from '/src/assets/logo.png';
import CartMenu from './CartMenu';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';

import '/src/styling/Navbar1.css';

function Navbar1() {
  const dispatch = useDispatch();


  // Access visibility states from Redux
  const isLoginVisible = useSelector((state) => state.modal.loginVisible);
  const isSignUpVisible = useSelector((state) => state.modal.signUpVisible);
  const isCartVisible = useSelector((state) => state.modal.cartVisible);
  const userEmail = useSelector((state) => state.user.userEmail)

  const toggleCartMenu = () => {
    if(userEmail){
      dispatch(setCartVisible(!isCartVisible));
    } else {
      toast.info("Please Login!!")
    }
  };

  const closeCartMenu = () => {
    dispatch(setCartVisible(false));
    dispatch(setOpacityValue(false));
  };

  const closeSignUpMenu = () => {
    dispatch(setSignUpVisible(false));
    dispatch(setOpacityValue(false));
  };

  const openSignUpMenu = () => {
    dispatch(setLoginVisible(false));
    dispatch(setSignUpVisible(true));
    dispatch(setOpacityValue(true));
  };

  const openLoginMenu = () => {
    dispatch(setSignUpVisible(false));
    dispatch(setLoginVisible(true));
    dispatch(setOpacityValue(true));
  };

  const closeLoginMenu = () => {
    dispatch(setLoginVisible(false));
    dispatch(setOpacityValue(false));
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
