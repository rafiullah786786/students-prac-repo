import React from "react";

import classes from "./Button.module.css";
function Button(props) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      ></link>
      <button className={classes.btn}>{props.children}</button>
    </>
  );
}

export default Button;
