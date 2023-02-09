import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"

const Checkout = () => {
  const { cart, total } = useContext(CartContext)
  const [name, setName] = useState('')
  const [dni, setDni] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  const createOrder = async () => {
    const objOrder = {
      buyer: {
        nombre: name,
        dni: dni,
        email: email,
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
      <form>
        <input type='text' placeholder='Nombre y Apellido' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='number' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)} />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='email' placeholder='Confirmar email' value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
      </form>
      <button onClick={createOrder}>Confirmar compra</button>
    </div>
  )
}

export default Checkout
