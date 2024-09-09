import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebookF, FaApple, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import profilePic from '../assets/homePage1/singUpPage/singUpImg.png'
import logo from '/src/assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSignUpVisible,
  setLoginVisible,
  setOpacityValue,
} from '../redux/features/modalSlice'
import { setUserData } from '../redux/features/userDataSlice'
import { login } from '../redux/features/authSlice'
import '/src/styling/LoginPage.css'
import '/src/styling/SignUpPage.css'
import { toast } from 'react-toastify'
import {
  CustomToastPassword,
  CustomToastEmail,
} from '../components/common/CustomDialogBox/CustomToast'

function SignUpPage() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state) => state.modal.signUpVisible)
  const [iconToggle, setIconToggle] = useState(false)
  const [userSignUp, setUserSignUp] = useState({
    userEmailID: '',
    userPassword: '',
  })

  const handleCloseIconClick = () => {
    dispatch(setSignUpVisible(false))
    dispatch(setOpacityValue(false))
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setUserSignUp((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleLoginClick = () => {
    dispatch(setSignUpVisible(false))
    dispatch(setLoginVisible(true))
  }

  const handleSubmit = () => {
    const { userEmailID, userPassword } = userSignUp
    const passwordCriteria = {
      minLength: userPassword.length < 8,
      lowercase: !/[a-z]/.test(userPassword),
      uppercase: !/[A-Z]/.test(userPassword),
      numeric: !/[0-9]/.test(userPassword),
      specialChar: !/[!@#$%^&*(),.?":{}|<>]/.test(userPassword),
      lengthRange: userPassword.length > 15,
    }

    const emailCriteria = {
      empty: userEmailID === '',
      invalidFormat: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmailID),
      taken: false, // Implement taken check if needed
    }

    if (Object.values(emailCriteria).some(Boolean)) {
      toast.error(<CustomToastEmail missingCriteria={emailCriteria} />)
      return
    } else if (Object.values(passwordCriteria).some(Boolean)) {
      toast.error(<CustomToastPassword missingCriteria={passwordCriteria} />)
      return
    } else {
      toast.success('Registered Successfully')
      dispatch(
        setUserData({ userEmail: userEmailID, userPassword: userPassword }),
      )
      dispatch(login())
      dispatch(setOpacityValue(false))
      dispatch(setSignUpVisible(false))
    }
  }

  const handleLockIconToggle = () => setIconToggle(!iconToggle)

  return (
    <div className={`SignUpmainDiv no-select ${isVisible ? 'visible' : ''}`}>
      <div className="signUpPageImg">
        <img src={profilePic} alt="Sign Up" />
      </div>
      <div className="signUpPageInputs">
        <IoMdClose
          className="signUpPageCloseIcon"
          onClick={handleCloseIconClick}
        />
        <div className="signUpPageLogo">
          <img src={logo} alt="Logo" />
          <span>MyCourse.io</span>
        </div>
        <span className="signUpPageText">
          Join us and get more benefits. We promise to keep your data safely.
        </span>
        <div className="signUpPageBtnGroup">
          <button className="signUpPageFbBtn">Continue with Facebook</button>
          <FaFacebookF className="signUpPageFbBtnIcon" />
          <button className="signUpPageAppBtn">Continue with Apple</button>
          <FaApple className="signUpPageAppBtnIcon" />
          <button className="signUpPageGoogleBtn">Continue with Google</button>
          <FcGoogle className="signUpPageGoogleBtnIcon" />
        </div>
        <span className="orYouCanSpan">or you can</span>
        <div className="signUpPageTextInput">
          <input
            type="email"
            id="userEmailID"
            placeholder="Email Address"
            value={userSignUp.userEmailID}
            onChange={handleChange}
            autoComplete="email"
            name="email"
          />

          <MdOutlineEmail className="emailIcon" />
          <input
            type={iconToggle ? 'text' : 'password'}
            id="userPassword"
            placeholder="Password"
            value={userSignUp.userPassword}
            onChange={handleChange}
            autoComplete="current-password"
          />
          {iconToggle ? (
            <FaRegEye className="lockIcon" onClick={handleLockIconToggle} />
          ) : (
            <FaRegEyeSlash
              className="lockIcon"
              onClick={handleLockIconToggle}
            />
          )}
          <button className="signUpPageLoginBtn" onClick={handleSubmit}>
            Create Account
          </button>
        </div>
        <span className="needAnAccountSpan">
          Already have an Account?{' '}
          <span className="signUpSpan" onClick={handleLoginClick}>
            Login
          </span>
        </span>
      </div>
    </div>
  )
}

export default SignUpPage
