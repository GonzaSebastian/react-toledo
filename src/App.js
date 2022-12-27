import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <img src="./images/logomolber.png" alt="imagelogo" />
        <Navbar/>
        <ItemListContainer greeting="¡BIENVENIDOS AL ECOMMERCE DE MOLBER!" />
        <p>
          Molber APP.
        </p>
      </header>
    </>
  );
}

export default App;
