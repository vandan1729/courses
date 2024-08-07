import { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        userFirstName: "Ayush",
        userLastName: "Patel",
        userHeadLine: "Hello Sir JI",
        userEmail: "ayush@gamil.com"
    });

    const newUserData = (newData) => {
        setUserData(prevData => ({
            ...prevData,
            ...newData
        }));
    };

    return (
        <UserContext.Provider value={{ userData, newUserData }}>
            {children}
        </UserContext.Provider>
    );
};
