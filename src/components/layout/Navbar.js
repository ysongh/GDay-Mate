import React from 'react';
import { Link } from 'react-router-dom';

import Logo from  '../../img/logo.svg';

const Navbar = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="" href="/">
                    <img src={Logo} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div className="dropdown-menu pl-2" aria-labelledby="navbarDropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="nav-link" to="/categories">Category List</Link>
                                <Link className="nav-link" to="/category">Category 1</Link>
                                <Link className="nav-link" to="/category">Category 2</Link>
                                <Link className="nav-link" to="/category">Category 3</Link>
                            </div>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/checkins">Checkins</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                            </a>
                            <div className="dropdown-menu pl-2" aria-labelledby="navbarDropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="nav-link" to="/login">As User</Link>
                                <Link className="nav-link" to="/login">As Organization</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Get Started
                            </a>
                            <div className="dropdown-menu pl-2" aria-labelledby="navbarDropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="nav-link" to="/user/register">As User</Link>
                                <Link className="nav-link" to="/organization/register">As Organization</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;