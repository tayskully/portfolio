export default function ProjectCard({ project }) {
  return (
    <div className="blur show card bg-light text-white col-6 p-4 bg-opacity-50">
      <img className="project-image card-img" src={project.image} alt="project logo"></img>
      <div className=" hide card-img-overlay">
        <h1 className="card-title text-dark ">
          {project.title}
          
        </h1> <br />
        <p className="text-dark">
          {project.description}
          
        </p><br />

        <a href={project.github} className=" card-text text-dark">
          <img src="/github-mark-white.svg" width="30"></img>
        </a><br />
        <a
          href={project.deployedLink}
          className="card-text link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover "
        >
          Deployed
        </a>
      </div>
    </div>
  );
}
