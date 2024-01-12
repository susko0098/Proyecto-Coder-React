
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import  Cart  from "./Components/Cart/Cart";
import NavBar from "./Components/NavBar/Navbar";
import Checkout from "./Components/Checkout/Checkout";

import { CartProvider } from "./Context/CardContext";

export function App() {

    return (
        <div className="Global">
            <header className="container">

                <BrowserRouter>
                    <CartProvider>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/category/:categoryId" element={<ItemListContainer />} />
                            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="*" element={<h1>404 Pagina no encontrada o inexistenten</h1>} />
                        </Routes>
                    </CartProvider>
                </BrowserRouter>

            </header>



        </div>
    )
}