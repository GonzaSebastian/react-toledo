import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        (async () => {
            const productsRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

            try {
                const snapshot = await getDocs(productsRef)

                const productsAdapted = snapshot.docs.map(doc => {
                    const fields = doc.data()

                    return {id: doc.id, ...fields}
                })
                setProducts(productsAdapted)

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }     
        })()
    }, [categoryId])

    if (loading) {
        return <h2 className='loading'>CARGANDO DATOS</h2>
    }

    return (
        <>
            <h2 className="list">{greeting}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer