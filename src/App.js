import React from "react";
import "./App.css";
import ClassComponent from "./component/classComponent/ClassComponent";
import Header from "./component/header/Header";
import Products from "./component/products/Products";
import Button from "./component/UI/Button";
const data = [
  {
    id: 1,
    name: "React",
    price: "200$",
    img: "https://cdn.iconscout.com/icon/free/png-256/react-1-116905.png",
    disc: "this is a simple discription for and we will be geted some other information about dhiccsdhakc scxdscdscsd csdcdscdc dcds dcvdcdcvdcd",
  },
  {
    id: 2,
    name: "Angular",
    price: "300$",
    img: "https://cdn.iconscout.com/icon/free/png-256/angular-1-116906.png",
    disc: "this is a simple discription for and we will be geted some other information about dhiccsdhakc scxdscdscsd csdcdscdc dcds dcvdcdcvdcd",
  },
  {
    id: 3,
    name: "Vue",
    price: "400$",
    img: "https://cdn.iconscout.com/icon/free/png-256/vue-1-116907.png",
    disc: "this is a simple discription for and we will be geted some other information about dhiccsdhakc scxdscdscsd csdcdscdc dcds dcvdcdcvdcd",
  },
];

function App() {
  return (
    <div>
      <Products data={data} />
      <Button btnName="Click me">Click Me</Button>
    </div>
  );
}

export default App;
