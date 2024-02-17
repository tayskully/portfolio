export default function DesignCard({ design }) {
  return (
    <div className="blur show card bg-light text-white col-md-6 col-lg-6 col-sm-12 p-4 bg-opacity-50">
      <img
        className="project-image card-img"
        src={design.image}
        alt="project logo"
      ></img>
      <div className="hide card-img-overlay">
        <h1 id="card-title" className="card-title text-dark ">
          {design.title}
        </h1>{" "}
        <br />
        <h2 className="text-dark">{design.description}</h2>

      </div>
    </div>
  );
}
