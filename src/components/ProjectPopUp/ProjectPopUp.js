import React from "react";
import ProjectSlideShow from "./ProjectSlideShow";
import ProjectLinks from "./ProjectLinks";

function ProjectPopup({ project, onClose }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-custom-background p-5 rounded-lg shadow-lg w-4/5 max-w-2xl transition-transform duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-heading">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-xl custom-text cursor-pointer p-1"
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>
        <div className="mt-5">
          <ProjectSlideShow images={project.images} />
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
