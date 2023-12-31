import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import DarkModeToggle from "../DarkModeToggle";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" className="hover:text-custom-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-custom-secondary">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" className="hover:text-custom-secondary">
            Experience
          </Link>
        </li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;
