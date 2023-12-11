import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./Components/NavBar/Navbar";

export function App() {

    return (
        <div className="Global">
            <header className="container">
                
                <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="*" element={<h1>404 Pagina no encontrada o inexistenten</h1>} />
                    </Routes>
                </BrowserRouter>

            </header>

            

        </div>
    )
}