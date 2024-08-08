import {BrowserRouter} from 'react-router-dom';

import './App.css'
import {AppRoutes} from "./AppRoutes";
import {Navbar} from "../../Components/Navbar";
import {ShoppingCartProvider} from "../../Context";
import {CheckoutSideMenu} from "../../Components/CheckoutSideMenu/index.jsx";

function App() {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <Navbar/>
                <CheckoutSideMenu />
                <AppRoutes/>
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default App
