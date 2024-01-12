import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CardContext";
import CartItem from "../CartItem/CartItem";

import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    if (totalQuantity === 0) {
        return (
            <div className="products">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="check" >Volver a inicio</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}   
            <div className="orden">
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="bt-clear">Limpiar carrito</button>
            <Link to='/checkout' className="check">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart