import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage1 from './components/homePage1/HomePage1'
import HomePage2 from './components/homePage2/HomePage2'
import HomePage3 from './components/homePage3/HomePage3'
import './App.css'
import PaidOfflineVideo1 from './components/homePage1/PaidOfflineVideo1'
import LoginPage from './components/homePage1/LoginPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage1/>}></Route>
      <Route path='/paidOfflineVideo1' element={ <PaidOfflineVideo1/>}></Route>
      <Route path='/homePage2' element={ <HomePage2/>}></Route>
      <Route path='/homePage3' element={ <HomePage3 />}></Route>
      <Route path='/loginPage' element={ <LoginPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App