import { useState, createContext } from 'react';
import profileImg from '/src/assets/profileImg.jpg';

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userFirstName: 'UserFirstName',
    userLastName: 'UserLastName',
    userHeadLine: 'Hello',
    userEmail: 'User@EmailId',
    userProfile: profileImg,
  })

  const newUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  return (
    <UserContext.Provider value={{ userData, newUserData }}>
      {children}
    </UserContext.Provider>
  )
}
