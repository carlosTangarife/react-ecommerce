import {useContext} from "react";
import {Link} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";

import {OrderCard} from "../../Components/OrderCard";
import {ShoppingCartContext} from "../../Context";
import {Layout} from "../../Components/Layout";

export const MyOrder = () => {
    const {order} = useContext(ShoppingCartContext);
    const numberOfOrder = window.location.pathname.split('/')[2]
    const _order = numberOfOrder === 'last' ? order?.slice(-1)[0] : order[numberOfOrder];

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1>My Order</h1>
            </div>

            <div className="flex flex-col w-80">
                {_order?.products?.map(product => (<OrderCard key={product.id} {...product} />))}
            </div>
        </Layout>
    )
}
