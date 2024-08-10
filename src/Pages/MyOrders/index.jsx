import {useContext} from "react";
import {Link} from "react-router-dom";

import {OrdersCard} from "../../Components/OrdersCard";
import {Layout} from "../../Components/Layout";
import {ShoppingCartContext} from "../../Context";

export const MyOrders = () => {
    const {order} = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">My Orders</h1>
            </div>

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
