import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { MdShoppingCart } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { MdTimelapse } from 'react-icons/md'

import logo from '/src/assets/logo.png'
import CartMenu from './CartMenu'

import '/src/styling/Navbar1.css'

function Navbar1() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/loginPage')
  }

  const toggleCartMenu = () => {
    setIsCartVisible((prevState) => !prevState)
  }

  const closeCartMenu = () => {
    setIsCartVisible(false)
  }

  const handleSingUpClick = () => {
    navigate('/signUpPage')
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbarLogo">
          <img src={logo} alt="Logo" />
          <span>My Course.io</span>
        </div>

        <div className="navbarMenu">
          <div className="navbarSearch">
            <input type="text" placeholder="Search For Courses" />
            <IoIosSearch className="navbarSearchIcon" />
          </div>
          <span className="navbarItem">Become Instructor</span>
          <MdShoppingCart className="navbarCartIcon" onClick={toggleCartMenu} />
          <button className="navbarLoginBtn" onClick={handleNavigate}>
            Login
          </button>

          <button className="navbarSignUpBtn" onClick={handleSingUpClick}>
            <MdTimelapse className="navbarTimeLapIcon" />
            Sign Up
          </button>
        </div>
      </nav>
      <CartMenu isVisible={isCartVisible} onClose={closeCartMenu} />
    </>
  )
}

export default Navbar1
