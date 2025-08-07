import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Special_offer() {
const [product,setProduct] = useState([])

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=4&skip=35')
      const data = await res.json()
      setProduct(data.products)

     console.log(setProduct)
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }
  fetchProducts()
},[])
  return (
    <div className="bg-white my-4">
      <div className="mx-auto bg-blue-50 max-w-2xl rounded-lg px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Special Offer
        </h2>

        <div className="mt-6 grid   grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product) => (
            <Link key={product.id} to={`/details/${product.id}`}>
              <div className="group rounded-md relative bg-gray-200 hover:shadow-lg transition">
                <img
                  alt={product.title}
                  src={product.thumbnail}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex m-2 justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-700">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-end mt-6 text-md underline text-blue-600 font-medium cursor-pointer">
          <Link to={"/products"}> See more</Link>
        </div>
      </div>
    </div>
  );
}
