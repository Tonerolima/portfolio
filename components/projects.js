import ProjectCard from "./project-card";

const Projects = () => {
  const projectList = [
    {
      name: "MRA Cultural Day 2019",
      desc: "A JAM stack web app for the Magodo GRA cultural day",
      stack: "React, Next, Bootstrap 4",
      image: "/static/projects/mra-cultural-day.png",
      url: "https://www.mraculturalday.com/"
    },
    {
      name: "Diplomat Delivery",
      desc: "A JAM stack web app for a fictional courier service company",
      stack: "Node, Express, Mongodb, React, Next, Bootstrap 4, jQuery",
      image: "/static/projects/shifter.png",
      url: "https://diplomatdelivery.cf/"
    },
    {
      name: "CYON - Regina Mundi",
      desc:
        "A server-side rendered website for the catholic youth organization, Mushin Lagos",
      stack: "Node, Express, Mongodb, Semantic-UI, jQuery, Bootstrap",
      image: "/static/projects/cyon.png",
      url: "https://cyon-regina-mundi.herokuapp.com"
    },
    {
      name: "Fast-Food-Fast",
      desc: "A JAM stack web app for a fictional food delivery company",
      stack: "Node, Express, PostgreSQL, React",
      image: "/static/projects/fast-food-fast.png",
      url: "https://fff-react.herokuapp.com"
    },
    {
      name: "YelpCamp",
      desc: "Website for finding camp sites to share and visit",
      stack: "Node, Express, Mongodb, Semantic-UI",
      image: "/static/projects/yelp-camp.png",
      url: "https://damp-mountain-50073.herokuapp.com"
    },
    {
      name: "Pixel Art Maker",
      desc:
        "A single page website for creating digital art with an adjustable canvas to draw on",
      stack: "HTML, CSS, JavaScript",
      image: "/static/projects/pixel-art-maker.png",
      url: "https://tonerolima.github.io/Pixel-Art-Maker/"
    },
    {
      name: "RGB Color Game",
      desc:
        "A simple game where users try to select the correct color in the displayed RGB representation",
      stack: "HTML, CSS, JavaScript",
      image: "/static/projects/color-game.png",
      url: "https://tonerolima.github.io/ColorGame"
    }
  ];

  const renderList = () => {
    return projectList.map(({ name, desc, stack, image, url }, index) => {
      return (
        <ProjectCard
          name={name}
          desc={desc}
          stack={stack}
          image={image}
          url={url}
          key={index}
        />
      );
    });
  };

  return (
    <section className="pb-5 bg-light" id="projects">
      <div className="container">
        <h1 className="py-5 text-center">Recent Projects</h1>
        <div className="card-columns">{renderList()}</div>
      </div>
    </section>
  );
};

export default Projects;
