import React, { Component } from 'react';
import {NavLink ,Link} from 'react-router-dom';


class NaviBar extends Component {
    render(){
        return(
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-transparent fixed-top navbar-dark"
                    id="navbar">
                    <div className="container">
                        <Link className="navbar-brand" id="navbar-br" to="/">Brand</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <NavLink className="nav-link" to="/OurMission"
                                    >OurMission <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/About">About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="page-header">
                    <div className="content-center">
                        <h1>Welcome to our page</h1>
                    </div>
                </header>
            </div>
        )

    }

}

export default NaviBar;