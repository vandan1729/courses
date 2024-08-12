import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { IoMdClose } from 'react-icons/io';
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import profilePic from '/src/assets/homePage1/loginPage/loginPage.png';
import logo from '/src/assets/logo.png';

import { setLoginVisible, setOpacityValue, setSignUpVisible } from '../redux/features/modalSlice';

import '/src/styling/LoginPage.css';
import { toast } from 'react-toastify';

function LoginPage({ isVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Access user data from the Redux store
  const userEmail = useSelector((state) => state.user.userEmail);
  const userPassword = useSelector((state) => state.user.userPassword);

  const handleCloseIconClick = () => {
    dispatch(setLoginVisible(false));
    dispatch(setOpacityValue(false)); // Pass `false` to close the modal
  };

  const hanldeSignUpClick = () => {
    dispatch(setLoginVisible(false));
    dispatch(setSignUpVisible(true));
  }

  const handleLogin = () => {
    // Check credentials against Redux store
    if (email === userEmail && password === userPassword) { // Replace 'admin' with actual password if stored in Redux

      toast.success('Login Successfully')
      setTimeout(() => {
        navigate('/wishlistPage'); 
      }, 1500);
    } else {
      toast.error('EmailId or Password Not Match')
    }
  };

  return (
    <div className={`mainDiv ${isVisible ? 'visible' : ''}`}>
      <div className="loginPageImg">
        <img src={profilePic} alt="Profile Pic" />
      </div>
      <div className="loginPageInputs">
        <IoMdClose className='loginPageCloseIcon' onClick={handleCloseIconClick} />
        <div className="loginPageLogo">
          <img src={logo} alt="Logo" />
          <span>MyCourse.io</span>
        </div>

        <span className="loginPageText">
          Join us and get more benefits. We promise to keep your data safely.
        </span>

        <div className="loginPageTextInput">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <MdOutlineEmail className="emailIcon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <MdOutlineLock className="lockIcon" />
          <button className="loginPageLoginBtn" onClick={handleLogin}>Login</button> {/* Handle login on click */}
        </div>

        <span className="orYouCanSpan">or you can</span>

        <div className="loginPageBtnGroup">
          <button className="loginPageFbBtn">Continue with Facebook</button>
          <FaFacebookF className="loginPageFbBtnIcon" />
          <button className="loginPageAppBtn">Continue with Apple</button>
          <FaApple className="loginPageAppBtnIcon" />
          <button className="loginPageGoogleBtn">Continue with Google</button>
          <FcGoogle className="loginPageGoogleBtnIcon" />
        </div>

        <span className="needAnAccountSpan">
          Need an Account? <span className="signUpSpan" onClick={hanldeSignUpClick}>Sign Up</span>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
