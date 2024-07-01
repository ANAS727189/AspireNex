import React from "react";
import projects from "../../data/project-all.js";
import ProjectCards from "../Card/ProjectCard/ProjectCard.jsx";

const Project = () => {
  return (
    <div id = "projects" className="min-h-screen bg-[#FFCE32] flex justify-center p-4"> 
      <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Projects</h1>
        <div className="w-1/2 h-1 bg-gray-800 mx-auto mb-8"></div>
        <h3 className="text-lg mb-6 text-center font-semibold text-gray-600">
          Here are some of the projects I have built as I delve deeper into the field of technology over time.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCards key={index} project={project} setOpenModal={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
