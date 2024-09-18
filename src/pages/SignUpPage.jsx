import React, { useState } from 'react'
import { FaApple, FaFacebookF, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

import { ApiCall } from '../api/api'
import profilePic from '../assets/homePage1/singUpPage/singUpImg.png'
import {
  CustomToastEmail,
  CustomToastPassword,
} from '../components/common/CustomDialogBox/CustomToast'
import PrimaryLoader from '../components/common/Loader/PrimaryLoader'
import { login } from '../redux/features/authSlice'
import {
  setLoginVisible,
  setOpacityValue,
  setPrimaryLoading,
  setSignUpVisible,
} from '../redux/features/modalSlice'
import { setUserData } from '../redux/features/userDataSlice'
import logo from '/src/assets/logo.png'
import '/src/styling/SignUpPage.css'

const SignUpPage = () => {
  const dispatch = useDispatch()
  const { userAuth } = ApiCall()
  const isVisible = useSelector((state) => state.modal.signUpVisible)
  const primaryLoading = useSelector((state) => state.modal.primaryLoading)
  const [iconToggle, setIconToggle] = useState(false)
  const [userSignUp, setUserSignUp] = useState({
    userEmailID: '',
    userPassword: '',
    firstName: '',
    lastName: '',
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

  const validateFields = () => {
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
      taken: false,
    }

    if (Object.values(emailCriteria).some(Boolean)) {
      toast.error(<CustomToastEmail missingCriteria={emailCriteria} />)
      return false
    } else if (Object.values(passwordCriteria).some(Boolean)) {
      toast.error(<CustomToastPassword missingCriteria={passwordCriteria} />)
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateFields()) return

    const { userEmailID, userPassword, firstName, lastName } = userSignUp

    try {
      dispatch(setPrimaryLoading(true))
      const response = await userAuth({
        data: {
          email: userEmailID,
          password: userPassword,
          first_name: firstName,
          last_name: lastName,
          profile_picture: 'a',
          is_instructor: false,
          is_admin: false,
          username: uuidv4(),
        },
        api: 'register',
      })

      if (response.status === 200) {
        toast.success('Registered Successfully')
        dispatch(
          setUserData({
            userEmail: userEmailID,
            userPassword: userPassword,
            userFirstName: firstName,
            userLastName: lastName,
          }),
        )
        dispatch(login(response.data.access_token))
        document.cookie = `accessToken=${response.data.access_token}; path=/;`
        document.cookie = `refreshToken=${response.data.refresh_token}; path=/;`

        dispatch(setOpacityValue(false))
        dispatch(setSignUpVisible(false))
      }
    } catch (error) {
      toast.error('Failed to register. Please try again later.')
    } finally {
      dispatch(setPrimaryLoading(false))
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
            type="text"
            id="firstName"
            placeholder="First Name"
            value={userSignUp.firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={userSignUp.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
          <input
            type="email"
            id="userEmailID"
            placeholder="Email Address"
            value={userSignUp.userEmailID}
            onChange={handleChange}
            autoComplete="email"
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
        {primaryLoading && <PrimaryLoader />}
      </div>
    </div>
  )
}

export default SignUpPage
