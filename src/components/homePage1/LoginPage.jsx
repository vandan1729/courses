import profilePic from "/src/assets/homePage1/loginPage/loginPage.png";
import logo from "/src/assets/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import "/src/components/styling/LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="mainDiv">
        <div className="loginPageImg">
          <img src={profilePic} alt="Profile Pic" />
        </div>
        <div className="loginPageInputs">
          <div className="loginPageLogo">
            <img src={logo} alt="Logo" />
            <span>MyCourse.io</span>
          </div>

          <span className="loginPageText">
            Join us and get more benefits. We promise to keep your data safely.
          </span>

          <div className="loginPageTextInput">
            <input type="text" placeholder="Email Address" /> <MdOutlineEmail className="emailicon"/>
            <input type="text" placeholder="Password" /> <MdOutlineLock className="lockIcon"/>
            <button className="loginPageLoginBtn">Login</button>
          </div>

          <span className="orYouCanSPan">or you can</span>

          <div className="loginPageBtnGroup">
            <button className="loginPageFbBtn">Continue with Facebook</button>
            <button className="loginPageAppBtn">Continue with Apple</button>
            <button className="loginPageGoogleBtn">Continue with Google</button>
          </div>

          <span className="needAnAccountSpan">Need an Account ? <span className="signUpSpan">Sign Up</span></span>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
