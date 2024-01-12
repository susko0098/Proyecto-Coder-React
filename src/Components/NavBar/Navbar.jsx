import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"


export default function NavBar() {

    return (
        <div className="NavBar">
            <Link to='/'>
                <h1 className="Name-shop">BUBU Shop</h1>
            </Link>
            <nav>
                <ul className="Deco">
                    <NavLink to={"/category/Ropa Hombre"}
                        className={({ isActive }) =>
                            isActive ? 'ActiveOption' : 'Option'}>Ropa Hombre</NavLink>
                    <NavLink to={"/category/Ropa Mujer"}
                        className={({ isActive }) =>
                            isActive ? 'ActiveOption' : 'Option'}>Ropa Mujer</NavLink>
                    <NavLink to={"/category/Joyeria"}
                        className={({ isActive }) =>
                            isActive ? 'ActiveOption' : 'Option'}>Joyeria</NavLink>
                    <NavLink to={"/category/Electronica"}
                        className={({ isActive }) =>
                            isActive ? 'ActiveOption' : 'Option'}>Electronica</NavLink>
                </ul>

            </nav>
            <CartWidget />
        </div >
    )
}