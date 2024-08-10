import {useContext} from "react";
import {Link} from "react-router-dom";

import {OrdersCard} from "../../Components/OrdersCard";
import {Layout} from "../../Components/Layout";
import {ShoppingCartContext} from "../../Context";

export const MyOrders = () => {
    const {order} = useContext(ShoppingCartContext);

    return (
        <Layout>
            <h1 className="mb-6">
                My Orders
            </h1>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard {...order} />
                    </Link>
                ))
            }
        </Layout>
    )
}
