import Order from "../Order/Order"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"


const Checkout = () => {
  const [name, setName] = useState('')
  const [dni, setDni] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  
  const buyer = {
    nombre: name,
    dni: dni,
    email: email,
    emailConfirm: emailConfirm
  }

  const { total } = useContext(CartContext)

  return (
    <div>
      <h4>Finalizar compra</h4>
      <form>
        <input type='text' placeholder='Nombre y Apellido' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='number' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)} />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='email' placeholder='Confirmar email' value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
      </form>
      <Order buyer={buyer} />
      <h2>Total: ${total}</h2>
    </div>
  )
}

export default Checkout
