import React from "react";
import { useState } from "react";
import "./Form.css";
import FormChild from "./FormChild";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPssword] = useState("");
  const [list, setlist] = useState({
    listEmail: "",
    listPassword: "",
  });

  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setPssword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setlist({
      listEmail: email,
      listPassword: password,
    });
    setEmail("");
    setPssword("");
  };
  console.log(list);
  return (
    <div>
      <div class="container">
        <div class="brand-logo"></div>
        <div class="brand-title">TWITTER</div>
        <div class="inputs">
          <form action="" onSubmit={submitHandler}>
            <label>EMAIL</label>
            <input
              type="email"
              onChange={emailChangeHandler}
              placeholder="example@test.com"
              value={email}
            />
            <label>PASSWORD</label>
            <input
              onChange={passwordChangeHandler}
              type="password"
              placeholder="Min 6 charaters long"
              value={password}
            />
            <button type="submit">LOGIN</button>
          </form>
        </div>

        <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a>
      </div>
      <FormChild data={list} />
    </div>
  );
}

export default Form;
