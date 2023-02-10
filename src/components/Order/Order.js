import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"

const Order = ( {buyer} ) => {
  const { cart, total } = useContext(CartContext)

  const validate = (nombre, dni, email, emailConfirm) => {
    if(nombre === '') return 'Ingrese su Nombre y Apellido'
    if(dni === '' || dni.length < 7) return 'Ingrese su numero de DNI'
    if(email === '' || !email.includes('@')) return 'Ingrese su Email'
    if(email !== emailConfirm) return 'Confirme su email';
  }
  const errorForm = validate(buyer.nombre, buyer.dni, buyer.email, buyer.emailConfirm)

  const createOrder = async () => {
    const objOrder = {
      buyer
      ,
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
  const errorStyle= {
    color:'red',
    textAlign:'center'
  }
  return (
    <div>
      <p style={errorStyle}>{errorForm}</p>
      <button disabled={errorForm} onClick={createOrder}>Confirmar compra</button>
    </div>
  )
}

export default Order