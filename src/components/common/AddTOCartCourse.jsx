import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../../redux/features/buyProductSlice'
import { updateCardDetails } from '../../redux/features/unPaidWebinarSlice'
import { setCartVisible } from '../../redux/features/modalSlice'

import '../../styling/AddTOCartCourse.css'

function AddTOCartCourse() {
  const productData = useSelector((state) => state.buyProduct)
  console.log(productData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleProductRemove = (product) => {
    dispatch(removeProduct(product.id))
  }

  const handleImgClick = (item) => {
    dispatch(
      updateCardDetails({
        price: {
          newPrice: item.cardPrice,
          oldPrice: item.cardDiscountPrice,
        },
        discount: item.cardDiscount || '20% OFF',
        details: {
          sections: item.cardSections || 'No Sections',
          lectures: item.cardLectures || 'NO Lectures',
          length: item.cardLength || 'NO length',
          language: item.cardLanguage || 'English',
        },
        courseName: item.cardContent,
        courseDetails: item.cardDescription,
        courseImage: item?.cardImg,
      }),
    )
    navigate('/unPaidWebinarPage')
    dispatch(setCartVisible(false))
  }

  return (
    <div className="cartMenuProductData">
      <div>
        {productData.map((item, index) => (
          <div className="cartMenuProductDiv" key={index}>
            <div className="cartMenuProductImg">
              <img src={item.cardImg} onClick={() => handleImgClick(item)} />
            </div>

            <div className="cartMenuProductDetails">
              <IoMdClose
                className="cartMenuProductRemoveIcon"
                onClick={() => handleProductRemove(item)}
              />
              <span
                className="cartMenuProductName"
                onClick={() => handleImgClick(item)}
              >
                {item.cardContent}
              </span>
              <div
                className="cartMenuProductPriceSpan"
                onClick={() => handleImgClick(item)}
              >
                <span className="cartMenuProductPrice">${item.cardPrice}</span>
                <span className="cartMenuProductDiscountPrice">
                  ${item.cardDiscountPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddTOCartCourse
