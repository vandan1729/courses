import QRCode from 'qrcode.react'
import React from 'react'
import { useSelector } from 'react-redux'

function QRCodeGenerator() {
  const buyProducts = useSelector((state) => state.buyProduct.items)

  const totalPrice = buyProducts
    .reduce((total, product) => total + product.cardPrice, 0)
    .toFixed(2)

  // Construct UPI URL
  const upiUrl = `upi://pay?pa=ayushpatel2492002@oksbi&pn=Ayush%20Patel&am=${totalPrice}&cu=INR`

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <QRCode value={upiUrl} size={160} />
      <p>Scan this QR code to Pay ${totalPrice}</p>
    </div>
  )
}

export default QRCodeGenerator
