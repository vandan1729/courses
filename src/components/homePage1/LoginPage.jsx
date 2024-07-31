import profilePic from "/src/assets/homePage1/loginPage/loginPage.png";
import logo from "/src/assets/logo.png";
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
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password" />
            <button className="loginPageLoginBtn">Login</button>
          </div>

          <span>or you can</span>

          <div className="loginPageBtnGroup">
            <button className="loginPageFbBtn">Continue with Facebook</button>
            <button className="loginPageAppBtn">Continue with Apple</button>
            <button className="loginPageGoogleBtn">Continue with Google</button>
          </div>

          <span>Need an Account?</span>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
