import React from "react";
import Child from "./Child";
import { useState } from "react";

function Parent() {
  const [data, setData] = useState(null);
  const getData = (data) => {
    setData(data);
  };
  return (
    <div>
      <h1>{data}</h1>
      <Child getData={getData} />
    </div>
  );
}

export default Parent;
