import './CartWidget.css'

const CartWidget = ({ quantity }) => {
    return (
        <div className='Cart'>
            <img src='../images/cart.svg' alt='carrito' className='imgCarrito' />
            {quantity}
        </div>
    )
}

export default CartWidget