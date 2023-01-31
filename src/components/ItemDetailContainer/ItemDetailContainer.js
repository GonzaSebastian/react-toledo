import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    document.title=`Molber App - Detalle del producto`
  },[])

  useEffect(() => {
    getProductById(productId).then(response => {
      setProduct(response)
    })
    .catch(error => {console.log(error);})
  }, [productId])
  
  return (
    <div className="listDetail">
      <h2>Detalle de producto {product.name}</h2>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer