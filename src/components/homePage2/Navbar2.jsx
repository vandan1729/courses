import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from "/src/assets/logo.png";

import "../styling/Navbar2.css";

function Navbar2() {
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
    <nav className="navbar2">
      <div className="navbar2Logo">
        <img src={logo} alt="Logo" />
        <span>My Course.io</span>
        <div className="dropdown2">
          <button onClick={toggleDropdown} className="dropdown2Toggle">
            {selectedText}
          </button>
          {isOpen && (
            <ul className="dropdown2Menu">
              {browse.map((item) => (
                <li
                  key={item}
                  className="dropdown2Item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar2Search">
        <input type="text" placeholder="Search For Courses" />
        <IoIosSearch className="navbar2SearchIcon" />
      </div>
      <div className="navbar2Menu">
        <span className="navbar2Item">Become Instructor</span>
        <IoCartOutline className="navbar2CartIcon" />
        <FaRegBell className="navbar2CartIcon" />
        <CgProfile className="navbar2CartIcon" />
      </div>
    </nav>
  );
}

export default Navbar2;
