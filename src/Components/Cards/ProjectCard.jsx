import React from "react";
import "./card.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <img src={data.img} alt="project" />
      <div className="content">
        <h3>{data.title}</h3>
        <p>{data.discriptions}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
