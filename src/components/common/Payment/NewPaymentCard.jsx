import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import {
  addCard,
  updateCard,
  removeCard,
} from '../../../redux/features/paymentSlice'
import '../../../styling/NewPaymentCard.css'
import CreditCard from './CreditCard'

function NewPaymentCard() {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.payment.cards)

  const [editingCardId, setEditingCardId] = useState(null)
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')
  const [isAddingNewCard, setIsAddingNewCard] = useState(false)

  useEffect(() => {
    if (editingCardId !== null) {
      const card = cards.find((card) => card.id === editingCardId)
      if (card) {
        setCardNumber(card.cardNumber)
        setExpiryDate(card.expiryDate)
        setCvc(card.cvc)
      }
    } else {
      resetForm()
    }
    // console.log(cards)
  }, [editingCardId, cards])

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
            cvc,
          },
        }),
      )
    } else {
      dispatch(
        addCard({
          cardNumber,
          expiryDate,
          cvc,
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
    setCardNumber('')
    setExpiryDate('')
    setCvc('')
    setIsAddingNewCard(false)
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
              {cards.map((card) => (
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
                    <div className="cvc">CVC: ***</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-cards-message">"No saved cards"</p>
          )}
        </>
      ) : (
        <div className="card-details-form">
          <CreditCard
            cardNumber={cardNumber}
            expiryDate={expiryDate}
            cvc={cvc}
            setCardNumber={setCardNumber}
            setExpiryDate={setExpiryDate}
            setCvc={setCvc}
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
