import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../../redux/features/buyProductSlice'

import '../../styling/AddTOCartCourse.css'

function AddTOCartCourse() {
  const productData = useSelector((state) => state.buyProduct)
  const dispatch = useDispatch()

  const handleProductRemove = (product) => {
    dispatch(removeProduct(product.id))
  }

  return (
    <div className="cartMenuProductData">
      <div>
        {productData.map((item, index) => (
          <div className="cartMenuProductDiv" key={index}>
            <div className="cartMenuProductImg">
              <img src={item.cardImg} />
            </div>

            <div className="cartMenuProductDetails">
              <IoMdClose
                className="cartMenuProductRemoveIcon"
                onClick={() => handleProductRemove(item)}
              />
              <span className="cartMenuProductName">{item.cardContent}</span>
              <div className="cartMenuProductPriceSpan">
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
