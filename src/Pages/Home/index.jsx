import {useState, useEffect} from "react";
import {Layout} from '../../Components/Layout';
import {Card} from "../../Components/Card";
import {ProductDetails} from "../../Components/ProductDetails";

export const Home = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="">
            <Layout>
                Home
                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {items?.map((item, index) => <Card key={index} {...item} />)}
                </div>
                <ProductDetails />
            </Layout>
        </div>
    )
}
