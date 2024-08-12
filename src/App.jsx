import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage1 from './pages/HomePage1'
import HomePage2 from './components/homePage2/HomePage2'
import HomePage3 from './components/homePage3/HomePage3'
import PaidOfflineVideoPage1 from './pages/PaidOfflineVideoPage1'
import LoginPage from './pages/LoginPage'
import MyCoursePage from './pages/MyCoursePage'
import PaidWebinarPage from './pages/PaidWebinarPage'
import MyAccount1 from './pages/MyAccountPage1'
import WishlistPage from './pages/WishlistPage'

import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from './redux/store/store' // Import default export
import { ToastContainer, toast } from 'react-toastify'

import './App.css'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route
            path="/paidOfflineVideo1"
            element={<PaidOfflineVideoPage1 />}
          />
          <Route path="/homePage2" element={<HomePage2 />} />
          <Route path="/homePage3" element={<HomePage3 />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/myCoursePage" element={<MyCoursePage />} />
          <Route path="/paidWebinar" element={<PaidWebinarPage />} />
          <Route path="/myAccount1" element={<MyAccount1 />} />
          <Route path="/wishlistPage" element={<WishlistPage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  )
}

export default App
