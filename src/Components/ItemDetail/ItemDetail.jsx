import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useState } from "react"

import { CartContext } from "../../Context/CardContext"
import { useContext } from "react"
import ItemCount from "../itemCount/itemCount"

const ItemDetail = ({ id, title, image, category, description, price, count }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)

        console.log(quantity)
    }

    return (
        <div className="row text-center DP">
            <article className="col-4 DP MG-BT">
                <header>
                    <h2>
                        {title}
                    </h2>
                </header>
                <picture>
                    <img className="img-fluid" src={image} alt={title} />
                </picture>
                <section>
                    <p>
                        <b>Categoria</b>: {category}
                    </p>
                    <p>
                        <b>Descripcion</b>: {description}
                    </p>
                    <p>
                        <b>Stock</b>: {count}
                    </p>
                    <p>
                        <b>Precio</b>: ${price}
                    </p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link className="btn_fc" to='/cart' >Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={count} onAdd={handleOnAdd}/>
                        )
                    }
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail