import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

export default function Section() {
  return (
    <section className="section">
      <article className="card">
        <img src={icon1} alt="Pic about Declarative article" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </article>
      <article className="card">
        <img src={icon2} alt="Pic about Components article" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </article>
      <article className="card">
        <img src={icon3} alt="Pic about Sigle-Way article" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </article>
      <article className="card">
        <img src={icon4} alt="Pic about JSX article" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
    </section>
  );
}
