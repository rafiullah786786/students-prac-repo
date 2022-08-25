import React from "react";

import classes from "./Button.module.css";
function Button(props) {
  const click = () => {
    console.log("clicked");
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      ></link>
      <button onClick={click} className={classes.btn}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
