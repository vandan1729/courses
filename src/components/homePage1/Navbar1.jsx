import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import logo from "/src/assets/logo.png";
import "/src/components/styling/Navbar1.css";

function Navbar1() {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={logo} alt="Logo" />
        <span>My Course.io</span>
      </div>
      <div className="navbarSearch">
        <input type="text" placeholder="Search For Courses" />
        <IoIosSearch className="navbarSearchIcon" />
      </div>
      <div className="navbarMenu">
        <span className="navbarItem">Become Instructor</span>
        <IoCartOutline className="navbarCartIcon" />
        <button className="navbarLoginBtn">Login</button>
        <button className="navbarSignUpBtn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar1;
