import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={20} className="mr-1" />
            Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={20} className="mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
