import profilePic from '../assets/homePage1/singUpPage/singUpImg.png'
import logo from '/src/assets/logo.png'

import { MdOutlineEmail } from 'react-icons/md'
import { MdOutlineLock } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMdClose } from "react-icons/io";

import { useNavigate } from 'react-router-dom'

import '/src/styling/SignUpPage.css'

function SignUpPage() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/loginPage')
  }

  const handleCloseIconClick = () => {
    navigate("/")
  }

  return (
    <>
      <div className="mainDiv">
        <div className="signUpPageImg">
          <img src={profilePic} alt="Profile Pic" />
        </div>
        <div className="signUpPageInputs">
            <IoMdClose className='signUpPageCloseIcon' onClick={handleCloseIconClick}/>
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
            <button className="signUpPageGoogleBtn">
              Continue with Google
            </button>
            <FcGoogle className="signUpPageGoogleBtnIcon" />
          </div>

          <span className="orYouCanSpan">or you can</span>

          <div className="signUpPageTextInput">
            <input type="text" placeholder="Email Address" />{' '}
            <MdOutlineEmail className="emailIcon" />
            <input type="text" placeholder="Password" />{' '}
            <MdOutlineLock className="lockIcon" />
            <button className="signUpPageLoginBtn">Create Account</button>
          </div>

          <span className="needAnAccountSpan">
            Already have an Account?{' '}
            <span className="signUpSpan" onClick={handleLoginClick}>
              Login
            </span>
          </span>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
