import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CardContextProvider } from './contextProvider/CardFilter'
import { UserContextProvider } from './contextProvider/UserContextProvider'
import { WishListContextProvider } from './contextProvider/WishlistFilter'
import { HomePageColorOpacityProvider } from './contextProvider/HomePageColorOpacity.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePageColorOpacityProvider>
      <WishListContextProvider>
        <CardContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </CardContextProvider>
      </WishListContextProvider>
    </HomePageColorOpacityProvider>
  </React.StrictMode>,
)
