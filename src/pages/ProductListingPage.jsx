import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "/src/Redux/ProductSlice.js";
import ProductCard from "../components/Listing/ProductCard";
import  Header  from '/src/components/Navbar/Header';
import Footer from "../components/Footer/Footer";

function ProductListingPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products)
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch products for the current page
    fetch(`http://127.0.0.1:8000/products/all?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data.results)); // Update with actual product data field
        console.log("🚀 ~ file: ProductListingPage.jsx:21 ~ .then ~ data:", data.results)
        
        setTotalPages(Math.ceil(data.count / 30)); // Assuming each page shows 30 products
      });

  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
    <Header />
    <div className="container px-lg-0 py-5">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb text-center d-flex justify-content-center">
          <li class="breadcrumb-item ">Home</li>
          <li class="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      {/* Pagination */}
      <nav className="d-flex justify-content-center justify-content-md-end" aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              style={{"cursor":'pointer'}}
              aria-label="Previous"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <a
                className="page-link"
                style={{"cursor":'pointer'}}

                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          >
            <a
              className="page-link"
              style={{"cursor":'pointer'}}

              aria-label="Next"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Products Listing */}
      <div className="product-cards-container px-lg-0 px-2">
        {/* Use the return statement here */}
        {products && products.map((product, index) => (
          <ProductCard
            key={index} // Add a unique key for each element
            img_url={product.image_url}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
}

export default ProductListingPage;
