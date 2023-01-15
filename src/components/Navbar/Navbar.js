import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <h1 className='title'>Ecommerce Mol-ber </h1>
            <CartWidget />
            <div className="buttons">
                <Link to='/category/estructura' className='btn'>Estructura</Link>
                <Link to='/category/placas' className='btn'>Placas</Link>
                <Link to='/category/aislacion' className='btn'>Aislación</Link>
                <Link to='/category/revestimientos' className='btn'>Revestimientos</Link>
            </div>
        </nav>
    )
}

export default Navbar