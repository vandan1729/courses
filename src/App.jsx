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

import './App.css'
import SignUpPage from './pages/SignUpPage'
import LoadingPage from './pages/LoadingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage1 />}></Route>
        <Route
          path="/paidOfflineVideo1"
          element={<PaidOfflineVideoPage1 />}
        ></Route>
        <Route path="/homePage2" element={<HomePage2 />}></Route>
        <Route path="/homePage3" element={<HomePage3 />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/myCoursePage" element={<MyCoursePage />}></Route>
        <Route path="/paidWebinar" element={<PaidWebinarPage />}></Route>
        <Route path="/myAccount1" element={<MyAccount1 />}></Route>
        <Route path="/wishlistPage" element={<WishlistPage />}></Route>
        <Route path="/signUpPage" element={<SignUpPage />}></Route>
        <Route path="/loadingPage" element={<LoadingPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
