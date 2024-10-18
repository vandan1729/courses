import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { FaApple, FaFacebookF, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useLoginMutation } from '../api/authAPi/authApi'
import PrimaryLoader from '../components/common/Loader/PrimaryLoader'
import { login, setRefreshToken } from '../redux/features/authSlice'
import {
  setLoginVisible,
  setOpacityValue,
  setPrimaryLoading,
  setSignUpVisible,
} from '../redux/features/modalSlice'
import { setUserData } from '../redux/features/userDataSlice'
// Correct import
import profilePic from '/src/assets/homePage1/loginPage/loginPage.png'
import logo from '/src/assets/logo.png'
import '/src/styling/LoginPage.css'

const LoginPage = () => {
  const dispatch = useDispatch()
  const [iconToggle, setIconToggle] = useState(false)
  const [loginMutation] = useLoginMutation()

  const isVisible = useSelector((state) => state.modal.loginVisible)
  const primaryLoading = useSelector((state) => state.modal.primaryLoading)
  const userData = useSelector((state) => state.user)
  const [userInput, setUserInput] = useState({
    userEmail: '',
    userPassword: '',
  })

  Cookies.set('accessToken', 'test', { path: '/' })
  Cookies.set('refreshToken', 'test', { path: '/' })

  const handleCloseIconClick = () => {
    dispatch(setLoginVisible(false))
    dispatch(setOpacityValue(false))
  }

  const handleSignUpClick = () => {
    dispatch(setLoginVisible(false))
    dispatch(setSignUpVisible(true))
  }

  const handleLogin = async () => {
    dispatch(setPrimaryLoading(true))

    const data = {
      identifier: userData.userEmail,
      password: userData.userPassword,
    }

    try {
      const response = await loginMutation(data).unwrap()

      if (response) {
        toast.success('Login Successful')

        Cookies.set('accessToken', response.access_token, { path: '/' })
        Cookies.set('refreshToken', response.refresh_token, { path: '/' })

        dispatch(login(response.access_token))
        dispatch(setRefreshToken(response.refresh_token))

        // Update user data in Redux store
        dispatch(setUserData(response.user))

        dispatch(setLoginVisible(false))
        dispatch(setOpacityValue(false))
      } else {
        toast.error(
          'Login failed. Please check your credentials and try again.',
        )
      }
    } catch (error) {
      toast.error('Login failed. Please try again later.')
    } finally {
      dispatch(setPrimaryLoading(false))
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInput({ [name]: value })
  }

  return (
    <div className={`mainDiv no-select ${isVisible ? 'visible' : ''}`}>
      <div className="loginPageImg">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="loginPageInputs">
        <IoMdClose
          className="loginPageCloseIcon"
          onClick={handleCloseIconClick}
        />
        <div className="loginPageLogo">
          <img src={logo} alt="Logo" />
          <span>MyCourse.io</span>
        </div>
        <span className="loginPageText">
          Join us and get more benefits. We promise to keep your data safe.
        </span>
        <div className="loginPageTextInput">
          <input
            type="email"
            placeholder="Email Address"
            name="userEmail"
            value={userInput.userEmail}
            onChange={handleInputChange}
            autoComplete="email"
          />
          <MdOutlineEmail className="loginemailIcon" />
          <input
            type={iconToggle ? 'text' : 'password'}
            placeholder="Password"
            name="userPassword"
            value={userInput.userPassword}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
          {iconToggle ? (
            <FaRegEye
              className="loginlockIcon"
              onClick={() => setIconToggle(false)}
            />
          ) : (
            <FaRegEyeSlash
              className="loginlockIcon"
              onClick={() => setIconToggle(true)}
            />
          )}
          <button className="loginPageLoginBtn" onClick={handleLogin}>
            Login
          </button>
        </div>

        {primaryLoading && <PrimaryLoader />}

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
          Need an Account?{' '}
          <span className="signUpSpan" onClick={handleSignUpClick}>
            Sign Up
          </span>
        </span>
      </div>
    </div>
  )
}

export default LoginPage
