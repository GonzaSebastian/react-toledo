import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"

const Checkout = () => {
  const { cart, total } = useContext(CartContext)

  const createOrder = async () => {
    const objOrder = {
      buyer: {
        nombre: 'Gonzalo',
        dni: "34444444",
        email: 'gonza@gmail.com',
      },
      items: cart,
      total
    }

    const batch = writeBatch(db)

    const ids = cart.map(prod => prod.id)

    const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

    const productsAddedFirestore = await getDocs(productRef)
    const { docs } = productsAddedFirestore

    const outOfStock = []

    docs.forEach(doc => {
      const dataDoc = doc.data()
      const stockDb = dataDoc.stock

      const productAddedToCart = cart.find(prod => prod.id === doc.id)
      const prodQuantity = productAddedToCart.count

      if(stockDb >= prodQuantity) {
        batch.update(doc.ref, {stock: stockDb - prodQuantity})
      } else {
        outOfStock.push({id: doc.id, ...dataDoc})
      }
    })

    if(outOfStock.length === 0) {
      await batch.commit()

      const orderRef = collection(db, 'orders')

      const orderAdded = await addDoc(orderRef, objOrder)

      const { id } = orderAdded
      console.log(id);
    } else {
      console.error('Hay productos sin stock');
    }
  }

  return (
    <div>
      <h4>Finalizar compra</h4>
      <h2>Total: ${total}</h2>
      <button onClick={createOrder}>Confirmar compra</button>
    </div>
  )
}

export default Checkout
