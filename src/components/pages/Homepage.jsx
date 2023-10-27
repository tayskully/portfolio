import projectData from "../../data/projects.json";
import ProjectCard from "../ProjectCard";
export default function Homepage() {
  return (
    <div className="container" id="portfolio">
      <h1>projects go here</h1>
      <div className="row">
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
