import './Item.css'

const Item = ({img, category, price, name}) => {
    return (
        <li className='cart'>
            <img src={img} alt={name} className='cartImg' />
            <p>{category}</p>
            <h1>${price}</h1>
            <h5>{name}</h5>
        </li>
    )
}

export default Item