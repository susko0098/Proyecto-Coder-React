import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
export function NavBar() {

    return (
        <div className="NavBar">
            <h1 className="Name-shop">Mystery Box Shop</h1>
            <nav>
                <ul className="Deco">
                    <li><a className="Display" href="">Tecnologia</a></li>
                    <li><a className="Display" href="">Deportes</a></li>
                    <li><a className="Display" href="">Ropa</a></li>
                    <li><a className="Display" href="">Electronica</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}