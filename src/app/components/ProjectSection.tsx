'use client'
import { useState } from "react";
import projects from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


export default function ProjectSection() {
  const [tag, setTag] = useState('All')

  const handleTabChange = (newTag: string) => {
    setTag(newTag)
  };

  const filterProjects = projects.filter((project) => 
    project.tag.includes(tag)
  );
  return (
    <div>
        <h2 className="font-semibold text-2xl text-center text-transparent bg-gradient-to-r bg-clip-text from-blue-300 to-green-400 my-5">My Projects</h2>
        <div className="flex flex-row justify-center items-center gap-3 my-3">
         <ProjectTag onClick={handleTabChange} name='All' isSelected={tag === 'All'} />
         <ProjectTag onClick={handleTabChange} name='Web' isSelected={tag === 'Web'} />
         <ProjectTag onClick={handleTabChange} name='Mobile' isSelected={tag === 'Mobile'} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filterProjects.map((project) => (
            <ProjectCard key={project.id} title={project.title} desc={project.desc} imagUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />

        ))}
        </div>
        
    </div>
  )
}
