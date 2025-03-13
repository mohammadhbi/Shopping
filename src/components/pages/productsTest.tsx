import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./home/SearchBar";
import { useMemo, useState } from "react";

interface Product {
  id: number;
  attributes: {
    title: string;
    price: number;
    image: string;
    color: string[];
  };
}

interface Filter {
  title: string;
  priceMin: number;
  priceMax: number;
  company: string;
  category: string;
  freeShipping: boolean;
}

function Products() {
  const [filters, setFilters] = useState<Filter>({
    title: "",
    priceMin: 0,
    priceMax: 1000,
    company: "",
    category: "",
    freeShipping: false,
  });

  const [page, setPage] = useState(1);
  const limit = 5;
////////////////////////////////////////////////////////////
  const queryString = useMemo(() => {
    const queryParams = [
      filters.title && `title=${filters.title}`,
      filters.priceMin && `priceMin=${filters.priceMin}`,
      filters.priceMax && `priceMax=${filters.priceMax}`,
      filters.company && `company=${filters.company}`,
      filters.category && `category=${filters.category}`,
      filters.freeShipping && `freeShipping=true`,
    ]
      .filter(Boolean)
      .join("&");

    return queryParams ? `?${queryParams}` : "";
  }, [filters]);

  const fetchProducts = async () => {
    const response = await axios.get(`https://strapi-store-server.onrender.com/api/products${queryString}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", filters],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  const handleFilters = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const products = data?.data || [];
  const totalPages = data?.meta?.pagination?.pageCount || 1;
  const paginatedProducts = products.slice((page - 1) * limit, page * limit);

  return (
    <div>
      <SearchBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProducts.map((product: Product) => (
            <Link
              to={`/product/${product.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              key={product.id}
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={product.attributes.image}
                  alt={product.attributes.title}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{product.attributes.title}</h2>
                <p className="text-2xl font-bold text-primary">${product.attributes.price / 100}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-00 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-gray-500 rounded-md">{`Page ${page}`}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
