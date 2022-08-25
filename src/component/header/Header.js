import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div class="container">
        <nav class="menu">
          <ul class="main-menu">
            <li class="active">
              <i class="fa fa-home"></i>
              {props.btn1}
            </li>
            <li class="with-submenu">
              <i class="fa fa-briefcase"></i>
              {props.btn2}
              <i class="fa fa-caret-down"></i>
              <ul class="submenu">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Animation</li>
              </ul>
            </li>
            <li>
              <i class="fa fa-user"></i>
              {props.btn3}
            </li>
            <li>
              <i class="fa fa-search"></i>
              {props.btn4}
            </li>
          </ul>
        </nav>
        <article>
          <h1>Home</h1>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, et! Veniam, cum. Necessitatibus consectetur, alias
              facere, cum omnis officia ad architecto dolore rerum voluptatum
              fuga. Provident, voluptate voluptas? Dolor, blanditiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, et! Veniam, cum. Necessitatibus consectetur, alias
              facere, cum omnis officia ad architecto dolore rerum voluptatum
              fuga. Provident, voluptate voluptas? Dolor, blanditiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, et! Veniam, cum. Necessitatibus consectetur, alias
              facere, cum omnis officia ad architecto dolore rerum voluptatum
              fuga. Provident, voluptate voluptas? Dolor, blanditiis.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Header;
