import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCardNumberValid,
  setExpiryDateValid,
  setCvcValid,
  setCardNumber,
  setExpiryDate,
  setCvc,
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

function CreditCard({ showCvc }) {
  const dispatch = useDispatch()

  const cardNumber = useSelector((state) => state.payment.cardNumber)
  const expiryDate = useSelector((state) => state.payment.expiryDate)
  const cvc = useSelector((state) => state.payment.cvc)
  // console.log(cvc)
  const cardNumberValid = useSelector((state) => state.payment.cardNumberValid)
  const expiryDateValid = useSelector((state) => state.payment.expiryDateValid)
  const cvcValid = useSelector((state) => state.payment.cvcValid)

  // const [inputCvc, setInputCvc] = useState(cvc)

  const currentYear = new Date().getFullYear() % 100
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')

  const handleCardInput = useCallback(
    (e) => {
      const formattedValue = formatCardNumber(e.target.value)
      dispatch(setCardNumber(formattedValue))
      const numericCardNumber = formattedValue.replace(/\s/g, '')
      dispatch(setCardNumberValid(numericCardNumber.length === 16))
    },
    [dispatch],
  )

  const handleExpiryDate = useCallback(
    (e) => {
      const formattedValue = formatExpiryDate(e.target.value)
      const valid = isExpiryDateValid(formattedValue, currentYear, currentMonth)
      dispatch(setExpiryDate(formattedValue))
      dispatch(setExpiryDateValid(valid))
    },
    [dispatch, currentYear, currentMonth],
  )

  // useEffect(() => {
  //   dispatch(setCvcValid(false))
  // }, [cardNumber, expiryDate, dispatch])

  const handleCvcInput = useCallback(
    (e) => {
      const numericValue = e.target.value.replace(/\D/g, '')
      dispatch(setCvc(numericValue))
      dispatch(setCvcValid(numericValue.length === 3))
    },
    [dispatch],
  )

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
          {showCvc && (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default CreditCard
