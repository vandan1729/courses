import { useEffect, useRef, useState } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { IoIosMenu, IoIosSearch } from 'react-icons/io'
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io'
import { MdShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { myCourseCardData } from '../../data/MyCourseCardData'
import {
  promptDialogBox,
  setCartVisible,
  setOpacityValue,
} from '../../redux/features/modalSlice'
import { setWishListValue } from '../../redux/features/wishListSlice'
import '../../styling/Navbar2.css'
import CustomNotification from '../common/CustomDialogBox/CustomNotification'
import PromptDialogBox from '../common/CustomDialogBox/PromptDialogBox'
import WishlistCounter from '../common/WishlistCounter'
import CartMenu from '../homePage1/CartMenu'
import logo from '/src/assets/logo.png'

function Navbar2() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // SearchBar Code
  const [searchItem, setSearchItem] = useState('')
  const [filterItem, setFilterItem] = useState([])
  const [isNotificationVisible, setNotificationVisible] = useState(false)
  const [animateBell, setAnimateBell] = useState(false)

  const userData = useSelector((state) => state.user)
  const productData = useSelector((state) => state.buyProduct.items)
  const profileNotification = useSelector((state) => state.user.notification)
  const customNotification = useSelector((state) => state.notification.message)

  const cartDropdownRef = useRef(null)
  const notificationRef = useRef(null) // Reference for CustomNotification

  const toggleCartMenu = () => {
    if (productData.length === 0) {
      return toast.info('Your cart is empty!')
    }
    dispatch(setCartVisible(!isCartVisible))
  }

  const totalBuyProduct = useSelector((state) => state.buyProduct.items)
  const isCartVisible = useSelector((state) => state.modal.cartVisible)

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

  // Handle click outside to close notifications
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        !event.target.closest('.navbar2BellBtn')
      ) {
        setNotificationVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  //Handle Notification Notify

  useEffect(() => {
    if (customNotification.length > 0 || profileNotification.length > 0) {
      const intervalId = setInterval(() => {
        setAnimateBell(true)
        setTimeout(() => setAnimateBell(false), 900)
      }, 10000)

      return () => clearInterval(intervalId)
    }
  }, [customNotification, profileNotification])

  const handleNavigate = () => {
    dispatch(promptDialogBox(true))
    dispatch(setOpacityValue(true))
    setIsCartDropdownOpen(false)
  }
  const handleMyCourses = () => {
    navigate('/wishlistPage')
    dispatch(setWishListValue('All Courses'))
  }
  const handleAccountSetting = () => navigate('/myAccount1')
  const handleMainLogoClick = () => navigate('/')
  const handleWishlistClick = () => {
    navigate('/wishlistPage')
    dispatch(setWishListValue('Wishlist'))
  }

  const browse = [
    'Design',
    'Programming',
    'Business & Marketing',
    'Photo & Video',
    'Writing',
  ]

  const [isBrowseOpen, setIsBrowseOpen] = useState(false)
  const toggleBrowseDropdown = () => {
    setIsBrowseOpen((prev) => !prev)
  }

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false)
  const toggleCartDropdown = () => setIsCartDropdownOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setIsCartDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const [toggle, setToggle] = useState(false)
  const handleNavbarMenuIconClick = () => {
    setToggle(!toggle)
    dispatch(setOpacityValue(true))
  }

  const handleNavbarMenuCloseIcon = () => {
    setToggle(!toggle)
    dispatch(setOpacityValue(false))
  }

  const handleCloseIcon = () => {
    setSearchItem('')
  }

  const handleBellBtnClick = () => {
    setNotificationVisible((prev) => !prev)
  }

  return (
    <div className="navbar2">
      <div className="navbar2Logo">
        <div className="navbar2MenuIconDiv">
          {toggle ? (
            <IoMdClose color="#3dcbb1" onClick={handleNavbarMenuCloseIcon} />
          ) : (
            <IoIosMenu
              color="#3dcbb1"
              className="navbar2MenuIcon"
              onClick={handleNavbarMenuIconClick}
            />
          )}

          <ul className={toggle ? 'navbarMenuActive' : 'navbarMenuDeactivate'}>
            <li className="navbarMenuActiveLi" onClick={handleMyCourses}>
              My Courses
            </li>
            <li className="navbarMenuActiveLi" onClick={handleWishlistClick}>
              Wishlist
            </li>
          </ul>
        </div>
        <img src={logo} alt="Logo" onClick={handleMainLogoClick} />
        <span onClick={handleMainLogoClick}>My Course.io</span>
        <div className="dropdown2">
          <button onClick={toggleBrowseDropdown} className="dropdown2Toggle">
            Browse {isBrowseOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {isBrowseOpen && (
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

      {/* /////////// Search /////////////////// */}

      <div className="navbar2Search">
        <input
          type="text"
          placeholder="Search For Courses"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        {searchItem && filterItem.length > 0 ? (
          <div className="navbar2SearchItem">
            {filterItem.map((item) => (
              <div key={item.id}>{item.cardContent}</div>
            ))}
          </div>
        ) : searchItem && filterItem.length === 0 ? (
          <div className="navbar2SearchItem">No results found</div>
        ) : null}

        <IoIosSearch className="navbar2SearchIcon" />
        <IoMdClose className="navbar2CloseIcon" onClick={handleCloseIcon} />
      </div>

      <div className="navbar2Menu">
        <span className="navbar2Item">Become Instructor</span>
        <MdShoppingCart className="navbar2CartIcon" onClick={toggleCartMenu} />
        {productData.length > 0 && (
          <span className="navbar2CartCount" onClick={toggleCartMenu}>
            {totalBuyProduct.length}
          </span>
        )}

        {/* /////////// Notifications /////////////////// */}

        <button
          className={`navbar2BellBtn ${animateBell ? 'animate' : ''}`}
          onClick={handleBellBtnClick}
        >
          {(profileNotification.length > 0 ||
            customNotification.length > 0) && (
            <div className="notificationIcon"></div>
          )}

          <FaRegBell className="bellIcon" />
          {isNotificationVisible && (
            <div ref={notificationRef}>
              <CustomNotification />
            </div>
          )}
        </button>

        {/* /////////// Profile /////////////////// */}

        <div className="cartDropdownContainer" ref={cartDropdownRef}>
          <div className="cartDropdownProfile">
            {userData.userProfile ? (
              <img
                src={userData.userProfile}
                alt="Profile"
                className="navbar2ProfileImage"
                onClick={toggleCartDropdown}
              />
            ) : (
              <p className="navbar2CartEmojiIcon" onClick={toggleCartDropdown}>
                😎
              </p>
            )}
          </div>
          {isCartDropdownOpen && (
            <div className="cartDropdownMenu">
              <p>
                {userData.userFirstName} {userData.userLastName}
              </p>
              <p className="cartDropdownMenuEmailId">{userData.userEmail}</p>
              <p onClick={handleMyCourses}>My Courses</p>
              <p onClick={toggleCartMenu}>My Cart</p>
              <p
                className="cartDropdownWhishlist"
                onClick={handleWishlistClick}
              >
                Wishlist <WishlistCounter />
              </p>
              <p>Notifications</p>
              <p
                className="cartDropdownAccountSetting"
                onClick={handleAccountSetting}
              >
                Account Settings
              </p>
              <p onClick={handleNavigate}>Logout</p>
            </div>
          )}
        </div>
      </div>
      <CartMenu isVisible={isCartVisible} />
      <PromptDialogBox />
    </div>
  )
}

export default Navbar2
