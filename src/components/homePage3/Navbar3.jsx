import { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import logo from '../../assets/logo.png'

import '../../styling/Navbar3.css'

function Navbar3() {
  const browse = [
    'Design',
    'Programming',
    'Business & Marketing',
    'Photo & Video',
    'Writing',
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [selectedText, setSelectedText] = useState('Browse')

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleItemClick = (item) => {
    setSelectedText(item)
    setIsOpen(false)
  }

  return (
    <nav className="navbar3">
      <div className="navbar3Logo">
        <img src={logo} className="logoImg" alt="Logo" />
        <span>My Course.io</span>
        <div className="navbar3Dropdown">
          <button onClick={toggleDropdown} className="navbar3DropdownToggle">
            {selectedText}
          </button>
          {isOpen && (
            <ul className="navbar3DropdownMenu">
              {browse.map((item) => (
                <li
                  key={item}
                  className="navbar3DropdownItem"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar3Menu">
        <span className="navbar3Item">Become Instructor</span>
        <IoCartOutline className="navbar3CartIcon" />
        <FaRegBell className="navbar3CartIcon" />
        <CgProfile className="navbar3CartIcon" />
      </div>
    </nav>
  )
}

export default Navbar3
