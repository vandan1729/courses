import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "./navbar2.css";

function Navbar2() {

    const browse = ["Design","Programming","Business & Marketing","Photo & Video","Writing"]

    const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("Browse");

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleItemClick = (item) => {
    setSelectedText(item);
    setIsOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>My Course.io</span>
        <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedText}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {browse.map(item => (
            <li
              key={item}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
      <div className="navbar-search">
        <input type='text' placeholder='Search For Courses' />
        <IoIosSearch className="navbar-search-icon" />
      </div>
      <div className="navbar-menu">
        <span className="navbar-item">Become Instructor</span>
        <IoCartOutline className="navbar-cart-icon" />
        <FaRegBell className="navbar-cart-icon"/>
        <CgProfile className="navbar-cart-icon"/>
      </div>
    </nav>
  );
}

export default Navbar2;
