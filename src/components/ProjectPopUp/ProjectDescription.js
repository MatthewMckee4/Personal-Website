import React, { useState, useEffect } from "react";

function ProjectDescription({ projectLink }) {
  const [repoDescription, setRepoDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      const description = await fetchProjectDescription(projectLink);
      setRepoDescription(description);
    };

    fetchDescription();
  }, [projectLink]);

  return <p className="text-sm custom-text">{repoDescription}</p> || "";
}

const fetchProjectDescription = async (projectLink) => {
  if (!projectLink) {
    return "";
  }

  try {
    const repoUrl = new URL(projectLink);
    const [owner, repo] = repoUrl.pathname.split("/").slice(1, 3);
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    const data = await response.json();

    return data.description;
  } catch (error) {
    console.error("Error fetching repo data:", error);
    return "";
  }
};

export default ProjectDescription;
