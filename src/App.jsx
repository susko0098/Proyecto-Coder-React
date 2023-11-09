import "./App.css"
import { NavBar } from "./Components/NavBar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

export function App() {

    return (
        <div className="Global">
            <div>
            <NavBar />
            </div>
            
            <div>
            <ItemListContainer />
            </div>
            
        </div>
    )
}