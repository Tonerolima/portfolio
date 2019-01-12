import { Component } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.calcScroll = this.calcScroll.bind(this);

    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.calcScroll);
  }

  calcScroll() {
    const position = window.scrollY;
    const scrolled = this.state.scrolled;

    if (position < 100) {
      $(".navbar")
        .removeClass("visible")
        .css("top", "0px");
      this.setState({ scrolled: false });
    } else if (position < 200 && !scrolled) {
      $(".navbar").css("top", "-100px");
      this.setState({ scrolled: false });
    } else if (position > 200 && !scrolled) {
      $(".navbar")
        .addClass("visible")
        .animate({ top: "0px" });
      this.setState({ scrolled: true });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-transparent navbar-expand-lg">
        <div className="container">
          <h2 className="navbar-brand">
            ANTH<span>O</span>NY
          </h2>
          <img
            src="https://res.cloudinary.com/cyonreginamundi/image/upload/w_65,h_65,c_fill,g_face/cyon/np5hxeilpwj9g8whgx5n.jpg"
            alt="Anthony Oyathelemhi"
            className="rounded-circle d-inline-block d-lg-none ml-auto"
            id="avatar"
          />
          <div className="navbar-collapse collapse">
            <Scrollspy
              items={["home", "about", "projects", "stack", "contact"]}
              currentClassName="active"
              className="navbar-nav"
            >
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  smooth={true}
                  duration={1000}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  smooth={true}
                  duration={1000}
                >
                  ABOUT ME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className="nav-link"
                  smooth={true}
                  duration={1000}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="stack"
                  className="nav-link"
                  smooth={true}
                  duration={1000}
                >
                  TECH STACK
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  smooth={true}
                  duration={1000}
                  offset={-200}
                >
                  CONTACT
                </Link>
              </li>
            </Scrollspy>
          </div>
        </div>

        <style jsx>{`
          .navbar {
            z-index: 3;
          }
          .navbar-brand {
            margin-right: 350px;
            font-size: 2rem;
          }

          .navbar.visible {
            position: fixed;
            width: 100vw;
            z-index: 11;
            background: #fff !important;
            box-shadow: 0px 1px 5px 1px #f5f4f4;
          }

          .nav-link {
            font-size: 0.9rem;
          }

          .nav-item {
            cursor: pointer;
          }

          .active {
            border-bottom: 2px solid #f9899c;
          }

          span {
            color: #f9899c;
          }

          * {
            font-family: poppins;
          }

          @media (max-width: 991px) {
            .navbar-brand {
              margin-right: 0px;
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Navbar;
