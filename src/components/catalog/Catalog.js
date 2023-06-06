import { useState, useEffect } from "react";
import { getProducts } from "../products/getProducts";
import Product from "../products/product/Product";
import Loader from "../utils/loader/Loader";
import CustomSelect from "../custom-select/CustomSelect";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { IconAdjustmentsHorizontal, IconChevronDown, IconChevronUp, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const maxPaginationButtons = 3;
  const [menuOption, setMenuOption] = useState(false);

  useEffect(() => {
    loadProducts();
  }, [currentPage]);

  const loadProducts = async () => {
    try {
      window.scrollTo(0, 0);
      setLoading(true);
      setError(false);
      setMenuOption(false);

      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error al cargar los productos:", error);
    }
  };

  const handleMenuOptionOpen = () => {
    setMenuOption(!menuOption);
  }

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calcular los índices de inicio y fin para los botones de paginación
  let startPageIndex = currentPage - Math.floor(maxPaginationButtons / 2);
  let endPageIndex = currentPage + Math.floor(maxPaginationButtons / 2);
  
  if (startPageIndex < 1) {
    startPageIndex = 1;
    endPageIndex = startPageIndex + maxPaginationButtons - 1;
  }
  
  if (endPageIndex > totalPages) {
    endPageIndex = totalPages;
    startPageIndex = endPageIndex - maxPaginationButtons + 1;
    if (startPageIndex < 1) {
      startPageIndex = 1;
    }
  }

  return (
    <>
      <Header />
      {loading ? (
        <div className="modal">
          <Loader />
        </div>
      ) : (
        <>
          <div className="filter-options">
            <button className="filter-options__btn" 
            onClick={handleMenuOptionOpen}>
              <IconAdjustmentsHorizontal />
              Filtrar
              {
                menuOption ? (
                  <IconChevronUp viewBox="0 0 24 18" />
                ) : (
                  <IconChevronDown viewBox="0 0 24 18" />
                )
              }
            </button>
            {
              menuOption && 
              <div className="filter-options__list">
                <CustomSelect 
                options={[
                  { value: "opcion1", label: "Opción 1" },
                  { value: "opcion2", label: "Opción 2" }
                ]}/>
                <div>3 opciones</div>
                <div>3 opciones</div>
              </div>
            }
          </div>
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
                <IconChevronLeft viewBox={"0 0 24 14"}/>
              </a>
              {[...Array(endPageIndex - startPageIndex + 1)].map((_, index) => {
                const pageNumber = startPageIndex + index;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`pagination__page${currentPage === pageNumber ? " active-page" : ""}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <a className="pagination__arrow" onClick={handleNextPage} disabled={currentPage === totalPages}>
                <IconChevronRight viewBox={"0 0 24 14"}/>
              </a>
            </div>
          </div>
          <div>
            
          </div>
        </> 
      )}
      <Footer />
    </>
  );
  
};

export default Catalog;
