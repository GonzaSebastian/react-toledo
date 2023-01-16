import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ img, price, name, description }) => {
  return (
    <div>
      <img src={img} alt={name} className='cartImg' />
      <h1>${price}</h1>
      <h5>{name}</h5>
      <p>{description}</p>
      <ItemCount />
    </div>
  )
}

export default ItemDetail