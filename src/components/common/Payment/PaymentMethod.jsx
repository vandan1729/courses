import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaGooglePay } from 'react-icons/fa6'
import { BsPaypal } from 'react-icons/bs'
import QRCodeGenerator from './QRCodeGenerator'
import {
  setCardNumberValid,
  setExpiryDateValid,
  setCvcValid,
} from '../../../redux/features/paymentSlice'
import {
  setBuyCourseData,
  setWishListValue,
} from '../../../redux/features/wishListSlice'
import { clearCart } from '../../../redux/features/buyProductSlice'
import {
  setOpacityValue,
  showSuccess,
} from '../../../redux/features/modalSlice'
import '../../../styling/PaymentPage.css'
import CreditCard from './CreditCard'

function PaymentMethod() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState({
    card: true,
    upi: false,
  })
  const [selectedCardId, setSelectedCardId] = useState(null)
  const [isCardInputVisible, setIsCardInputVisible] = useState(true)

  const cards = useSelector((state) => state.payment.cards)
  const cardNumberValid = useSelector((state) => state.payment.cardNumberValid)
  const expiryDateValid = useSelector((state) => state.payment.expiryDateValid)
  const cvcValid = useSelector((state) => state.payment.cvcValid)
  const product = useSelector((state) => state.buyProduct.items)

  const [timeLeft, setTimeLeft] = useState(120)
  const [timer, setTimer] = useState(null)

  const [selectedCard, setSelectedCard] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  })

  useEffect(() => {
    if (paymentMethod.upi) {
      startTimer()
    } else {
      clearInterval(timer)
      setTimeLeft(120)
    }
    return () => clearInterval(timer)
  }, [paymentMethod.upi])

  useEffect(() => {
    setIsCardInputVisible(false)
  }, [])

  const startTimer = () => {
    if (timer) clearInterval(timer)
    const newTimer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newTimer)
          toast.error('Payment Failed')
          navigate('/')
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
    setTimer(newTimer)
  }

  const handlePayment = () => {
    if (
      (cardNumberValid && expiryDateValid && cvcValid) ||
      paymentMethod.upi ||
      selectedCardId
    ) {
      dispatch(setOpacityValue(true))
      dispatch(showSuccess(true))
      dispatch(setBuyCourseData(product))
      dispatch(setWishListValue('Courses'))

      setTimeout(() => {
        dispatch(setOpacityValue(false))
        dispatch(showSuccess(false))
        navigate('/wishlistPage')
        dispatch(clearCart())
      }, 5000)
    } else {
      toast.error('Make sure your data is entered correctly.')
    }
  }

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod({
      card: method === 'card',
      upi: method === 'upi',
    })
    if (method === 'card') {
      setSelectedCardId(null)
      setSelectedCard({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
      })
    }
  }

  const handleCardSelection = (id) => {
    const card = cards.find((card) => card.id === id)
    if (card) {
      setSelectedCardId(id)
      setSelectedCard({
        cardNumber: card.cardNumber,
        expiryDate: card.expiryDate,
        cvc: card.cvc,
      })
      setIsCardInputVisible(true)
    }
  }

  const payWithDifferentCard = () => {
    setIsCardInputVisible(true)
    setSelectedCardId(null)
    setSelectedCard({
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    })
  }

  const handleCardInputChange = (field, value) => {
    setSelectedCard((prev) => ({ ...prev, [field]: value }))
    if (selectedCardId !== null) {
      setSelectedCardId(null)
    }
  }

  return (
    <>
      <div className="paymentOption">
        <div className="creditCardOption">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            className="paymentRadio"
            checked={paymentMethod.card}
            onChange={() => handlePaymentMethodChange('card')}
          />
          <label htmlFor="card" className="paymentLabel">
            Pay with Card
          </label>
          <CiCreditCard1 className="creditCardIcon" />
        </div>
        {paymentMethod.card && (
          <>
            <div className="cardList">
              {cards.map((card) => (
                <div key={card.id} className="cardItem">
                  <input
                    type="radio"
                    id={`card-${card.id}`}
                    name="savedCard"
                    className="paymentRadio"
                    checked={selectedCardId === card.id}
                    onChange={() => handleCardSelection(card.id)}
                  />
                  <label htmlFor={`card-${card.id}`} className="paymentLabel">
                    {card.cardNumber.slice(0, 4) +
                      ' **** **** ' +
                      card.cardNumber.slice(-4)}
                  </label>
                </div>
              ))}
              {!isCardInputVisible && cards.length !== 0 && (
                <button
                  className="newCardBtn"
                  style={{ marginTop: '1rem' }}
                  onClick={payWithDifferentCard}
                >
                  Pay With Different Card
                </button>
              )}
            </div>
            {isCardInputVisible && (
              <CreditCard
                cardNumber={selectedCard.cardNumber}
                expiryDate={selectedCard.expiryDate}
                cvc={selectedCard.cvc}
                setCardNumber={(value) =>
                  handleCardInputChange('cardNumber', value)
                }
                setExpiryDate={(value) =>
                  handleCardInputChange('expiryDate', value)
                }
                setCvc={(value) => handleCardInputChange('cvc', value)}
                showCvc={true} // Show CVC field if needed
              />
            )}
          </>
        )}
      </div>

      <div className="paymentOption">
        <div className="upiOption">
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            className="paymentRadio"
            checked={paymentMethod.upi}
            onChange={() => handlePaymentMethodChange('upi')}
          />
          <label htmlFor="upi" className="paymentLabel">
            Pay with UPI
          </label>
          <FaGooglePay className="gPayIcon" />
          <BsPaypal className="payPalIcon" />
        </div>
        {paymentMethod.upi && (
          <div className="paymentDetails upiDetails">
            <QRCodeGenerator />
            <p className="timer">
              Please complete the payment within{' '}
              <strong>{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</strong>{' '}
              minutes
            </p>
          </div>
        )}
      </div>

      <button className="paymentButton" onClick={handlePayment}>
        Proceed To Pay
      </button>
    </>
  )
}

export default PaymentMethod
