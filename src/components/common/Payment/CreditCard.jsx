import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCardNumber,
  setExpiryDate,
  setCvc,
  setCardNumberValid,
  setExpiryDateValid,
  setCvcValid,
} from '../../../redux/features/paymentSlice'
import '../../../styling/PaymentPage.css'

// Utility Functions
const formatCardNumber = (value) => {
  const numericValue = value.replace(/\D/g, '')
  return numericValue.match(/.{1,4}/g)?.join(' ') || ''
}

const formatExpiryDate = (value) => {
  const numericValue = value.replace(/\D/g, '')
  return numericValue.length > 2
    ? `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`
    : numericValue
}

const isExpiryDateValid = (formattedValue, currentYear, currentMonth) => {
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

function CreditCard({
  cardNumber,
  expiryDate,
  cvc,
  setCardNumber,
  setExpiryDate,
  setCvc,
}) {
  const dispatch = useDispatch()

  const cardNumberValid = useSelector((state) => state.payment.cardNumberValid)
  const expiryDateValid = useSelector((state) => state.payment.expiryDateValid)
  const cvcValid = useSelector((state) => state.payment.cvcValid)

  const currentYear = new Date().getFullYear() % 100
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')

  const handleCardInput = (e) => {
    const formattedValue = formatCardNumber(e.target.value)
    e.target.value = formattedValue
    setCardNumber(formattedValue)
    dispatch(
      setCardNumberValid(formattedValue.replace(/\s/g, '').length === 16),
    )
  }

  const handleExpiryDate = (e) => {
    const formattedValue = formatExpiryDate(e.target.value)
    e.target.value = formattedValue
    const valid = isExpiryDateValid(formattedValue, currentYear, currentMonth)
    setExpiryDate(formattedValue)
    dispatch(setExpiryDateValid(valid))
  }

  const handleCvcInput = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '')
    e.target.value = numericValue
    setCvc(numericValue)
    dispatch(setCvcValid(numericValue.length === 3))
  }

  return (
    <div className="paymentOption">
      <div className="cardDetails">
        <label className="label">
          <span className="title">Card Number</span>
          <input
            type="text"
            className={`input-field ${cardNumberValid ? 'valid' : 'invalid'}`}
            placeholder="1350 **** **** 3210"
            maxLength={19}
            value={cardNumber}
            onChange={handleCardInput}
          />
        </label>

        <div className="split">
          <label className="label">
            <span className="title">Expiry Date</span>
            <input
              type="text"
              className={`input-field ${expiryDateValid ? 'valid' : 'invalid'}`}
              placeholder={`${currentMonth}/${currentYear}`}
              value={expiryDate}
              onChange={handleExpiryDate}
              maxLength={5}
            />
          </label>
          <label className="label">
            <span className="title">CVC</span>
            <input
              type="password"
              className={`input-field ${cvcValid ? 'valid' : 'invalid'}`}
              placeholder="CVC"
              value={cvc}
              maxLength={3}
              onChange={handleCvcInput}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
