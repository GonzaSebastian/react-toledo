import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Link to='/'><img src="../images/logomolber.png" alt="imagelogo" /></Link>
          <Navbar/>
          <Routes> 
            <Route path='/' element={<ItemListContainer greeting="¡BIENVENIDOS AL ECOMMERCE DE MOLBER!" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

      <p>
        Molber APP.
      </p>
    </>
  );
}

export default App;
