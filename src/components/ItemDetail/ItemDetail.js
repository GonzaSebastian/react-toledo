import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ img, price, name, description, stock }) => {
  return (
    <div className="cardDetail">
      <img src={img} alt={name} className='cartImg' />
      <section>
        <h1>${price}</h1>
        <h5>{name}</h5>
        <p>{description}</p>
        <ItemCount stock={stock} onAdd={(count) => console.log('Se agregaron ' + count + ' productos al carrito.')} />
      </section>
    </div>
  )
}

export default ItemDetail