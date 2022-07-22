import React from "react";
import ironhacklogo from "../images/ironhack-logo-xs.png";
import menutop from "../images/menu-top-xs.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={ironhacklogo} alt="Pic about Ironhack logo" />
        <img src={menutop} alt="Pic about web menu" />
      </div>
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button>Awesome!</button>
    </header>
  );
}
