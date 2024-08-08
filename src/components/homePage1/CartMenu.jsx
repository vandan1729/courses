import { useRef, useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx'

import '../../styling/CartMenu.css'

const CartMenu = ({ isVisible, onClose }) => {
  const cartMenuRef = useRef(null)

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

  return (
    <div className={`cartMenu ${isVisible ? 'visible' : ''}`} ref={cartMenuRef}>
      <div className="closeBtnDiv">
        <RxCross1 className="closeBtn" onClick={onClose} />
      </div>

      <div className="cartMenuData">
        <h2>Your Cart</h2>
        <div>
          <p>Items</p>
        </div>
      </div>
    </div>
  )
}

export default CartMenu
