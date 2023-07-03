import React, { Fragment, useContext, useEffect, useState } from "react";

import "./CardProduct.css";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

export default function CardProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [searchedProduct, setSearchedProduct] = useState("");
  const filteredProducts = products
  
  .filter((item) =>
    item.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  
  const recordsPage = 8;
  const lastIndex = recordsPage * currentPage;
  const firstIndex = lastIndex - recordsPage;
  const records = filteredProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredProducts.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

 
  function nextPage() {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  }
  function prePage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  function changPage(id) {
    setCurrentPage(id);
  }

 
  const cards = records.map((el) => {
    return (
      <div key={el.id} className="food-container">
        <div className="food-image">
          <img src={el.image} alt="Food Image" />
        </div>
        <div className="food-title">{el.title}</div>
        <div className="food-price">${el.price}</div>
        <div className="food-description">
          {el.description}
        </div>
      <Link to={`/products/${el.id}`}> < button className="addtocard-btn">view</button></Link> 
      </div>
    );
  });
  return <Fragment>
    <div className="container-product">
      <input
            type="search"
            id="product-search"
            placeholder="Search for a product"
            value={searchedProduct}
            onChange={(e) => setSearchedProduct(e.target.value)}
          />
          <div className="products-item">
    {cards}
    </div>
    <ul className="product-pagination">
            <li className="page-item prev-btn">
              {
                <a className="page-link" onClick={prePage}>
                  Prev
                </a>
              }
            </li>
            {numbers.map((n, i) => {
              return (
                <li className="page-item" key={i}>
                  <a
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    onClick={() => changPage(n)}
                  >
                    {n}
                  </a>
                </li>
              );
            })}
            <li className="page-item next-btn">
              {
                <a className="page-link" onClick={nextPage}>
                  Next
                </a>
              }
            </li>
          </ul>
          </div>
  </Fragment>;
}
