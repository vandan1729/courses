import React, { useState } from 'react'
import Layout from '../layoutComponent/Layout'
import AddTOCartCourse from '../components/common/AddTOCartCourse'
import TotalProductBuyPrice from '../components/common/TotalProductBuyPrice'

import { FaAmazonPay } from 'react-icons/fa'
import { setWishListValue } from '../redux/features/wishListSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SuccessAnimation from '../components/common/SuccessAnimation'
import { setBuyCourseData } from '../redux/features/wishListSlice'
import { clearCart } from '../redux/features/buyProductSlice'
import { setOpacityValue } from '../redux/features/modalSlice'

import '../styling/CourseBuyPage.css'

function CourseBuyPage() {
  const opacityValue = useSelector((state) => state.modal.opacityValue)
  const product = useSelector((state) => state.buyProduct)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showSuccess, setShowSuccess] = useState(false)

  const handleBuyPage = () => {
    dispatch(setOpacityValue(true))
    setShowSuccess(true)
    dispatch(setBuyCourseData(product))
    dispatch(setWishListValue('Courses'))

    setTimeout(() => {
      dispatch(setOpacityValue(false))
      setShowSuccess(false)
      navigate('/wishlistPage')
      dispatch(clearCart())
    }, 5000)
  }

  return (
    <>
      <Layout>
        <div
          className="courseBuyPageDiv"
          style={{ opacity: opacityValue ? '0.5' : '1' }}
        >
          <div className="courseBuyPageItems">
            <h3>Course Details</h3>
            <AddTOCartCourse />
          </div>
          <div className="courseBuyPageTotalPrice">
            <TotalProductBuyPrice />
            <button className="courseBuyPageBuyBtn" onClick={handleBuyPage}>
              <span className="button-decor"></span>
              <div className="button-content">
                <div className="button__icon">
                  <FaAmazonPay />
                </div>
                <span className="button__text">Buy</span>
              </div>
            </button>
          </div>
        </div>
      </Layout>
      <AnimatePresence>{showSuccess && <SuccessAnimation />}</AnimatePresence>
    </>
  )
}

export default CourseBuyPage
