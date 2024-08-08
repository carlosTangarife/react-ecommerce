import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";

export function Navbar() {
    const { count } = useContext(ShoppingCartContext);

    const isLinkActive = ({isActive}) => isActive ? 'underline underline-offset-4' : undefined
    return (
        <nav className="flex justify-between items-center z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/all' className={isLinkActive}>All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={isLinkActive} >Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={isLinkActive}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furniture' className={isLinkActive}>Furniture</NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={isLinkActive}>Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={isLinkActive}>Others</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    cjt860826@gmail.com
                </li>
                <li>
                    <NavLink to='/my-account' className={isLinkActive}>My Account</NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders' className={isLinkActive}>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/my-order' className={isLinkActive}>My Order</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={isLinkActive}>SigIn</NavLink>
                </li>
                <li>
                    🛒 {count}
                </li>
            </ul>
        </nav>
    )
}
