import ProjectCard from "./project-card";

const Projects = () => {
  const projectList = [
    {
      name: "Shifter",
      desc: "A JAM stack web app for a fictional courier service company",
      stack: "Node, Express, Mongodb, React, Next, Bootstrap 4, jQuery",
      image: "/static/projects/shifter.png"
    },
    {
      name: "CYON - Regina Mundi",
      desc:
        "A server-side rendered website for the catholic youth organization, Mushin Lagos",
      stack: "Node, Express, Mongodb, Semantic-UI, jQuery, Bootstrap",
      image: "/static/projects/cyon.png"
    },
    {
      name: "Fast-Food-Fast",
      desc: "A JAM stack web app for a fictional food delivery company",
      stack: "Node, Express, PostgreSQL, React",
      image: "/static/projects/fast-food-fast.png"
    },
    {
      name: "YelpCamp",
      desc: "Website for finding camp sites to share and visit",
      stack: "Node, Express, Mongodb, Semantic-UI",
      image: "/static/projects/yelp-camp.png"
    },
    {
      name: "Pixel Art Maker",
      desc:
        "A single page website for creating digital art with an adjustable canvas to draw on",
      stack: "HTML, CSS, JavaScript",
      image: "/static/projects/pixel-art-maker.png"
    },
    {
      name: "RGB Color Game",
      desc:
        "A simple game where users try to select the correct color in the displayed RGB representation",
      stack: "HTML, CSS, JavaScript",
      image: "/static/projects/color-game.png"
    }
  ];

  const renderList = () => {
    return projectList.map(({ name, desc, stack, image }, index) => {
      return (
        <ProjectCard
          name={name}
          desc={desc}
          stack={stack}
          image={image}
          key={index}
        />
      );
    });
  };

  return (
    <section>
      <div className="container">
        <h1 className="my-5 text-center">Recent Projects</h1>
        <div className="card-columns">{renderList()}</div>
      </div>
    </section>
  );
};

export default Projects;
