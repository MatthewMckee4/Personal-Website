import React from "react";
import styles from "./HomePage.module.css";
import LinkLayout from "../../components/Links/LinkLayout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <h2 className={styles.title}>Welcome to My Portfolio</h2>
      <div className={styles.linksContainer}>
        <LinkLayout />
      </div>
      <div className={styles.linkSection}>
        <Link to="/projects" className={styles.link}>
          View Projects
        </Link>
        <Link to="/experience" className={styles.link}>
          View Experience
        </Link>
      </div>
    </div>
  );
}

export default Home;
