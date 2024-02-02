import React from "react";
import styles from "./ExperienceGrid.module.css";

const experiences = [
  {
    company: "Sivers Photonics",
    position: "Software Engineer",
    startDate: "June 2021",
    endDate: "Present",
    description:
      "I am currently working as a Software Engineer at Sivers Photonics. I am working on an in-house sofrware that automates the drawing of DFB lasers. I also work on python scripts to visualise test data for customers.",
  },
  // {
  //   company: "University of Glasgow",
  //   position: "Software Developer",
  //   startDate: "June 2020",
  //   endDate: "June 2021",
  //   description:
  //     "I worked as a Software Developer at the University of Glasgow.",
  // },
];

function ExperienceGrid() {
  return (
    <div className={styles.experienceGrid}>
      {experiences.map((experience, index) => (
        <div key={index} className={styles.experienceRow}>
          <div className={styles.experienceRowHeader}>
            <h3>
              {experience.company} - {experience.position}
            </h3>
          </div>
          <div className={styles.experienceRowDates}>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceGrid;
