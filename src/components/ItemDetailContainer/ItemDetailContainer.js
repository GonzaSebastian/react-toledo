import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { db } from "../../service/firebase/firebaseConfig"

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title=`Molber App - Detalle del producto`
  },[])

  useEffect(() => {
    (async () => {
      const productRef = doc(db, 'products', productId)

      try{
        const snapshot = await getDoc(productRef)

        const fields = snapshot.data()
        const productAdapted = {id: snapshot.id, ...fields}
  
        setProduct(productAdapted)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    })()

  }, [productId])
  
  if (loading) {
    return <h2 className='loading'>CARGANDO DATOS</h2>
  }

  return (
    <div className="listDetail">
      <h2>Detalle de producto {product.name}</h2>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer