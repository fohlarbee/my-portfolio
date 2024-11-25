'use client'
import { useState, useRef } from "react";
import projects from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";



export default function ProjectSection() {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  const handleTabChange = (newTag: string) => {
    setTag(newTag)
  };

  const filterProjects = projects.filter((project) => 
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial : {opacity:0, y:50},
    animate: {opacity:1, y:0},
    transition:{duration:0.5}
  }
  return (
    <section id="projects">
        <h2 
        className="font-semibold text-2xl text-center text-transparent bg-gradient-to-r bg-clip-text from-blue-300 to-green-400 my-5">
          My Projects
        </h2>
        <div className="flex flex-row justify-center items-center gap-3 my-3">
         <ProjectTag onClick={handleTabChange} name='All' isSelected={tag === 'All'} />
         <ProjectTag onClick={handleTabChange} name='Web' isSelected={tag === 'Web'} />
         <ProjectTag onClick={handleTabChange} name='Mobile' isSelected={tag === 'Mobile'} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filterProjects.map((project, index) => (
              <motion.li  key={index} 
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{duration: 0.3, delay: index * 0.4 }}
              >
                  <ProjectCard  
                  title={project.title} 
                  desc={project.desc} 
                  imagUrl={project.image} 
                  gitUrl={project.gitUrl} 
                  previewUrl={project.previewUrl} />
                  
              </motion.li>
          

        ))}
        </ul> 
        
    </section>
  )
}
