import ItemCount from "../ItemCount/ItemCount"
import {useState, useContext  } from "react"
import { CartContext } from "../../Context/CartContext"
import './ItemDetail.css'
import { Link } from "react-router-dom"

const ItemDetail = ({id, img, price, name, description, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {
    console.log('se agrego' + count);

    setQuantity(count)

    addItem({id, name, count, price})
  }


  return (
    <div className="cardDetail">
      <img src={img} alt={name} className='cartImg' />
      <section>
        <h1>${price}</h1>
        <h5>{name}</h5>
        <p>{description}</p>
        <footer>
          {
            quantity > 0 ? (
              <Link to='/Cart'> Finalizar compra</Link>
            ) : (
              <ItemCount stock={stock} onAdd={handleOnAdd} />
            )
          }
        </footer>
      </section>
    </div>
  )
}

export default ItemDetail