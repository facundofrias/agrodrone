import { useState, useEffect } from "react";
import { getProducts } from "../products/getProducts";
import Product from "../products/product/Product";
import Loader from "../utils/loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    loadProducts();
  }, [currentPage]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(false);

      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error al cargar los productos:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (error) {
    return <div>Error al cargar los productos.</div>;
  }

  // Calcular los índices de inicio y fin para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      {loading ? (
        <div className="modal">
          <Loader />
        </div>
      ) : (
        <div className="product-list">
          {currentProducts.map((product) => (
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
          ))}
          <div className="pagination">
            <a className="pagination__arrow" onClick={handlePreviousPage} disabled={currentPage === 1}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`pagination__page${currentPage === index + 1 ? " active-page" : ""}`}
              >
                {index + 1}
              </button>
            ))}
            <a className="pagination__arrow" onClick={handleNextPage} disabled={currentPage === totalPages}>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Catalog;
