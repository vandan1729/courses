import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage1 from "./components/homePage1/HomePage1";
import HomePage2 from "./components/homePage2/HomePage2";
import HomePage3 from "./components/homePage3/HomePage3";
import "./App.css";
import PaidOfflineVideo1 from "./components/homePage1/PaidOfflineVideo1";
import LoginPage from "./components/homePage1/LoginPage";
import MyCoursePage from "./components/homePage1/MyCoursePage";
import PaidWebinarPage from "./components/homePage1/PaidWebinarPage";
import MyAccount1 from "./components/homePage1/MyAccount1";
import "react-toastify/dist/ReactToastify.css";
import WishlistPage from "./components/commanComponents/WishlistPage";
import { CardContextProvider } from "./components/contextProvider/CardFilter";
import { UserContextProvider } from "./components/contextProvider/UserContextProvider";
import { WishListContextProvider } from "./components/contextProvider/WishlistFilter";

function App() {
  return (
    <WishListContextProvider>
    <CardContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage1 />}></Route>
            <Route
              path="/paidOfflineVideo1"
              element={<PaidOfflineVideo1 />}
            ></Route>
            <Route path="/homePage2" element={<HomePage2 />}></Route>
            <Route path="/homePage3" element={<HomePage3 />}></Route>
            <Route path="/loginPage" element={<LoginPage />}></Route>
            <Route path="/myCoursePage" element={<MyCoursePage />}></Route>
            <Route path="/paidWebinar" element={<PaidWebinarPage />}></Route>
            <Route path="/myAccount1" element={<MyAccount1 />}></Route>
            <Route path="/wishlistPage" element={<WishlistPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </CardContextProvider>
    </WishListContextProvider>
  );
}

export default App;
