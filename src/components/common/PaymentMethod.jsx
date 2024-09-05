import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaGooglePay } from 'react-icons/fa6'
import { BsPaypal } from 'react-icons/bs'
import QRCodeGenerator from '../common/QRCodeGenerator'
import {
  setPaymentMethod,
  setCardNumber,
  setExpiryDate,
  setCvc,
  setCardNumberValid,
  setExpiryDateValid,
  setCvcValid,
} from '../../redux/features/paymentSlice'
import '../../styling/PaymentPage.css'

function PaymentMethod() {
  const dispatch = useDispatch()

  const cardNumber = useSelector((state) => state.payment.cardNumber)
  const expiryDate = useSelector((state) => state.payment.expiryDate)
  const cardNumberValid = useSelector((state) => state.payment.cardNumberValid)
  const expiryDateValid = useSelector((state) => state.payment.expiryDateValid)

  const [paymentMethod, setPaymentMethodState] = useState('card')
  const [timeLeft, setTimeLeft] = useState(120)
  const [timer, setTimer] = useState(null)

  const currentYear = new Date().getFullYear() % 100
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')

  useEffect(() => {
    if (paymentMethod === 'upi') {
      startTimer()
    } else {
      clearInterval(timer)
      setTimeLeft(120)
    }

    return () => clearInterval(timer)
  }, [paymentMethod])

  const startTimer = () => {
    if (timer) clearInterval(timer)
    const newTimer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)
    setTimer(newTimer)
  }

  const handlePaymentMethodChange = (method) => {
    setPaymentMethodState(method)
    dispatch(setPaymentMethod(method)) // Ensure to update Redux state too
  }

  const handleCardInput = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '')

    let formattedValue = numericValue
    if (numericValue.length > 4) {
      formattedValue = `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)}`
    }
    if (numericValue.length > 8) {
      formattedValue = `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)} ${numericValue.slice(8, 12)}`
    }
    if (numericValue.length > 12) {
      formattedValue = `${numericValue.slice(0, 4)} ${numericValue.slice(4, 8)} ${numericValue.slice(8, 12)} ${numericValue.slice(12, 16)}`
    }

    e.target.value = formattedValue

    dispatch(setCardNumber(formattedValue))
    dispatch(setCardNumberValid(numericValue.length === 16))
  }

  const handleExpiryDate = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '')

    let formattedValue = numericValue
    if (numericValue.length > 2) {
      formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`
    }

    e.target.value = formattedValue

    const isValid = () => {
      if (formattedValue.length === 5) {
        const [monthStr, yearStr] = formattedValue.split('/')
        const month = parseInt(monthStr, 10)
        const year = parseInt(yearStr, 10)

        return !(
          month < 1 ||
          month > 12 ||
          year < currentYear ||
          (year === currentYear && month < currentMonth)
        )
      }
      return false
    }

    const valid = isValid()
    setExpiryDateValid(valid)

    dispatch(setExpiryDate(formattedValue))
    dispatch(setExpiryDateValid(valid))
  }

  const handleCvcInput = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '') // Remove non-numeric characters

    e.target.value = numericValue

    dispatch(setCvc(numericValue))
    dispatch(setCvcValid(numericValue.length === 3))
  }

  return (
    <>
      {/* Pay with Card Option */}
      <div className="paymentOption">
        <div className="creditCardOption">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            className="paymentRadio"
            checked={paymentMethod === 'card'}
            onChange={() => handlePaymentMethodChange('card')}
          />
          <label htmlFor="card" className="paymentLabel">
            Pay with Card
          </label>
          <CiCreditCard1 className="creditCardIcon" />
        </div>
        {paymentMethod === 'card' && (
          <div className="cardDetails">
            <label className="label">
              <span className="title">Card Number</span>
              <input
                type="text"
                className={`input-field ${cardNumberValid ? 'valid' : 'invalid'}`}
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                onChange={handleCardInput}
                value={cardNumber || ''}
              />
            </label>
            <div className="split">
              <label className="label">
                <span className="title">Expiry Date</span>
                <input
                  type="text"
                  className={`input-field ${expiryDateValid ? 'valid' : 'invalid'}`}
                  placeholder={`${currentMonth}/${currentYear}`}
                  onChange={handleExpiryDate}
                  maxLength={5}
                  value={expiryDate || ''}
                />
              </label>
              <label className="label">
                <span className="title">CVC</span>
                <input
                  type="password"
                  className="input-field"
                  placeholder="CVC"
                  maxLength={3}
                  onChange={handleCvcInput}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Pay with UPI Option */}
      <div className="paymentOption">
        <div className="upiOption">
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            className="paymentRadio"
            checked={paymentMethod === 'upi'}
            onChange={() => handlePaymentMethodChange('upi')}
          />
          <label htmlFor="upi" className="paymentLabel">
            Pay with UPI
          </label>
          <FaGooglePay className="gPayIcon" />
          <BsPaypal className="payPalIcon" />
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
      </div>
    </>
  )
}

export default PaymentMethod
