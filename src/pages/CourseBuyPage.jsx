import React, { useEffect } from 'react'
import Layout from '../layoutComponent/Layout'
import AddTOCartCourse from '../components/common/AddTOCartCourse'
import TotalProductBuyPrice from '../components/common/TotalProductBuyPrice'

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import '../styling/CourseBuyPage.css'

function CourseBuyPage() {

  const product = useSelector((state) => state.buyProduct)
  const navigate = useNavigate();

  useEffect(() => {
      if(product.length === 0) {
        navigate('/')
      }
  })

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

            <button className="courseBuyPageBuyBtn">Buy</button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CourseBuyPage
