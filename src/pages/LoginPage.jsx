import React, { useState } from 'react'
import { FaApple, FaFacebookF, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { ApiCall } from '../api/api'
import PrimaryLoader from '../components/common/Loader/PrimaryLoader'
import { login, setRefreshToken } from '../redux/features/authSlice'
import {
  setLoginVisible,
  setOpacityValue,
  setPrimaryLoading,
  setSignUpVisible,
} from '../redux/features/modalSlice'
import profilePic from '/src/assets/homePage1/loginPage/loginPage.png'
import logo from '/src/assets/logo.png'
import '/src/styling/LoginPage.css'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { userAuth } = ApiCall()
  const [userData, setUserData] = useState({ email: '', password: '' })
  const [iconToggle, setIconToggle] = useState(false)

  const isVisible = useSelector((state) => state.modal.loginVisible)
  const primaryLoading = useSelector((state) => state.modal.primaryLoading)

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
    try {
      const response = await userAuth({
        data: {
          identifier: userData.email,
          password: userData.password,
        },
        api: 'login',
      })

      if (response.status === 200) {
        toast.success('Login Successful')

        // Store tokens in cookies
        document.cookie = `accessToken=${response.data.access_token}; path=/;`
        document.cookie = `refreshToken=${response.data.refresh_token}; path=/;`

        // Store tokens in Redux
        dispatch(login(response.data.access_token))
        dispatch(setRefreshToken(response.data.refresh_token))

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

  const handleLockIconToggle = () => setIconToggle(!iconToggle)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({ ...prevData, [name]: value }))
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
          Join us and get more benefits. We promise to keep your data safely.
        </span>
        <div className="loginPageTextInput">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            autoComplete="email"
          />
          <MdOutlineEmail className="loginemailIcon" />
          <input
            type={iconToggle ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
          {iconToggle ? (
            <FaRegEye
              className="loginlockIcon"
              onClick={handleLockIconToggle}
            />
          ) : (
            <FaRegEyeSlash
              className="loginlockIcon"
              onClick={handleLockIconToggle}
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
