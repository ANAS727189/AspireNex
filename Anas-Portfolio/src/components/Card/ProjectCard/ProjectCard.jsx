import React from 'react';
import './ProjectCard.css';

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal({ state: true, project: project })}
      className="card bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 hover:transform hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer border-2 border-gray-200 dark:border-gray-700"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 bg-white rounded-lg shadow-md object-cover"
      />
      <div className="tags flex flex-wrap items-center gap-2 mt-4">
        {project.tags?.map((tag, index) => (
          <span key={index} className="tag text-sm font-normal text-blue-500 bg-blue-100 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="details flex flex-col mt-4">
        <h3 className="title text-lg font-bold text-gray-800 dark:text-gray-200 line-clamp-2">
          {project.title}
        </h3>
        <p className="date text-sm text-gray-500 dark:text-gray-400 mt-1">
          {project.date}
        </p>
        <p className="description text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-4">
          {project.description}
        </p>
      </div>
      <div className="members flex items-center mt-4 pl-2">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt="member avatar"
            className="avatar w-10 h-10 rounded-full bg-white shadow-lg border-2 border-gray-800 -ml-3"
          />
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <a href={project.link} className="text-blue-500 project-link">Visit Website</a>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.github, '_blank');
          }}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
        >
          View GitHub
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
