import Button from "./common/button";
import { Link } from "react-scroll";

const Showcase = () => {
  return (
    <section id="home">
      <div className="container d-flex flex-column h-100 justify-content-center align-items-start">
        <p className="font-weight-bold">Hello,</p>
        <h1>
          <span className="font-weight-light">I am </span>Anthony Oyathelemhi
        </h1>
        <h5>Fullstack Web Developer</h5>
        <p>
          <a
            href="https://twitter.com/intent/user?user_id=95310080"
            target="_blank"
          >
            <i className="fab fa-2x mr-3 fa-twitter" />
          </a>
          <a href="https://github.com/tonerolima" target="_blank">
            <i className="fab fa-2x mr-3 fa-github" />
          </a>
          <a href="https://medium.com/@tonero91" target="_blank">
            <i className="fab fa-2x fa-medium-m" />
          </a>
        </p>
        <Link to="contact" smooth={true} duration={1000}>
          <Button text="Contact Me" classes="mt-4 text-white" />
        </Link>
      </div>
      <div id="sphere1" className="sphere d-none d-lg-block" />
      <div id="sphere2" className="sphere d-none d-lg-block" />
      <div id="sphere3" className="sphere d-none d-lg-block" />

      <style jsx>{`
        section {
          height: 650px;
          margin-top: -85px;
          position: relative;
          background: url("/static/bg/large-triangles.svg");
          /* background by SVGBackgrounds.com */
        }
        .overlay {
          background: rgba(0, 0, 0, 0.3);
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

        .fa-github {
          color: black;
        }

        .fa-twitter {
          color: #1da1f2;
        }

        .fa-medium-m {
          color: black;
        }

        @media (max-width: 991px) {
          section {
            height: 100vh;
            background: url("/static/bg/flat-mountains.svg");
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
          }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
