import projects from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div>
        <h2 className="font-semibold text-2xl text-center text-transparent bg-gradient-to-r bg-clip-text from-blue-300 to-green-400 my-5">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} desc={project.desc} imagUrl={project.image} />

        ))}
        </div>
        
    </div>
  )
}
