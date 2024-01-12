import "./CartItem.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CardContext";

const CartItem = ({ title, price, id, quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="display">

        <h2>{title}</h2>
        <p><b>Unitario</b>: ${price}</p>
        <p><b>Cantidad</b>: {quantity}</p>
        <p><b>Subtotal</b>: ${price * quantity}</p>
        <button className="btn-eliminar" onClick={() => removeItem(id)}>Eliminar</button>

        </div>
    )
}

export default CartItem