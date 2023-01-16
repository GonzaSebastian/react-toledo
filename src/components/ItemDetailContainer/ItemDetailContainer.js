import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductById(productId).then(response => {
      setProduct(response)
    })
    .catch(error => {console.log(error);})
  }, [productId])
  
  return (
    <div>
      <h2>Detalle de producto {product.name}</h2>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer