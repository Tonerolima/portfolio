import { Component } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.calcScroll = this.calcScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      scrolled: false,
      menu: "",
      icon: "fa-bars"
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

  toggleMenu() {
    if (this.state.menu === "") {
      this.setState({
        menu: "visible",
        icon: "fa-times"
      });
    } else {
      this.setState({
        menu: "",
        icon: "fa-bars"
      });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-transparent navbar-expand-lg">
        <div className="container">
          <h2 className="navbar-brand">
            ANTH<span>O</span>NY
          </h2>
          <div className="d-lg-none d-flex justify-content-center align-items-center ml-auto icon-wrapper">
            <i
              className={`fas ${this.state.icon} fa-2x`}
              onClick={this.toggleMenu}
            />
          </div>

          <div className={`nav-collapse ${this.state.menu}`}>
            <img
              src="https://res.cloudinary.com/cyonreginamundi/image/upload/w_200,h_200,c_fill,g_face/cyon/np5hxeilpwj9g8whgx5n.jpg"
              alt="Anthony Oyathelemhi"
              className="rounded-circle d-inline-block d-lg-none"
              id="avatar"
            />
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
            margin-right: 300px;
            font-size: 2rem;
            margin-bottom: 0;
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

            .fas {
              font-family: "Font Awesome 5 Free";
              transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
              color: #ffffff;
            }

            .icon-wrapper {
              position: fixed;
              bottom: 30px;
              right: 30px;
              background: #f9899c;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              z-index: 5;
            }

            .nav-collapse {
              display: flex;
              flex-direction: column;
              align-items: center;
              position: absolute;
              top: 0;
              right: -992px;
              height: 100vh;
              width: 100vw;
              background: #707787fa;
              font-size: 2rem;
              padding: 50px 0;
              transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
            }

            .nav-collapse.visible {
              right: 0;
            }

            .nav-collapse > img {
              margin-bottom: auto;
            }

            .nav-item {
              width: max-content;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 10px;
            }

            .nav-item + .nav-item {
              margin-top: 10px;
            }

            .fa-times {
              transform: rotate(-180deg);
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Navbar;
