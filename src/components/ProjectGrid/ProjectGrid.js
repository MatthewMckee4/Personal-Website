import React, { useState } from "react";
import ProjectPopup from "../ProjectPopUp/ProjectPopUp";
import styles from "./ProjectGrid.module.css";

const projects = [
  {
    title: "Music Rating Website",
    links: [
      "https://github.com/MatthewMckee4/Music-Rating-Frontend",
      "https://github.com/MatthewMckee4/Music-Rating-Backend",
    ],
    images: [
      "/assets/images/music-rating-website/album-page.png",
      "/assets/images/music-rating-website/artist-page.png",
      "/assets/images/music-rating-website/comment-album.png",
    ],
  },
  {
    title: "E-commerce Website",
    links: ["https://github.com/MatthewMckee4/e-commerce-website"],
    images: [
      "/assets/images/e-commerce-website/account-page.png",
      "/assets/images/e-commerce-website/basket.png",
      "/assets/images/e-commerce-website/review.png",
      "/assets/images/e-commerce-website/store.png",
    ],
  },
];

function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    console.log("Project clicked:", project);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={styles.projectItem}
          onClick={() => handleClick(project)}
        >
          {project.images && project.images[0] && (
            <img
              src={project.images[0]}
              alt={`${project.title} Thumbnail`}
              className={styles.projectThumbnail}
            />
          )}
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>
      ))}
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
}

export default ProjectGrid;
