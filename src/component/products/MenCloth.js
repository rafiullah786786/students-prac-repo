import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function MenCloth() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {products.map((item) => {
        return (
          <div className="card" style={{ width: "400px", height: "200px" }}>
            <img
              className="card-img-top"
              style={{ width: "250px", height: "200px" }}
              src={item.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MenCloth;
