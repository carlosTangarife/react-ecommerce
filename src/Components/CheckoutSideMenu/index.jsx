import {useContext} from "react";
import {XMarkIcon} from '@heroicons/react/24/solid'

import './styles.css';
import {ShoppingCartContext} from "../../Context";
import {OrderCard} from "../OrderCard";

export const CheckoutSideMenu = () => {
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={closeCheckoutSideMenu}/>
                </div>
            </div>
            <div className="px-6">
                {cartProducts?.map((product) => (<OrderCard key={product.id} {...product} />))}
            </div>
        </aside>
    )
}
