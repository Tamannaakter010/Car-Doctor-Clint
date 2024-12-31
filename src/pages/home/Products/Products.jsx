import { useEffect, useState } from "react";
import ProductsCard from "../../../pages/home/Products/ProductCard";

const Products = () => {
      const [products, setProducts] = useState([]);

       useEffect(() => {
              fetch('http://localhost:5000/products')
                  .then(res => res.json())
                  .then(data => setProducts(data));
          }, []);
      
          return (
            <div className="mt-8 mb-4">
                <div className="text-center">
                    <h3 className="text-2xl text-orange-600 font-bold">Products</h3>
                    <h2 className="text-3xl">Products List</h2>
                    <p>The term "car doctor" typically refers to a mechanic or 
                        auto repair technician who provides various services<br /> 
                        to maintain and repair vehicles.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductsCard
          key={product.id}
          product={product}
            className="h-[300px] w-full"
        />
      ))}
    </div>
    
    
            </div>
        );
    };
    
    export default Products;
    