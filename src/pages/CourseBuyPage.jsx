import Layout from '../layoutComponent/Layout'
import AddTOCartCourse from '../components/common/AddTOCartCourse'
import TotalProductBuyPrice from '../components/common/TotalProductBuyPrice'

import { FaAmazonPay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import '../styling/CourseBuyPage.css'

function CourseBuyPage() {
  const navigate = useNavigate()

  const handleBuyPage = () => {
    navigate('/paymentPage')
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
              <span className="button-decor"></span>
              <div className="button-content">
                <div className="button__icon">
                  <FaAmazonPay />
                </div>
                <span className="button__text">Pay Now</span>
              </div>
            </button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CourseBuyPage
