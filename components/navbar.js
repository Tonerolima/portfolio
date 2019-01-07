const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white navbar-expand-lg">
      <div className="container">
        <h3 className="navbar-brand">ANTHONY</h3>
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
        }

        .nav-link {
          font-size: 0.8rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
