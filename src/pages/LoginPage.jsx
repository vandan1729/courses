import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebookF, FaApple, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import profilePic from '/src/assets/homePage1/loginPage/loginPage.png'
import logo from '/src/assets/logo.png'
import {
  setLoginVisible,
  setOpacityValue,
  setSignUpVisible,
} from '../redux/features/modalSlice'
import { login } from '../redux/features/authSlice'
import '/src/styling/LoginPage.css'
import { toast } from 'react-toastify'

function LoginPage() {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({ email: '', password: '' })
  const [iconToggle, setIconToggle] = useState(false)

  // Access user data from the Redux store
  const userEmail = useSelector((state) => state.user.userEmail)
  const userPassword = useSelector((state) => state.user.userPassword)
  const isVisible = useSelector((state) => state.modal.loginVisible)

  const handleCloseIconClick = () => {
    dispatch(setLoginVisible(false))
    dispatch(setOpacityValue(false))
  }

  const handleSignUpClick = () => {
    dispatch(setLoginVisible(false))
    dispatch(setSignUpVisible(true))
  }

  const handleLogin = () => {
    if (userData.email === userEmail && userData.password === userPassword) {
      setUserData((userData.email = ''), (userData.password = ''))
      toast.success('Login Successfully')
      dispatch(setLoginVisible(false))
      dispatch(setOpacityValue(false))
      dispatch(login())
    } else {
      toast.error('Email or Password does not match')
    }
  }

  const handleLockIconToggle = () => setIconToggle(!iconToggle)

  // Handle input change for both email and password
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <div className={`mainDiv no-select${isVisible ? 'visible' : ''}`}>
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
          <MdOutlineEmail className="emailIcon" />
          <input
            type={iconToggle ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
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
          <button className="loginPageLoginBtn" onClick={handleLogin}>
            Login
          </button>
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
