import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ quantity }) => {
    return (
        <Link to='/Cart' className='Cart'>
            <img src='../images/cart.svg' alt='carrito' className='imgCarrito' />
            {quantity}
        </Link>
    )
}

export default CartWidget