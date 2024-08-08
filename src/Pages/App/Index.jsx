import {BrowserRouter} from 'react-router-dom';

import './App.css'
import {AppRoutes} from "./AppRoutes.jsx";
import {Navbar} from "../../Components/Navbar/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <AppRoutes/>
            <Navbar />
        </BrowserRouter>
    )
}

export default App
