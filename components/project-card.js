const ProjectCard = ({ name, desc, stack, image }) => {
  return (
    <div className="card bg-dark text-white">
      <img className="card-img" src={image} alt={name} />
      <div className="card-img-overlay d-flex flex-column">
        <h5 className="card-title mt-auto">{name}</h5>
        <p className="card-text">{desc}</p>
        <small className="card-text">Powered by: {stack}</small>
      </div>
      <style jsx>
        {`
          img {
            opacity: 0.4;
          }
          .card {
            transition: transform 0.3s linear;
            cursor: pointer;
            text-shadow: 0px 1px 2px #707787;
          }
          .card:hover {
            transform: scale(0.9);
          }
        `}
      </style>
    </div>
  );
};

export default ProjectCard;
