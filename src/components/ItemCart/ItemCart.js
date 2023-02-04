import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './ItemCart.css'

const ItemCart = ({id, name, count, price}) => {
  const { deleteItem } = useContext(CartContext)
  return (
    <div className="itemCart">
      <h3>{name}</h3>
      <h3>Cantidad:{count}</h3>
      <h3>${price}</h3>
      <h3>Subtotal: ${price*count}</h3>
      <button className='delete' onClick={() => deleteItem(id)}>Eliminar</button>
    </div>
  )
}

export default ItemCart

