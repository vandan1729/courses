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
import { CustomToastPassword } from '../components/common/CustomToast'
import { CustomToastEmail } from '../components/common/CustomToast'

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

  const hanldeLoginClick = () => {
    dispatch(setSignUpVisible(false))
    dispatch(setLoginVisible(true))
  }

  const handleSubmit = () => {
    const passwordCriteria = {
      minLength: userSignUp.userPassword.length < 8,
      lowercase: !/[a-z]/.test(userSignUp.userPassword),
      uppercase: !/[A-Z]/.test(userSignUp.userPassword),
      numeric: !/[0-9]/.test(userSignUp.userPassword),
      specialChar: !/[!@#$%^&*(),.?":{}|<>]/.test(userSignUp.userPassword),
      lengthRange: userSignUp.userPassword.length > 15,
    }

    const emailCriteria = {
      empty: userSignUp.userEmailID === '',
      invalidFormat: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userSignUp.userEmailID),
      taken: false,
    }

    if (Object.values(emailCriteria).some((isMissing) => isMissing)) {
      toast.error(<CustomToastEmail missingCriteria={emailCriteria} />)
      return
    } else if (Object.values(passwordCriteria).some((isMissing) => isMissing)) {
      toast.error(<CustomToastPassword missingCriteria={passwordCriteria} />)
      return
    } else {
      toast.success('Register Successfully')

      dispatch(
        setUserData({
          userEmail: userSignUp.userEmailID,
          userPassword: userSignUp.userPassword,
        }),
      )
      dispatch(login())
      dispatch(setOpacityValue(false))
    }
  }

  const handleLockIcon = () => {
    setIconToggle(!iconToggle)
  }

  return (
    <div className={`SignUpmainDiv ${isVisible ? 'visible' : ''}`}>
      <div className="signUpPageImg">
        <img src={profilePic} alt="Profile Pic" />
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
            type="text"
            id="userEmailID" // Ensure id matches with handleChange function
            placeholder="Email Address"
            value={userSignUp.userEmailID}
            onChange={handleChange}
          />
          <MdOutlineEmail className="emailIcon" />
          <input
            type={`${iconToggle ? 'text' : 'password'}`}
            id="userPassword" // Ensure id matches with handleChange function
            placeholder="Password"
            value={userSignUp.userPassword}
            onChange={handleChange}
          />
          {iconToggle ? (
            <FaRegEye className="lockIcon" onClick={handleLockIcon} />
          ) : (
            <FaRegEyeSlash className="lockIcon" onClick={handleLockIcon} />
          )}
          <button className="signUpPageLoginBtn" onClick={handleSubmit}>
            Create Account
          </button>
        </div>

        <span className="needAnAccountSpan">
          Already have an Account?{' '}
          <span className="signUpSpan" onClick={hanldeLoginClick}>
            Login
          </span>
        </span>
      </div>
    </div>
  )
}

export default SignUpPage
