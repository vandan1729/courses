import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Navbar2 from '../components/homePage2/Navbar2'
import TotalProductBuyPrice from '../components/common/TotalProductBuyPrice'
import PaymentMethod from '../components/common/PaymentMethod'
import SuccessAnimation from '../components/common/SuccessAnimation'
import { AnimatePresence } from 'framer-motion'
import {
  setBuyCourseData,
  setWishListValue,
} from '../redux/features/wishListSlice'
import { clearCart } from '../redux/features/buyProductSlice'
import { setOpacityValue } from '../redux/features/modalSlice'
import '../styling/PaymentPage.css'

function PaymentPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const paymentMethod = useSelector((state) => state.payment.paymentMethod)
  const opacityValue = useSelector((state) => state.modal.opacityValue)
  const product = useSelector((state) => state.buyProduct.items)

  const cardNumberValid = useSelector((state) => state.payment.cardNumberValid)
  const expiryDateValid = useSelector((state) => state.payment.expiryDateValid)
  const cvcValid = useSelector((state) => state.payment.cvcValid)

  const [showSuccess, setShowSuccess] = useState(false)

  const handlePayment = () => {
    if (
      (cardNumberValid && expiryDateValid && cvcValid) ||
      paymentMethod === 'upi'
    ) {
      dispatch(setOpacityValue(true))
      setShowSuccess(true)
      dispatch(setBuyCourseData(product))
      dispatch(setWishListValue('Courses'))

      setTimeout(() => {
        dispatch(setOpacityValue(false))
        setShowSuccess(false)
        navigate('/wishlistPage')
        dispatch(clearCart())
      }, 5000)
    } else {
      toast.error('Make sure your data is entered correctly.')
    }
  }

  return (
    <>
      <Navbar2 />
      <div className="paymentPage" style={{ opacity: opacityValue ? 0.5 : 1 }}>
        <div className="paymentPriceDiv">
          <TotalProductBuyPrice />
        </div>
        <div className="paymentPageContainer">
          <h2 className="paymentTitle">Payment Options</h2>
          <PaymentMethod />
          <button className="paymentButton" onClick={handlePayment}>
            Proceed to Pay
          </button>
        </div>
      </div>
      <AnimatePresence>{showSuccess && <SuccessAnimation />}</AnimatePresence>
    </>
  )
}

export default PaymentPage
