import React from "react";
import "./Products.css";

function Products(props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <div id="container">
            <div className="product-details">
              <h1>{item.name}</h1>
              <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </span>

              <p className="information">{item.disc}</p>

              <div className="control">
                <button className="btn">
                  <span className="price">{item.price}</span>
                  <span className="shopping-cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  <span className="buy">Buy</span>
                </button>
              </div>
            </div>

            <div className="product-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043"
                alt=""
              />

              <div className="info">
                <h2> Description</h2>
                <ul>
                  <li>
                    <strong>Height : </strong>5 Ft{" "}
                  </li>
                  <li>
                    <strong>Shade : </strong>Olive green
                  </li>
                  <li>
                    <strong>Decoration: </strong>balls and bells
                  </li>
                  <li>
                    <strong>Material: </strong>Eco-Friendly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Products;
