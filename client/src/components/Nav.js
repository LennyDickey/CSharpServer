import React from "react";
// import nav from "react-bootstrap";
// import moonIcon from "/";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation-bar"
      >
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>

      <a class="navbar-brand" href="/index">
        <img src="/data/img/moon-icon.png" alt="Logo" />
      </a>

      <div class="collapse navbar-collapse" id="navigation-bar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cards">
              PRODUCTS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
