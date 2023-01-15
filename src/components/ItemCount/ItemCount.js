import { useState } from "react"

const ItemCount = ( {onAdd, stock} ) => {
    
    const [count, setCount]  = useState(1)

    const decrement = () => {
        if(count > 1) {
            setCount(count -1)
        }
        
    }

    const increment = () => {
        if(count < stock) {
            setCount(count +1)
        }
    }

    const addCart = () => {
        if(stock !== 0) {
            setCount(() => onAdd(count))
            setCount(1)
        }

    }

    return (
        <div>
            <h3>Contador</h3>
            <h4>{count}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={addCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount