import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h2>CARGANDO</h2>
    }

    return (
        <>
            <h2 className="list">{greeting}</h2>
            <ItemList products={products} />
            <ItemCount stock={4} onAdd={(count) => console.log('Se agregaron ' + count + ' productos al carrito.')} />

        </>
    )
}

export default ItemListContainer