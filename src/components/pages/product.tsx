import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
interface Product {
  id: number;
  attributes: {
    title: string;
    price: number;
    description: string;
    image: string;
    colors: string[];
  };
}

const fetchProduct = async (id: string) => {
  const { data } = await axios.get(`https://strapi-store-server.onrender.com/api/products/${id}`);
  return data.data;
};

function ProductPage() {
  const { id } = useParams(); 

  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string), 
    enabled: !!id,
  });
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setActiveColor(color);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{(error as Error).message}</div>;

  if (!product) return <div>Product not found</div>;
  console.log('Product colors:', product.attributes.colors);

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.attributes.image} alt={product.attributes.title} className="w-full h-auto rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.attributes.title}</h1>
          <p className="text-gray-500 text-lg my-2">${product.attributes.price/100}</p>
          <p className="text-gray-700">{product.attributes.description}</p>
          {Array.isArray(product.attributes.colors) &&
            product.attributes.colors.map((color) => {
              return (
                <button
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`w-12 h-12 rounded-full mr-4 mb-4 transition-all duration-300 ${
                    activeColor === color ? "border-4 border-gray-500" : ""    
                  }`}
                  style={{ backgroundColor: color }}
                >
                 
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

    export default ProductPage;

