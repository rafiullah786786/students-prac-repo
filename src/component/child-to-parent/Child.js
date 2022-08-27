import React from "react";

const data = "moni";
function Child(props) {
  props.getData(data);
  return <div></div>;
}

export default Child;
