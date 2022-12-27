import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => { 
    return (
        <nav className='nav'>
            <h1>Ecommerce Mol-ber </h1>
            <CartWidget />
            <div className="btm">
                <button>Estructura</button>
                <button>Placas</button>
                <button>Aislación</button>
                <button>Revestimientos y terminaciones</button>
            </div>
        </nav>
    )
}

export default Navbar