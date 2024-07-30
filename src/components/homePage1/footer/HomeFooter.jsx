import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from '/public/logo.png'
import './homeFooter.css';

function HomeFooter() {
  return (
    <footer className="footer">
      <div className="footer-section">

        <div className="footer-logo">
        <img src={logo} alt="logo"/>
        <h2>MyCourse.io</h2>
        </div>
        
        
      </div>
      <div className="footer-section">
        <h4>Courses</h4>
        <ul>
          <li>Web Programming</li>
          <li>Mobile Programming</li>
          <li>Java Beginner</li>
          <li>PHP Beginner</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Design</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Design Logo</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Other</h4>
        <ul>
          <li>Writing Course</li>
          <li>Photography</li>
          <li>Video Making</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span>Copyright © MyCourse.io 2024. All Rights Reserved</span>
        <div className="social-icons">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
