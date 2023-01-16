import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then((products) => {
            setProducts(products)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <h2>CARGANDO</h2>
    }

    return (
        <>
            <h2 className="list">{greeting}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer