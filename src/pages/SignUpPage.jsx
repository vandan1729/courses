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
  setPrimaryLoading,
} from '../redux/features/modalSlice'
import { setUserData } from '../redux/features/userDataSlice'
import { login } from '../redux/features/authSlice'
import { userAuth } from '../api/Api'
import '/src/styling/SignUpPage.css'
import { toast } from 'react-toastify'
import {
  CustomToastPassword,
  CustomToastEmail,
} from '../components/common/CustomDialogBox/CustomToast'
import PrimaryLoader from '../components/common/Loader/PrimaryLoader'

function SignUpPage() {
  const dispatch = useDispatch()
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

  const handleSubmit = async () => {
    const { userEmailID, userPassword, firstName, lastName } = userSignUp

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
      return
    } else if (Object.values(passwordCriteria).some(Boolean)) {
      toast.error(<CustomToastPassword missingCriteria={passwordCriteria} />)
      return
    }

    try {
      dispatch(setPrimaryLoading(true))
      const response = await userAuth({
        data: {
          email: userEmailID,
          password: userPassword,
          username: 'test',
          first_name: firstName,
          last_name: lastName,
          profile_picture: 'a',
          is_instructor: false,
          is_admin: false,
          username: 'test2',
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
        //Set Login
        dispatch(login(response.data.access_token))
        //Set Cookie
        document.cookie = `accessToken=${response.data.access_token}; path=/;`

        console.log(response.data.access_token)
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
        {primaryLoading ? <PrimaryLoader /> : null}
      </div>
    </div>
  )
}

export default SignUpPage
