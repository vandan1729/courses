import React from 'react'
import { useSelector } from 'react-redux'

import '../../styling/TotalProductBuyPrice.css'

function TotalProductBuyPrice() {
  const buyProducts = useSelector((state) => state.buyProduct)

  const totalPrice =
    Math.round(
      buyProducts.reduce((total, product) => total + product.cardPrice, 0) * 10,
    ) / 10
  const totalDiscountPrice =
    Math.round(
      buyProducts.reduce(
        (total, product) => total + product.cardDiscountPrice,
        0,
      ) * 10,
    ) / 10

  return (
    <>
      <div>
        <div className="ProductPriceDetailsDiv">
          <h3>Price details</h3>
          {buyProducts.map((product, index) => (
            <div key={product.id} className="ProductPriceItem">
              <span className="productPrice">{product.cardContent}</span>
              <span>${product.cardPrice}</span>
            </div>
          ))}
          <span className="productTotalAmount">
            Total Amount <span>${totalPrice}</span>
          </span>
          <span className="productTotalSave">
            You will save ${totalDiscountPrice} on this order
          </span>
        </div>
      </div>
    </>
  )
}

export default TotalProductBuyPrice
