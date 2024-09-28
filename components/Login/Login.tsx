import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <section id="login" className={classNames("min-h-screen flex flex-col justify-center items-center", styles.login)}>
      <h1>PROTECT YOUR DATA WITH US</h1>
      <p>230,100+ users trust us!</p>
    </section>
  );
}