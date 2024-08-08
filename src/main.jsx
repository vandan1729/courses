import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CardContextProvider } from './contextProvider/CardFilter'
import { UserContextProvider } from './contextProvider/UserContextProvider'
import { WishListContextProvider } from './contextProvider/WishlistFilter'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishListContextProvider>
      <CardContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </CardContextProvider>
    </WishListContextProvider>
  </React.StrictMode>,
)
