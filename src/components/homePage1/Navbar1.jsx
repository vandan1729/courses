import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosSearch, IoIosMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { MdShoppingCart, MdTimelapse } from 'react-icons/md'
import {
  setLoginVisible,
  setSignUpVisible,
  setCartVisible,
  setOpacityValue,
} from '../../redux/features/modalSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import logo from '/src/assets/logo.png'
import CartMenu from './CartMenu'
import LoginPage from '../../pages/LoginPage'
import SignUpPage from '../../pages/SignUpPage'

import { myCourseCardData } from '../../data/MyCourseCardData'

import '/src/styling/Navbar1.css'

function Navbar1() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // SearchBar Code
  const [searchItem, setSearchItem] = useState('')
  const [filterItem, setFilterItem] = useState([])
  const [toggle, setToggle] = useState(false)

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

  const isCartVisible = useSelector((state) => state.modal.cartVisible)
  const auth = useSelector((state) => state.auth.isAuthenticated)

  const toggleCartMenu = () => {
    if (auth) {
      dispatch(setCartVisible(!isCartVisible))
    } else {
      toast.info('Please Login!')
    }
  }

  const closeMenus = () => {
    dispatch(setLoginVisible(false))
    dispatch(setSignUpVisible(false))
    dispatch(setCartVisible(false))
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

  const handleNavbarMenuIconClick = () => {
    setToggle(!toggle)
    closeMenus()
    dispatch(setOpacityValue(true))
  }

  const handleNavbarMenuCloseIcon = () => {
    dispatch(setOpacityValue(false))
    setToggle(!toggle)
  }

  const handleLoginLi = () => {
    setToggle(!toggle)
    dispatch(setLoginVisible(true))
  }

  const handleSignUpLi = () => {
    setToggle(!toggle)
    dispatch(setSignUpVisible(true))
  }

  const handleMainLogoClick = () => navigate('/')

  return (
    <>
      <nav className="navbar">
        <div className="navbarMenuIconDiv">
          {toggle ? (
            <IoMdClose color="#3dcbb1" onClick={handleNavbarMenuCloseIcon} />
          ) : (
            <IoIosMenu
              color="#3dcbb1"
              className="navbarMenuIcon"
              onClick={handleNavbarMenuIconClick}
            />
          )}

          <ul className={toggle ? 'navbarMenuActive' : 'navbarMenuDeactivate'}>
            <li className="navbarMenuActiveLi" onClick={handleLoginLi}>
              Login
            </li>
            <li className="navbarMenuActiveLi" onClick={handleSignUpLi}>
              Sign Up
            </li>
          </ul>
        </div>

        <div className="navbarLogo">
          <img src={logo} alt="Logo" onClick={handleMainLogoClick} />
          <span onClick={handleMainLogoClick}>My Course.io</span>
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

      <LoginPage />
      <SignUpPage />
      <CartMenu />
    </>
  )
}

export default Navbar1
