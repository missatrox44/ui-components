import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <section id="login" className={classNames("min-h-screen flex flex-col justify-center items-center", styles.login)}>
      <div className="w-full md:w-1/4">
      <h1 className={styles["title-text"]}>PROTECT YOUR DATA WITH US</h1>
      </div>
      <p>230,100+ users trust us!</p>
    </section>
  );
}