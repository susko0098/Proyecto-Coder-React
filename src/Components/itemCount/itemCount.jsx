import "./itemCount.css"
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
            <div className="contador">
                <button className="btn-up-dw" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="btn-up-dw" onClick={increment}>+</button>
            </div>
            <div>
                <button className="ad-cart" onClick={() => onAdd(quantity)} disabled={!stock}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount