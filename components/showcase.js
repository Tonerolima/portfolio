const Showcase = () => {
  return (
    <section>
      <div className="container d-flex flex-column h-100 justify-content-center align-items-start">
        <p className="font-weight-bold">Hello,</p>
        <h1>
          <span className="font-weight-light">I am </span>Anthony Oyathelemhi
        </h1>
        <h5>Fullstack Web Developer</h5>
        <button className="btn btn-lg d-inline mt-4 text-white">
          Contact Me
        </button>
      </div>
      <div id="sphere1" className="sphere d-none d-lg-block" />
      <div id="sphere2" className="sphere d-none d-lg-block" />
      <div id="sphere3" className="sphere d-none d-lg-block" />

      <style jsx>{`
        section {
          height: 650px;
          position: relative;
        }
        .overlay {
          background: rgba(0, 0, 0, 0.3);
        }
        button {
          border-radius: 50px;
          background-color: #f9899c;
          box-shadow: 0px 2px 22px 1px rgba(245, 244, 244, 1);
          transition: all 0.2s linear;
        }
        button:hover {
          box-shadow: 0px 2px 22px 1px rgba(200, 190, 190, 1);
        }
        #sphere1 {
          right: 0;
          z-index: 2;
          background: url("https://res.cloudinary.com/cyonreginamundi/image/upload/v1535384433/cyon/np5hxeilpwj9g8whgx5n.jpg");
          background-repeat: no-repeat;
          background-size: cover;
        }

        #sphere2 {
          right: 10px;
          z-index: 1;
          background-color: #feb7a6;
        }

        #sphere3 {
          right: 20px;
          background-color: #f9899c;
        }

        .sphere {
          position: absolute;
          bottom: 0;
          width: 35%;
          height: 105%;
          border-radius: 100% 0% 20% 72% / 58% 0% 0% 41%;
        }
      `}</style>
    </section>
  );
};

export default Showcase;
