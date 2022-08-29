import React, { useEffect } from "react";
import "./App.css";
import Parent from "./component/child-to-parent/Parent";
import ClassComponent from "./component/classComponent/ClassComponent";
import Counter from "./component/counter/Counter";
import Header from "./component/header/Header";
import Products from "./component/products/Products";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const fetchDataHandler = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
    console.log("loaded");
  }, []);

  return (
    <div>
      {/* <Form /> */}
      <button onClick={fetchDataHandler} className="btn">
        {" "}
        Fetch Data{" "}
      </button>
      <Products data={products} />
      {/* <Button btnName="Click me">Click Me</Button> */}
      {/* <Parent /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
