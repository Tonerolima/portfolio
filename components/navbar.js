import { useEffect } from "react";
import { Component } from "react";

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
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a href="#stack" className="nav-link">
                  TECH STACK
                </a>
              </li>
            </ul>
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

          span {
            color: #f9899c;
          }

          * {
            font-family: poppins;
          }
        `}</style>
      </nav>
    );
  }
}

export default Navbar;
