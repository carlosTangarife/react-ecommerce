import {useContext} from "react";
import {XMarkIcon} from '@heroicons/react/24/solid'

import './styles.css';
import {ShoppingCartContext} from "../../Context";
import {OrderCard} from "../OrderCard";
import {totalPrice} from "../../utils";
import {Link} from "react-router-dom";

export const CheckoutSideMenu = () => {
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, count, setCount, order, setOrder} = useContext(ShoppingCartContext);

    const handleDelete = (productId) => {
        const newCartProducts = cartProducts.filter(product => product.id !== productId);
        setCartProducts(newCartProducts);
        setCount(count - 1);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        };
        setOrder([...order, orderToAdd]);
        setCartProducts([])
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={closeCheckoutSideMenu}/>
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {cartProducts?.map((product) => (<OrderCard key={product.id} {...product} handleDelete={handleDelete}/>))}
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
                </p>
                <Link to="my-orders/last">
                    <button className="bg-black py-3 text-white  w-full rounded-lg mb-2" onClick={handleCheckout}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}
