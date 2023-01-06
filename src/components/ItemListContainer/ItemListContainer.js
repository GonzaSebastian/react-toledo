import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2 className="list">{greeting}</h2>
            <ItemCount stock={5} onAdd={(count) => console.log('Se agregaron ' + count + ' productos al carrito.')} />
        </>
    )
}

export default ItemListContainer