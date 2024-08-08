import {useRoutes} from "react-router-dom";
import {Home} from "../Home";
import {MyAccount} from "../MyAccount/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {SignIn} from "../SignIn/index.jsx";

export const AppRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/my-account', element: <MyAccount/>},
        {path: '/my-order', element: <MyOrder/>},
        {path: '/my-orders', element: <MyOrders/>},
        {path: '/sign-in', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ]);
}
