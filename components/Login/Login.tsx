import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <section id="login" className={classNames("min-h-screen flex flex-col justify-center items-center", styles.login)}>
      <div className="w-full md:w-1/4">
      <h1 className={styles["title-text"]}>PROTECT YOUR DATA WITH US</h1>
      <p className={styles["subheader"]}>230,100+ users trust us!</p>
      </div>

      <form className="flex flex-col my-8 border-2 border-gray-300 rounded-lg w-3/4">
        <input className="p-2 border-b-2 border-gray-" type="email" placeholder="Email address"/>
        <input className="p-2"  type="password" placeholder="Password"/>
      </form>
    </section>
  );
}