import { useState, useEffect } from "react";
import Product from "../../products/product/Product";
import { getProducts } from "../../products/getProducts";
import Loader from "../../utils/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByTop, setSortByTop] = useState(true);
  const [sortBySale, setSortBySale] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setIsLoading(false);      
    };

    fetchData();
    return () => clearTimeout(fetchData);
  }, []);

  const handleSortByTop = () => {
    setSortByTop(true);
    setSortBySale(false);
  };

  const handleSortBySale = () => {
    setSortByTop(false);
    setSortBySale(true);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortByTop) {
      return b.isTop - a.isTop;
    } else if (sortBySale) {
      return b.isSale - a.isSale;
    } else {
      return 0;
    }
  });

  const visibleProducts = windowWidth <= 768 ? sortedProducts.slice(0, 5) : sortedProducts;

  return (
    <>
      { isLoading ? (
        <div className="modal">
          <Loader />
        </div>
        ) : (
          <div className="products">
            <div className="products__selling">
              <div className="products__selling-labels">
              <a className={`products__top-selling-label${sortByTop ? " products__selected" : ""}`} onClick={handleSortByTop}>Top selling</a>
                <a className={`products__sale-label${sortBySale ? " products__selected" : ""}`} onClick={handleSortBySale}>Sale</a>
              </div>
              <div className="products__selling-see-all">
                {/* TODO: navegar a Catalog cuando se hace clic en "See all" */}
                <a className="products__see-all-label">See all
                  <FontAwesomeIcon className="products__chevron-right" icon={faChevronRight} />
                </a>
              </div>
            </div>
            {
              visibleProducts.map((product) => (
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