import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { RiDeleteBin6Line, RiDeleteBin5Line } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { BsCartPlus } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'

import AddTOCartCourse from '../common/AddTOCartCourse'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/features/buyProductSlice'
import { setCartVisible } from '../../redux/features/modalSlice'

import '../../styling/CartMenu.css'

const CartMenu = () => {
  const navigate = useNavigate()
  const cartMenuRef = useRef(null)
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.buyProduct.items)
  const isVisible = useSelector((state) => state.modal.cartVisible)

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleBuyBtnClick = () => {
    navigate('/courseBuyPage')
    dispatch(setCartVisible(false))
  }

  const handleEmptyCartClick = () => {
    dispatch(setCartVisible(false))
  }

  useEffect(() => {
    if (productData.length === 0) {
      handleEmptyCartClick()
    }
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartMenuRef.current && !cartMenuRef.current.contains(event.target)) {
        dispatch(setCartVisible(false))
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVisible, dispatch])

  return (
    <div className={`cartMenu ${isVisible ? 'visible' : ''}`} ref={cartMenuRef}>
      <div className="closeBtnDiv">
        <RxCross1
          className="closeBtn"
          onClick={() => dispatch(setCartVisible(false))}
        />
      </div>

      <div className="cartMenuData">
        <h2>Your Cart</h2>
      </div>
      <div className="cartMenuProductDetails">
        <div className="cartMenuProduct">
          <AddTOCartCourse />
        </div>

        {productData.length > 0 ? (
          <div className="cartMenuProductCheckoutDiv">
            <div className="cartMenuProductBuyicon">
              <RiDeleteBin6Line
                className="cartMenuProductCloseDeleteIcon"
                onClick={handleClearCart}
              />
              <RiDeleteBin5Line
                className="cartMenuProductOpenDeleteIcon"
                onClick={handleClearCart}
              />
            </div>
            <button
              className="cartMenuProductBuyBtn"
              onClick={handleBuyBtnClick}
            >
              <div className="button-wrapper">
                <div className="text">Buy Now</div>
                <span className="icon">
                  <MdOutlinePayments />
                </span>
              </div>
            </button>
          </div>
        ) : (
          <>
            <BsCartPlus
              className="emptyCartIcon"
              onClick={handleEmptyCartClick}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default CartMenu
