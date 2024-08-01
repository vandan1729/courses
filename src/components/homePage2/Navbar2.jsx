import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
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
  const [isArrowUp, setIsArrowUp] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setIsArrowUp(!isArrowUp);
  };

  return (
    <nav className="navbar2">
      <div className="navbar2Logo">
        <img src={logo} alt="Logo" />
        <span>My Course.io</span>
        <div className="dropdown2">
          <button onClick={toggleDropdown} className="dropdown2Toggle">
            Browse {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {isOpen && (
            <ul className="dropdown2Menu">
              {browse.map((item) => (
                <li key={item} className="dropdown2Item">
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
        <MdShoppingCart className="navbar2CartIcon" />
        <FaRegBell className="navbar2CartIcon" />
        <p className="navbar2CartEmojiIcon">😎</p>
      </div>
    </nav>
  );
}

export default Navbar2;
