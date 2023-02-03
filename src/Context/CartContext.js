import { createContext, useState } from "react"

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const getTotalQuantity = () => {
    let accu = 0

    cart.forEach(prod => {
      accu += prod.count
    })

    return accu
  }

  const totalQuantity = getTotalQuantity()

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}