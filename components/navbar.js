const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-transparent navbar-expand-lg fixed-top">
      <div className="container">
        <h2 className="navbar-brand">
          ANTH<span>O</span>NY
        </h2>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="#" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                TECH STACK
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar-brand {
          margin-right: 350px;
          font-size: 2rem;
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
};

export default Navbar;
