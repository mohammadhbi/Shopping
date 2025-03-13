import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

interface attributes {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}
interface Product {
    attributes: attributes;
}
const fetchProducts = async () => {
    const { data } = await axios.get('https://strapi-store-server.onrender.com/api/products');
    console.log(data.data);
    return data.data || [];


}
function Downside() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products', fetchProducts],
        queryFn: fetchProducts
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    return (
        <div className="align-element  px-44">
            <h2 className="text-3xl font-medium tracking-wider capitalize">Featured Products</h2>
            <div className="product-list grid grid-cols-3 gap-4">
                {data.slice(0, 3).map((product: Product) => (
                    <Link to={`/product/${product.attributes.id}`} key={product.attributes.id}>                 
                      <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
                        <img src={product.attributes.image} alt={product.attributes.title} className="h-64 md:h-48 w-full object-cover rounded-xl" />
                        <h3 className="text-lg font-medium capitalize">{product.attributes.title}</h3>
                        <p className="text-gray-500 font-medium">${product.attributes.price}</p>
                    </div></Link>
                ))}
            </div>
        </div>
    )
}

export default Downside


