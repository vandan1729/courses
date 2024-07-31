import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "/src/assets/logo.png";
import "/src/components/styling/FooterComponent.css";

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footerSection">
        <div className="footerLogo">
          <img src={logo} alt="logo" />
          <h2>MyCourse.io</h2>
        </div>
      </div>
      <div className="footerSection">
        <h4>Courses</h4>
        <ul>
          <li>Web Programming</li>
          <li>Mobile Programming</li>
          <li>Java Beginner</li>
          <li>PHP Beginner</li>
        </ul>
      </div>
      <div className="footerSection">
        <h4>Design</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Design Logo</li>
        </ul>
      </div>
      <div className="footerSection">
        <h4>Other</h4>
        <ul>
          <li>Writing Course</li>
          <li>Photography</li>
          <li>Video Making</li>
        </ul>
      </div>
      <div className="footerBottom">
        <span>Copyright © MyCourse.io 2024. All Rights Reserved</span>
        <div className="socialIcons">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
