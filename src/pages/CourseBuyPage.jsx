import React, { useState } from 'react'
import Layout from '../layoutComponent/Layout'
import AddTOCartCourse from '../components/common/AddTOCartCourse'
import TotalProductBuyPrice from '../components/common/TotalProductBuyPrice'

import { setWishListValue } from '../redux/features/wishListSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SuccessAnimation } from '../components/common/SuccessAnimation'
import { setBuyCourseData } from '../redux/features/wishListSlice'
import { clearCart } from '../redux/features/buyProductSlice'

import '../styling/CourseBuyPage.css'

function CourseBuyPage() {
  const product = useSelector((state) => state.buyProduct)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showSuccess, setShowSuccess] = useState(false)


  const handleBuyPage = () => {

    setShowSuccess(true)
    dispatch(setBuyCourseData(product))
    dispatch(setWishListValue('Courses'))

    setTimeout(() => {
      setShowSuccess(false)
      navigate('/wishlistPage')
      dispatch(clearCart());
    }, 2000)
  }

  return (
    <>
      <Layout>
        <div className="courseBuyPageDiv">
          <div className="courseBuyPageItems">
            <h3>Course Details</h3>
            <AddTOCartCourse />
          </div>
          <div className="courseBuyPageTotalPrice">
            <TotalProductBuyPrice />
            <button className="courseBuyPageBuyBtn" onClick={handleBuyPage}>
              Buy
            </button>
          </div>
        </div>
      </Layout>
      <AnimatePresence>{showSuccess && <SuccessAnimation />}</AnimatePresence>
    </>
  )
}

export default CourseBuyPage
