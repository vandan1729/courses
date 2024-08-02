import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import logo from "/src/assets/logo.png";
import "/src/components/styling/Navbar1.css";
import {useNavigate} from 'react-router-dom'

function Navbar1() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/loginPage')
  }

  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={logo} alt="Logo" />
        <span>My Course.io</span>
      </div>
      
      <div className="navbarMenu">
      <div className="navbarSearch">
        <input type="text" placeholder="Search For Courses" />
        <IoIosSearch className="navbarSearchIcon"  />
      </div>
        <span className="navbarItem">Become Instructor</span>
        <MdShoppingCart className="navbarCartIcon" />
        <button className="navbarLoginBtn" onClick={handleNavigate}>Login</button>
        <button className="navbarSignUpBtn" onClick={handleNavigate}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar1;
