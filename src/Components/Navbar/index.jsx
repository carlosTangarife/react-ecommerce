import {useContext} from "react";
import {NavLink} from "react-router-dom";

import {ShoppingCartContext} from "../../Context";
import {ShoppingBagIcon} from "@heroicons/react/16/solid";

export function Navbar() {
    const {count, setSearchByCategory} = useContext(ShoppingCartContext);

    const isLinkActive = ({isActive}) => isActive ? 'underline underline-offset-4' : undefined

    const menuLeftSide = [
        {
            link: 'all',
            title: 'All',
        },
        {
            link: 'clothes',
            title: 'Clothes',
        },
        {
            link: 'electronics',
            title: 'Electronics',
        },
        {
            link: 'furniture',
            title: 'Furniture',
        },
        {
            link: 'toys',
            title: 'Toys',
        },
        {
            link: 'others',
            title: 'Others',
        },

    ];
    const menuRightSide = [
        {
            link: 'my-account',
            title: 'My Account',
        },
        {
            link: 'my-orders',
            title: 'My Orders',
        },
        {
            link: 'my-order',
            title: 'My Order',
        },
        {
            link: 'sign-in',
            title: 'Sign In',
        }
    ];

    return (
        <nav className="flex justify-between items-center z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                {menuLeftSide.map((menu, index) => (
                    <li key={index}>
                        <NavLink to={menu.link} className={isLinkActive} onClick={() => setSearchByCategory(menu.link)}>{menu.title}</NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    cjt860826@gmail.com
                </li>
                {menuRightSide.map((menu, index) => (
                    <li key={index}>
                        <NavLink to={menu.link} className={isLinkActive} onClick={() => setSearchByCategory(menu.link)}>{menu.title}</NavLink>
                    </li>
                ))}
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-black"/>{count}
                </li>
            </ul>
        </nav>
    )
}
