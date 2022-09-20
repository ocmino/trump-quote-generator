import React from "react";
import axios from "axios";
import styles from "./Trump.module.css";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

function Trump() {
  const [trump, setTrump] = React.useState([]);

  const quotation = String.fromCharCode(34);

  const getTrump = async () => {
    const response = await axios.get(
      "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    );
    setTrump(response.data.message);
  };

  return (
    <div className={styles.trump}>
      <h2 className={styles.title}>Random Trump Quote Generator</h2>
      <Button onClick={getTrump}>Get random qoute</Button>
      <Button onClick={() => setTrump("")}>Clear random quote</Button>
      <p className={styles.quote}>
        {quotation}
        {trump}
        {quotation}
      </p>
      <Link to="/">
        <Button className={styles.button}>Back</Button>
      </Link>
    </div>
  );
}

export default Trump;
