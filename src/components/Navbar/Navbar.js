import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'

const Navbar = () => {
    return (
        <nav className='nav'>
            <h1>Ecommerce Mol-ber </h1>
            <CartWidget />
            <div className="buttons">
                <Button label="Estructura" />
                <Button label="Placas" />
                <Button label="Aislación" />
                <Button label="Revestimientos y terminaciones" />
            </div>
        </nav>
    )
}

export default Navbar