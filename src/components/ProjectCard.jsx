export default function ProjectCard({ project }) {
  return (
    <div className="show card bg-light text-white col-6 p-4 bg-opacity-50">
      <img className="project-image card-img" src={project.image} alt="Card image"></img>
      <div className="card-img-overlay">
        <h3 className=" hide card-title">
          {project.title}
          
        </h3> <br />
        <p className="hide">
          {project.description}
          
        </p><br />

        <a href={project.github} className=" hide card-text text-dark">
          <img src="/github-mark-white.svg" width="30"></img>
        </a><br />
        <a
          href={project.deployedLink}
          className=" hide card-text link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover "
        >
          Deployed
        </a>
      </div>
    </div>
  );
}
