import { useState, createContext } from 'react'

export const HomePageColorOpacityContext = createContext()

export const HomePageColorOpacityProvider = ({ children }) => {
  const [opacityValue, setOpacityValue] = useState(false)

  const newOpacityValue = (newOpacity) => {
    setOpacityValue(newOpacity)
  }

  return (
    <HomePageColorOpacityContext.Provider value={{ opacityValue, newOpacityValue }}>
      {children}
    </HomePageColorOpacityContext.Provider>
  )
}
