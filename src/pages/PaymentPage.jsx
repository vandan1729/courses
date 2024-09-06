import { useSelector } from 'react-redux'

import Navbar2 from '../components/homePage2/Navbar2'
import TotalProductBuyPrice from '../components/common/Payment/TotalProductBuyPrice'
import PaymentMethod from '../components/common/Payment/PaymentMethod'
import SuccessAnimation from '../components/common/Payment/SuccessAnimation'

import '../styling/PaymentPage.css'

function PaymentPage() {
  const opacityValue = useSelector((state) => state.modal.opacityValue)
  const showSuccess = useSelector((state) => state.modal.showSuccess)

  return (
    <>
      <Navbar2 />
      <div
        className="paymentPage no-select"
        style={{ opacity: opacityValue ? 0.5 : 1 }}
      >
        <div className="paymentPriceDiv">
          <TotalProductBuyPrice />
        </div>
        <div className="paymentPageContainer">
          <h2 className="paymentTitle">Payment Options</h2>
          <PaymentMethod />
        </div>
      </div>
      {showSuccess ? <SuccessAnimation /> : null}
    </>
  )
}

export default PaymentPage
