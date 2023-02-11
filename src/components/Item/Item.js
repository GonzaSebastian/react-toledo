import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, img, category, price, name}) => {
    return (
        <li className='card'>
            <img src={img} alt={name} className='cardImg' />
            <p>{category}</p>
            <h1>${price}</h1>
            <h5>{name}</h5>
            <Link to={`/item/${id}`} className='btn'>Detalle</Link>
        </li>
    )
}

export default Item