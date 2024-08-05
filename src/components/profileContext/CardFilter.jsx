import { useState, createContext } from 'react';

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
    const [cardValue, setCardValue] = useState("All Recommendation");

    const newCardData = (newCardValue) => {
        setCardValue(newCardValue)
    };

    return (
        <CardContext.Provider value={{ cardValue, newCardData }}>
            {children}
        </CardContext.Provider>
    );
};
