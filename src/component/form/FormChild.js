import React from "react";
import "./FormChild.css";

function FormChild(props) {
  console.log(props.data);
  return (
    <div>
      <h1 className="first">{props.data.listEmail}</h1>
      <br />
      <br />
      <br />
      <h1 className="second">{props.data.listPassword}</h1>
    </div>
  );
}

export default FormChild;
