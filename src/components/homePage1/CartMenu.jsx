import { useRef, useEffect } from 'react'
import { useNavigate} from "react-router-dom"

import { RiDeleteBin6Line, RiDeleteBin5Line } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { BsCartPlus } from "react-icons/bs";

import AddTOCartCourse from '../common/AddTOCartCourse'
import { useDispatch,useSelector } from 'react-redux'
import { clearCart } from '../../redux/features/buyProductSlice'

import '../../styling/CartMenu.css'

const CartMenu = ({ isVisible, onClose }) => {

  const navigate = useNavigate();
  const cartMenuRef = useRef(null)
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.buyProduct)


  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleButBtnClick = () => {
    navigate('/courseBuyPage')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartMenuRef.current && !cartMenuRef.current.contains(event.target)) {
        onClose()
      }
    }
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVisible, onClose])

  const handleEmptyCartClick = () => {
    onClose()
  }

  return (
    <div className={`cartMenu ${isVisible ? 'visible' : ''}`} ref={cartMenuRef}>
      <div className="closeBtnDiv">
        <RxCross1 className="closeBtn" onClick={onClose} />
      </div>

      <div className="cartMenuData">
        <h2>Your Cart</h2>
      </div>
      <div className="cartMenuProductDetails">

        <AddTOCartCourse />

        {
          productData.length > 0 ? (
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
          <button className="cartMenuProductBuyBtn" onClick={handleButBtnClick}>Buy Now</button>
        </div>
          ) : (
            <>
            <BsCartPlus className='emptyCartIcon' onClick={handleEmptyCartClick}/>
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default CartMenu
