import {BrowserRouter} from 'react-router-dom';

import './App.css'
import {AppRoutes} from "./AppRoutes.jsx";
import {Navbar} from "../../Components/Navbar/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default App
