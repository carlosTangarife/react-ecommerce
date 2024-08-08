import {BrowserRouter} from 'react-router-dom';

import './App.css'
import {AppRoutes} from "./AppRoutes.jsx";
import {Navbar} from "../../Components/Navbar/index.jsx";
import {ShoppingCartProvider} from "../../Context/index.jsx";

function App() {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <Navbar/>
                <AppRoutes/>
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default App
