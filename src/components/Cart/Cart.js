import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartList from "../CartList/CartList"

const Cart = () => {
  const { totalQuantity } = useContext(CartContext)
  const { cart } = useContext(CartContext)

  return (
    <div>
      <h2>Carrito ({totalQuantity})</h2>
      <CartList cart={cart} />
    </div>
  )
}

export default Cart