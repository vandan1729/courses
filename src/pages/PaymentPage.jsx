import { useState, useEffect } from 'react'
import Navbar2 from '../components/homePage2/Navbar2'
import TotalProductBuyPrice from '../components/common/TotalProductBuyPrice'
import QRCodeGenerator from '../components/common/QRCodeGenerator'
import { toast } from 'react-toastify'

import { AnimatePresence } from 'framer-motion'
import {
  setBuyCourseData,
  setWishListValue,
} from '../redux/features/wishListSlice'
import { clearCart } from '../redux/features/buyProductSlice'
import { setOpacityValue } from '../redux/features/modalSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import SuccessAnimation from '../components/common/SuccessAnimation'

import '../styling/PaymentPage.css'

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [timer, setTimer] = useState(null)
  const [timeLeft, setTimeLeft] = useState(120)
  const [toggle, setToggle] = useState(false)

  const opacityValue = useSelector((state) => state.modal.opacityValue)
  const product = useSelector((state) => state.buyProduct)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (paymentMethod === 'upi') {
      startTimer()
      setToggle(true)
    } else {
      clearInterval(timer)
      setTimeLeft(120)
    }

    return () => clearInterval(timer)
  }, [paymentMethod])

  useEffect(() => {
    if (timeLeft <= 0) {
      toast.error('Payment failed! Redirecting to homepage...')
      navigate('/')
    }
  }, [timeLeft, navigate])

  const startTimer = () => {
    if (timer) clearInterval(timer)
    const newTimer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)
    setTimer(newTimer)
  }

  const handlePayment = () => {
    if (toggle) {
      dispatch(setOpacityValue(true))
      setShowSuccess(true)
      dispatch(setBuyCourseData(product))
      dispatch(setWishListValue('Courses'))

      setTimeout(() => {
        dispatch(setOpacityValue(false))
        setShowSuccess(false)
        navigate('/wishlistPage')
        dispatch(clearCart())
        clearInterval(timer)
      }, 5000)
    } else {
      toast.error('Make sure your data is entered correctly.')
    }
  }

  const handleExpiryDate = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '')

    let formattedValue
    if (numericValue.length <= 2) {
      formattedValue = numericValue
    } else if (numericValue.length <= 4) {
      formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`
    } else {
      formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`
    }

    e.target.value = formattedValue

    // Validate expiry date
    if (formattedValue.length === 5) {
      const [monthStr, yearStr] = formattedValue.split('/')
      const month = parseInt(monthStr, 10)
      const year = parseInt(yearStr, 10)

      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() % 100
      const currentMonth = currentDate.getMonth() + 1

      // Check if the month and year are valid
      if (
        month < 1 ||
        month > 12 ||
        year < currentYear ||
        (year === currentYear && month < currentMonth)
      ) {
        toast.error('Invalid Expiry Date')
        setToggle(false)
      } else {
        setToggle(true)
      }
    }
  }

  const handleCardInput = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '')

    if (numericValue.length <= 4) {
      e.target.value = numericValue
    } else if (numericValue.length <= 8) {
      e.target.value = `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)}`
    } else if (numericValue.length <= 12) {
      e.target.value = `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)} ${numericValue.slice(8, 12)}`
    } else {
      e.target.value = `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)} ${numericValue.slice(8, 12)} ${numericValue.slice(12, 16)}`
      setToggle(true)
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

          {/* Pay with Card Option */}
          <div className="paymentOption">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              className="paymentRadio"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            <label htmlFor="card" className="paymentLabel">
              Pay with Card
            </label>
          </div>

          {paymentMethod === 'card' && (
            <div className="cardDetails">
              <label className="label">
                <span className="title">Card Number</span>
                <input
                  type="text"
                  className="input-field"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  onChange={handleCardInput}
                />
              </label>
              <div className="split">
                <label className="label">
                  <span className="title">Expiry Date</span>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="01/23"
                    onChange={handleExpiryDate}
                    maxLength={5}
                  />
                </label>
                <label className="label">
                  <span className="title">CVC</span>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="CVC"
                    maxLength={3}
                  />
                </label>
              </div>
            </div>
          )}

          {/* Pay with UPI Option */}
          <div className="paymentOption">
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              className="paymentRadio"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            <label htmlFor="upi" className="paymentLabel">
              Pay with UPI
            </label>
          </div>

          {paymentMethod === 'upi' && (
            <div className="paymentDetails upiDetails">
              <QRCodeGenerator />
              <p className="timer">
                Please complete the payment within{' '}
                <strong>{`${Math.floor(timeLeft / 60)}:${
                  timeLeft % 60 < 10 ? '0' : ''
                }${timeLeft % 60}`}</strong>{' '}
                minutes
              </p>
            </div>
          )}

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
