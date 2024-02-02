import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./LinkLayout.module.css";

const links = [
  { name: "Github", url: "https://github.com/MatthewMckee4", icon: faGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matthew-mckee-227401289/",
    icon: faLinkedin,
  },
  { name: "Email", url: "mailto:matthewmckee04@yahoo.co.uk", icon: faEnvelope },
];

function LinkLayout() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.name} className={styles.item}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <FontAwesomeIcon icon={link.icon} className={styles.icon} />
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkLayout;
