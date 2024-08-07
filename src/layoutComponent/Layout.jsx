import React from "react";
import Navbar2 from "../components/homePage2/Navbar2";
import HomeFooter from "../commonComponents/FooterComponent";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar2 />
      <main>{children}</main>
      <HomeFooter />
    </>
  );
};

export default Layout;
