import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NaviBar extends Component {
  state = {
    scrollPositionY: 0
  };
  componentDidMount() {
    return window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    return window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };
  render() {
    const isScrolling =
      this.state.scrollPositionY > 100
        ? "navbar sticky navbar-expand-lg navbar-transparent fixed-top navbar-dark"
        : "navbar navbar-expand-lg navbar-transparent fixed-top navbar-dark";
    const navLinks =
      this.state.scrollPositionY > 100 ? "nav-link sticky-links" : "nav-link";
    return (
      <div>
        <nav className={isScrolling} id="navbar">
          <div className="container">
            <Link className="navbar-brand" id="navbar-br" to="/">
              Brand
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <NavLink className={navLinks} to="/Registration">
                    Registration <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={navLinks} to="/Movies">
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={navLinks} to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={navLinks} to="/Contacts">
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="page-header" />
        <div className="content-center">
          <h1>Main Page</h1>
        </div>
      </div>
    );
  }
}

export default NaviBar;
