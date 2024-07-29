import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import "./navbar1.css";

function Navbar1() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>My Course.io</span>
      </div>
      <div className="navbar-search">
        <input type='text' placeholder='Search For Courses' />
        <IoIosSearch className="navbar-search-icon" />
      </div>
      <div className="navbar-menu">
        <span className="navbar-item">Become Instructor</span>
        <IoCartOutline className="navbar-cart-icon" />
        <button className="navbar-LoginBtn">Login</button>
        <button className="navbar-SignUpBtn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar1;
