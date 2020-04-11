import React from 'react';
import { Link } from 'react-router-dom';

import ExImg1 from "../img/hero1.svg";
import ExImg2 from "../img/hero2.svg";
import ExImg3 from "../img/hero3.svg";
import Img4 from "../img/problem.svg";

const Landing = () => {
    return(
        <>
            <header>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ExImg1} className="d-block w-100" alt="" />
                            <div className="hero__text">
                                <h1 className="hero__title">Need help stay mentally healthy?</h1>
                                <Link className="btn btn-info" to="/user">Get Started</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ExImg2} className="d-block w-100" alt="" />
                            <div className="hero__text">
                                <h1 className="hero__title">Provide pandemic situation?</h1>
                                <Link className="btn btn-info" to="/organization">Get Started</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ExImg3} className="d-block w-100" alt="" />
                            <div className="hero__text">
                                <h1 className="hero__title">Connect people with similar interests</h1>
                                <Link className="btn btn-info" to="/categories">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </header>

            <main>
                <section className="container problem">
                    <h2>Social distancing has severe impacts on mental health of everyone</h2>
                    <p>The elderly population is especially vulnerable during the COVID-19 pandemic​</p>
                    <img src={Img4} alt="Sad" />
                </section>

                <section className="bg-p-color solution py-5 mt-3 mb-5">
                    <div className="container">
                        <h2>G’Day Mate seeks to aid the elderly and their supporters in ensuring their mental health and to aid in prevention timely intervention</h2>
                    </div>
                </section>

                <section className="container action my-5">
                    <div className="card">
                        <i className="fas fa-hands-helping"></i>
                        <div className="card-body">
                            <p>Aid people who need help with daily activities</p>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fas fa-hands-helping"></i>
                        <div className="card-body">
                            <p>Aid people who need help with daily activities</p>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fas fa-hands-helping"></i>
                        <div className="card-body">
                            <p>Aid people who need help with daily activities</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Landing;