import React, { useEffect, useState } from "react";
import "./App.css";
import Products from "./component/products/Products";
import MenCloth from "./component/products/MenCloth";
import WomenCloth from "./component/products/WomenCloth";
import Navbar from "./component/products/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Products data={products} />
      <h1>women products</h1>
      <WomenCloth />
      <h1>pa dey na shatada da halakanoo sezoona deee</h1>
      <MenCloth />
    </div>
  );
}

export default App;
