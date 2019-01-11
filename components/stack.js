import Item from "./stack-item";

const Stack = () => {
  return (
    <section className="bg-white" id="stack">
      <div className="container py-5">
        <h1 className="mb-5 text-center">My Skillset</h1>
        <div className="row pt-5 justify-content-center">
          <Item src="html5.png" alt="HTML5" />
          <Item src="css3.png" alt="CSS3" />
          <Item src="javascript.png" alt="javascript" />
          <Item src="nodejs.png" alt="nodejs" />
          <Item src="expressjs.png" alt="expressjs" />
          <Item src="mongodb.png" alt="mongodb" />
          <Item src="jquery.gif" alt="jquery" />
          <Item src="react.png" alt="react" />
          <Item src="postgresql.png" alt="postgresql" />
          <Item src="git.jpg" alt="git" />
          <Item src="github.svg" alt="github" />
          <Item src="bootstrap.png" alt="bootstrap" />
          <Item src="nextjs.png" alt="nextjs" />
          <Item src="travisCI.png" alt="travisCI" />
        </div>
      </div>
    </section>
  );
};

export default Stack;
