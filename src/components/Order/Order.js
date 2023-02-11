import './Order.css';
import { Link, useNavigate } from "react-router-dom"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"

const Order = ( {buyer} ) => {
  const { cart, total, clearCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const validate = (nombre, dni, email, emailConfirm) => {
    if(nombre === '') return 'Ingrese su Nombre y Apellido'
    if(dni === '' || dni.length < 7) return 'Ingrese su numero de DNI'
    if(email === '' || !email.includes('@')) return 'Ingrese su Email'
    if(email !== emailConfirm) return 'Confirme su email';
  }
  const errorForm = validate(buyer.nombre, buyer.dni, buyer.email, buyer.emailConfirm)

  const navigate = useNavigate()

  const createOrder = async () => {

    setLoading(true)

    try {
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

        setOrderId(id)

        clearCart()

        setTimeout(() => {
          navigate('/')
      }, 5000)
         
      } else {
        console.error('Hay productos sin stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const errorStyle= {
    color:'red',
    textAlign:'center'
  }
  
  if(loading) {
    return <h5>Generando su orden:</h5>
  }

  if(orderId) {
    return (
      <div className="orderNotification">
        <h2 >El id de su compra es: {orderId}</h2>
        <h5>Nombre: {buyer.nombre}</h5>
        <h5>DNI N° {buyer.dni}</h5>
        <h5>Email: {buyer.email}</h5>
      </div>
    )
  }

  if(cart.length === 0) {
    return (
      <div className='orderNotification'>
        <h2 >El carrito se encuentra vacio</h2>
        <Link className='btnOrder' to='/'> Volver al inicio</Link>
      </div>
    )
  }
  
  return (
    <div className='orderContainer'>
      <p style={errorStyle}>{errorForm}</p>
      <button disabled={errorForm} onClick={createOrder}>Confirmar compra</button>
    </div>
  )
}

export default Order