import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    // Shopping cart Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart
    const [cartProducts, setCartProducts] = useState([]);

    return (<ShoppingCartContext.Provider value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    }}>
        {children}
    </ShoppingCartContext.Provider>)
}
