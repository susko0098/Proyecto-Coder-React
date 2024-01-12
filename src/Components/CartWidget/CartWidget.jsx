import "./CartWidget.css"
import { useContext } from "react";
import ShoppingCart from "./assets/ShoppingCart.svg"
import { CartContext } from "../../Context/CardContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div className="recuadro">
            <Link to='/cart' className='CartWidget'>
                <img className="ImgCar" src={ShoppingCart} alt="cart-widget" />
                <p>{totalQuantity}</p>
            </Link>
        </div>

    )
}

export default CartWidget