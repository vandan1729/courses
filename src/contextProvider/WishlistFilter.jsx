import { useState, createContext } from 'react'

export const WishListContext = createContext()

export const WishListContextProvider = ({ children }) => {
  const [wishListValue, setWishListValue] = useState('All Courses')
  const [wishListItems, setWishListItems] = useState([])

  const newWishListData = (newWishListValue) => {
    setWishListValue(newWishListValue)
  }

  const addToWishList = (item) => {
    setWishListItems((prevItems) => {
      if (prevItems.find((wishItem) => wishItem.id === item.id)) {
        // Remove the item if it already exists in the wishlist
        return prevItems.filter((wishItem) => wishItem.id !== item.id)
      }
      // Add the item if it doesn't exist in the wishlist
      return [...prevItems, item]
    })
  }

  return (
    <WishListContext.Provider
      value={{ wishListValue, newWishListData, wishListItems, addToWishList }}
    >
      {children}
    </WishListContext.Provider>
  )
}
