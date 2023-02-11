import './Cart.css';
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {
  const { totalQuantity, cart } = useContext(CartContext)

  return (
    <div>
      <h2 className='cartContainer'>Carrito ({totalQuantity})</h2>
      <CartList cart={cart} />
      <Link className='btn cartContainer' to='/checkout'>Finalizar compra</Link>
    </div>
  )
}

export default Cart