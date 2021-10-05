import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import themeContext from "../context/themes/themeContext";

const Navbar = (props) => {
  let location = useLocation();
  let history = useHistory();
  const contextForThemes = useContext(themeContext);
  const { setTheme } = contextForThemes;

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged Out succesfully! ", "info");
    history.push("/login");
  };

  const handleClick1 = () => {
    setTheme({ light: true, dark: false, anotherDark: false });
    //console.log("theme selected =  "+theme)
  };

  const handleClick2 = () => {
    setTheme({ light: false, dark: true, anotherDark: false });
    //console.log("theme selected =  "+theme)
  };

  const handleClick3 = () => {
    setTheme({ light: false, dark: false, anotherDark: true });
    //console.log("theme selected =  "+theme)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="/#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={handleClick1}>
                    Light
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleClick2}>
                    Dark
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleClick3}>
                    High Contrast
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                SignUp
              </Link>
            </form>
          ) : (
            <button
              className={`btn btn-primary mx-2`}
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
