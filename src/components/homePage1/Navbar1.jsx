import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosSearch } from 'react-icons/io'
import { MdShoppingCart, MdTimelapse } from 'react-icons/md'
import {
  setLoginVisible,
  setSignUpVisible,
  setCartVisible,
  setOpacityValue,
} from '../../redux/features/modalSlice'
import { toast } from 'react-toastify'

import logo from '/src/assets/logo.png'
import CartMenu from './CartMenu'
import LoginPage from '../../pages/LoginPage'
import SignUpPage from '../../pages/SignUpPage'

import { myCourseCardData } from '../../data/MyCourseCardData'

import '/src/styling/Navbar1.css'

function Navbar1() {
  const dispatch = useDispatch()

  // SearchBar Code
  const [searchItem, setSearchItem] = useState('')
  const [filterItem, setFilterItem] = useState([])

  useEffect(() => {
    if (searchItem.trim()) {
      setFilterItem(
        myCourseCardData.filter((data) =>
          data.cardContent.toLowerCase().includes(searchItem.toLowerCase()),
        ),
      )
    } else {
      setFilterItem([])
    }
  }, [searchItem])

  // Access visibility states from Redux
  const isLoginVisible = useSelector((state) => state.modal.loginVisible)
  const isSignUpVisible = useSelector((state) => state.modal.signUpVisible)
  const isCartVisible = useSelector((state) => state.modal.cartVisible)
  const userEmail = useSelector((state) => state.user.userEmail)

  const toggleCartMenu = () => {
    if (userEmail) {
      dispatch(setCartVisible(!isCartVisible))
    } else {
      toast.info('Please Login!')
    }
  }

  const closeCartMenu = () => {
    dispatch(setCartVisible(false))
    dispatch(setOpacityValue(false))
  }

  const closeSignUpMenu = () => {
    dispatch(setSignUpVisible(false))
    dispatch(setOpacityValue(false))
  }

  const openSignUpMenu = () => {
    dispatch(setLoginVisible(false))
    dispatch(setSignUpVisible(true))
    dispatch(setOpacityValue(true))
  }

  const openLoginMenu = () => {
    dispatch(setSignUpVisible(false))
    dispatch(setLoginVisible(true))
    dispatch(setOpacityValue(true))
  }

  const closeLoginMenu = () => {
    dispatch(setLoginVisible(false))
    dispatch(setOpacityValue(false))
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
            <input
              type="text"
              placeholder="Search For Courses"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <IoIosSearch className="navbarSearchIcon" aria-hidden="true" />
            {filterItem.length > 0 && (
              <div className="navbarSearchItem">
                {filterItem.map((item) => (
                  <div key={item.id}>{item.cardContent}</div>
                ))}
              </div>
            )}
          </div>
          <span className="navbarItem">Become Instructor</span>
          <MdShoppingCart
            className="navbarCartIcon"
            onClick={toggleCartMenu}
            aria-label="Toggle Cart"
          />
          <button
            className="navbarLoginBtn"
            onClick={openLoginMenu}
            aria-label="Login"
          >
            Login
          </button>
          <button
            className="navbarSignUpBtn"
            onClick={openSignUpMenu}
            aria-label="Sign Up"
          >
            <MdTimelapse className="navbarTimeLapIcon" aria-hidden="true" />
            Sign Up
          </button>
        </div>
      </nav>

      <LoginPage isVisible={isLoginVisible} onClose={closeLoginMenu} />
      <SignUpPage isVisible={isSignUpVisible} onClose={closeSignUpMenu} />
      <CartMenu isVisible={isCartVisible} onClose={closeCartMenu} />
    </>
  )
}

export default Navbar1
