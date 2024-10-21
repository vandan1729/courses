import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import ProtectedRoute from './components/common/ProtectedRoute'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage2 from './components/homePage2/HomePage2'
import HomePage3 from './components/homePage3/HomePage3'
import CourseBuyPage from './pages/CourseBuyPage'
import ErrorPage from './pages/ErrorPage'
import HomePage1 from './pages/HomePage1'
import MyAccount1 from './pages/MyAccountPage1'
import MyCoursePage from './pages/MyCoursePage'
import PaidOfflineVideoPage1 from './pages/PaidOfflineVideoPage1'
import PaidWebinarPage from './pages/PaidWebinarPage'
import PaymentPage from './pages/PaymentPage'
import UnPaidWebinarPage from './pages/UnPaidWebinarPage'
import WishlistPage from './pages/WishlistPage'
import { login, logout } from './redux/features/authSlice'
import store from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/homePage2" element={<HomePage2 />} />
          <Route path="/homePage3" element={<HomePage3 />} />
          {/* <Route path="/*" element={<ErrorPage />} /> */}
          <Route
            path="/unPaidWebinarPage/:cardContent"
            element={<UnPaidWebinarPage />}
          />
          <Route
            path="/paidOfflineVideo1"
            element={<ProtectedRoute element={PaidOfflineVideoPage1} />}
          />
          <Route
            path="/myCoursePage"
            element={<ProtectedRoute element={MyCoursePage} />}
          />
          <Route
            path="/paidWebinar"
            element={<ProtectedRoute element={PaidWebinarPage} />}
          />
          <Route
            path="/myAccount1"
            element={<ProtectedRoute element={MyAccount1} />}
          />
          <Route
            path="/wishlistPage"
            element={<ProtectedRoute element={WishlistPage} />}
          />
          <Route
            path="/courseBuyPage"
            element={
              <ProtectedRoute element={CourseBuyPage} requiresCart={true} />
            }
          />
          <Route
            path="/paymentPage"
            element={
              <ProtectedRoute element={PaymentPage} requiresCart={true} />
            }
          />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ScrollToTop />
      </BrowserRouter>
    </Provider>
  )
}

export default App
