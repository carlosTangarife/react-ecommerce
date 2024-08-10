import {createContext, useEffect, useState} from "react";

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

    // Shopping Cart add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    // Search Items by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        if (searchByTitle) {
            const filteredItemsByTitle = items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
            setFilteredItems(filteredItemsByTitle);
        } else {
            setFilteredItems(undefined);
        }
    }, [items, searchByTitle]);


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
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems
    }}>
        {children}
    </ShoppingCartContext.Provider>)
}
