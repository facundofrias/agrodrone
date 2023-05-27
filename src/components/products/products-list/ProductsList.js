import { useState, useEffect } from "react";
import Product from "../product/Product";
import { getProducts } from "./getProducts";
import Loader from "../../../utils/loader/Loader";


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setIsLoading(false);      
    };

    fetchData();
    return () => clearTimeout(fetchData);
  }, []);

  return (
    <>
      { isLoading ? (
        <div className="modal">
          <Loader />
        </div>
      ) : (
        <div className="products-container">
          {
            products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                camera={product.camera}
                estimatedFlightTime={product.estimatedFlightTime}
                controlKit={product.controlKit}
                code={product.code}
                price={product.price}
                gps={product.gps}
                isSale={product.isSale}
                isTop={product.isTop}
                imageUrl={product.imageUrl}
              />
            ))
          }
        </div>
      )

      }
    </>
  )
}

export default ProductsList;