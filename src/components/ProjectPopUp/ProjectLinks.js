import React from "react";
import { getShortenedLinkName } from "../Utilities/utils";
import ProjectDescription from "./ProjectDescription";

const githubLogoUrl = "/assets/images/github-logo.jpg";

function ProjectLinks({ links }) {
  return (
    <div className="flex flex-col">
      {links.map((link, index) => (
        <div key={index} className="mb-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center "
          >
            {link.includes("github") ? (
              <img
                src={githubLogoUrl}
                alt="GitHub"
                className="w-5 h-5 mr-2 bg-transparent mix-blend-multiply"
              />
            ) : null}
            <span className="custom-text">{getShortenedLinkName(link)}</span>
          </a>
          <ProjectDescription projectLink={link} />
        </div>
      ))}
    </div>
  );
}

export default ProjectLinks;
