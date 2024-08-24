import React from 'react'
import Navbar2 from '../components/homePage2/Navbar2'
import HomeFooter from '../components/common/FooterComponent'

import { useSelector } from 'react-redux'
import Navbar1 from '../components/homePage1/Navbar1'

const Layout = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      {auth ? (
        <>
          <Navbar2 />
          <main>{children}</main>
          <HomeFooter />
        </>
      ) : (
        <>
          <Navbar1 />
          <main>{children}</main>
          <HomeFooter />
        </>
      )}
    </>
  )
}

export default Layout
