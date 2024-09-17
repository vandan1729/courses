import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import logo from '/src/assets/logo.png'
import '/src/styling/FooterComponent.css'

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footerSection">
        <div className="footerLogo">
          <img src={logo} alt="logo" />
          <h2>MyCourse.io</h2>
        </div>
      </div>
      <div className="footerUpperSection">
        <div className="footerSection">
          <ul>
            <li>Web Programming</li>
            <li>Mobile Programming</li>
            <li>Java Beginner</li>
            <li>PHP Beginner</li>
          </ul>
        </div>
        <div className="footerSection">
          <ul>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Design Logo</li>
          </ul>
        </div>
        <div className="footerSection">
          <ul>
            <li>Writing Course</li>
            <li>Photography</li>
            <li>Video Making</li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <span>Copyright © MyCourse.io 2024. All Rights Reserved</span>
        <ul className="socialIcons">
          <li className="icon-content">
            <div data-social="twitter">
              <FaTwitter />
              <div className="filled"></div>
            </div>
            <span className="tooltip">Twitter</span>
          </li>
          <li className="icon-content">
            <div data-social="instagram">
              <FaInstagram />
              <div className="filled"></div>
            </div>
            <span className="tooltip">Instagram</span>
          </li>
          <li className="icon-content">
            <div data-social="facebook">
              <FaFacebook />
              <div className="filled"></div>
            </div>
            <span className="tooltip">Facebook</span>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterComponent
