import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage1 from './components/homePage1/HomePage1'
import HomePage2 from './components/homePage2/HomePage2'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage1/>}></Route>
      <Route path='/homePage2' element={ <HomePage2/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App