import React from 'react';
import { Link } from 'react-router-dom';

import Logo from  '../../img/logo.svg';

const Footer = () => {
    return(
        <footer className="bg-warning py-4 footer">
            <div className="container">
                <img src={Logo} alt="Logo" />
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="mr-5">
                        <ul className="list-unstyled">
                            <li>
                                <p>Quick Links</p>
                            </li>
                            <li>
                                <Link to="/">About Us</Link>
                            </li>
                            <li>
                                <Link to="/user">Users</Link>
                            </li>
                            <li>
                                <Link to="/organization">Organization</Link>
                            </li>
                            <li>
                                <Link to="/">Legal & Privacy</Link>
                            </li>
                        </ul>`
                    </div>
                    <div className="mr-5">
                        <ul className="list-unstyled">
                            <li>
                                <p>Categories</p>
                            </li>
                            <li>
                                <a href="/">Categories 1</a>
                            </li>
                            <li>
                                <a href="/">Categories 2</a>
                            </li>
                            <li>
                                <a href="/">Categories 3</a>
                            </li>
                            <li>
                                <a href="/">Categories 4</a>
                            </li>
                        </ul>`
                    </div>
                </div>
                <hr />
                <h4 className="text-center">Copyright &copy;{new Date().getFullYear()} G'Day Mate</h4>
            </div>
        </footer>
    );
};

export default Footer;