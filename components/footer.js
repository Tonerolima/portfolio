const Footer = () => {
  return (
    <section className="bg-dark text-white py-4">
      <div className="container d-flex justify-content-between">
        <p className="m-0">
          Copyright &copy; Anthony Oyathelemhi {new Date().getFullYear()}{" "}
        </p>
        <p className="m-0 d-none d-md-block">
          <em>Design inspired by:</em>{" "}
          <a
            href="https://www.behance.net/gallery/69996347/LEON-Personal-Portfolio-Template"
            target="_blank"
          >
            Team UIXRex
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
