import {useContext} from "react";

import {Layout} from '../../Components/Layout';
import {Card} from "../../Components/Card";
import {ProductDetails} from "../../Components/ProductDetails";
import {ShoppingCartContext} from "../../Context";

export const Home = () => {
    const {items, searchByTitle,setSearchByTitle, filteredItems} = useContext(ShoppingCartContext);

    return (
        <div className="">
            <Layout>
                <div className="flex items-center justify-center relative w-80 mb-4">
                    <h1 className="font-medium text-xl">Exclusive Products</h1>
                </div>

                <input
                    type="text"
                    className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                    placeholder="Search a product"
                    value={searchByTitle}
                    onChange={(event) => setSearchByTitle(event.target.value)}
                />

                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {(filteredItems ?? items)?.map((item, index) => <Card key={index} {...item} />)}
                </div>
                <ProductDetails/>
            </Layout>
        </div>
    )
}
