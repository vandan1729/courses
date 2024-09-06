import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MdModeEdit,
  MdDelete,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import {
  addCard,
  updateCard,
  removeCard,
  setCardNumber,
  setExpiryDate,
  setCvc,
  setCardNumberValid,
  setExpiryDateValid,
} from '../../../redux/features/paymentSlice'
import '../../../styling/NewPaymentCard.css'
import CreditCard from './CreditCard'

function NewPaymentCard() {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.payment.cards)

  const [editingCardId, setEditingCardId] = useState(null)
  const [isAddingNewCard, setIsAddingNewCard] = useState(false)
  const [visibleStartIndex, setVisibleStartIndex] = useState(0)

  const cardNumber = useSelector((state) => state.payment.cardNumber)
  const expiryDate = useSelector((state) => state.payment.expiryDate)

  useEffect(() => {
    if (editingCardId !== null) {
      const card = cards.find((card) => card.id === editingCardId)
      if (card) {
        dispatch(setCardNumber(card.cardNumber))
        dispatch(setExpiryDate(card.expiryDate))
      }
    } else {
      resetForm()
    }
  }, [editingCardId, cards, dispatch])

  const handleEditClick = (card) => {
    setEditingCardId(card.id)
    setIsAddingNewCard(false)
  }

  const handleUpdateClick = () => {
    if (editingCardId) {
      dispatch(
        updateCard({
          id: editingCardId,
          cardData: {
            cardNumber,
            expiryDate,
          },
        }),
      )
    } else {
      dispatch(
        addCard({
          cardNumber,
          expiryDate,
        }),
      )
    }
    resetForm()
  }

  const handleDeleteClick = (id) => {
    dispatch(removeCard({ id }))
  }

  const resetForm = () => {
    setEditingCardId(null)
    dispatch(setCardNumber(''))
    dispatch(setExpiryDate(''))
    dispatch(setCvc(''))
    dispatch(setCardNumberValid(false))
    dispatch(setExpiryDateValid(false))
    setIsAddingNewCard(false)
  }

  // Handle scrolling through cards
  const handleNextClick = () => {
    if (visibleStartIndex + 1 < cards.length) {
      setVisibleStartIndex((prevIndex) => prevIndex + 1)
    }
  }

  const handlePrevClick = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <div className="new-payment-card">
      {editingCardId === null && !isAddingNewCard ? (
        <>
          <div
            className="cardHeadingDiv"
            onClick={() => setIsAddingNewCard(true)}
          >
            <h2 className="saved-cards-heading">Saved Cards </h2>
            <div className="addCardDiv">
              <span>Add New Card</span>
              <IoMdAdd
                className="cardCloseIcon"
                onClick={() => setIsAddingNewCard(true)}
              />
            </div>
          </div>

          {cards.length > 0 ? (
            <ul className="card-list">
              {cards
                .slice(visibleStartIndex, visibleStartIndex + 1) // Show only 1 card at a time
                .map((card) => (
                  <li key={card.id} className="card-item">
                    <MdModeEdit
                      className="edit-icon"
                      onClick={() => handleEditClick(card)}
                    />
                    <MdDelete
                      className="delete-icon"
                      onClick={() => handleDeleteClick(card.id)}
                    />
                    <div className="card-info">
                      <div className="card-number">
                        Card Number:{' '}
                        {card.cardNumber.slice(0, 4) +
                          ' **** **** ' +
                          card.cardNumber.slice(-4)}
                      </div>
                      <div className="expiry-date">
                        Expiry Date: {card.expiryDate}
                      </div>
                    </div>
                  </li>
                ))}
              <MdChevronLeft
                className={`cardLeftIcon ${visibleStartIndex === 0 ? 'activeCardIcon' : ''}`}
                onClick={handlePrevClick}
              />

              <MdChevronRight
                className={`cardRightIcon ${
                  visibleStartIndex + 1 >= cards.length ? 'activeCardIcon' : ''
                }`}
                onClick={handleNextClick}
              />
            </ul>
          ) : (
            <p className="no-cards-message">"No saved cards"</p>
          )}
        </>
      ) : (
        <div className="card-details-form">
          <CreditCard
            showCvc={false} // Show CVC field if needed
          />
          <div className="form-buttons">
            <button className="update-button" onClick={handleUpdateClick}>
              {editingCardId ? 'Update' : 'Add Card'}
            </button>
            <button className="cancel-button" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewPaymentCard
