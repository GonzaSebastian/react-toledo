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

  const getTotal = () => {
    let total = 0

    cart.forEach(prod => {
      total += prod.count * prod.price
    })

    return total
  }

  const totalQuantity = getTotalQuantity()

  const total = getTotal()

  const deleteItem = (id) => {
    const cartUpdate = cart.filter(prod => prod.id !== id)
    setCart(cartUpdate)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, deleteItem, total }}>
      {children}
    </CartContext.Provider>
  )
}