//create a first page that leads to Trump page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./FirstPage.module.css";
import Button from "../Components/Button";

function FirstPage() {
  return (
    <div className={styles.firstPage}>
      <h2 className={styles.title}>Welcome to the Crazy Trump Quote Generator!</h2>
      <Link to="/trump">
        <Button className={styles.button}>Click here to get started</Button>
      </Link>
    </div>
  );
}

export default FirstPage;