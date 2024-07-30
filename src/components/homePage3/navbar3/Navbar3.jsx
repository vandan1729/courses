import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from "/public/logo.png";

import "./navbar3.css";

function Navbar3() {
  const browse = [
    "Design",
    "Programming",
    "Business & Marketing",
    "Photo & Video",
    "Writing",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("Browse");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleItemClick = (item) => {
    setSelectedText(item);
    setIsOpen(false);
  };

  return (
    <nav className="navbar3">
      <div className="navbar3-logo">
      <img src={logo} className="logo-img" alt="Logo" />
        <span>My Course.io</span>
        <div className="navbar3-dropdown">
          <button onClick={toggleDropdown} className="navbar3-dropdown-toggle">
            {selectedText}
          </button>
          {isOpen && (
            <ul className="navbar3-dropdown-menu">
              {browse.map((item) => (
                <li
                  key={item}
                  className="navbar3-dropdown-item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar3-menu">
        <span className="navbar3-item">Become Instructor</span>
        <IoCartOutline className="navbar3-cart-icon" />
        <FaRegBell className="navbar3-cart-icon" />
        <CgProfile className="navbar3-cart-icon" />
      </div>
    </nav>
  );
}

export default Navbar3;
