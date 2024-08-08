import {BrowserRouter} from 'react-router-dom';

import './App.css'
import {AppRoutes} from "./AppRoutes";
import {Navbar} from "../../Components/Navbar";
import {ShoppingCartProvider} from "../../Context";

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
