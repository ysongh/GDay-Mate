import React from 'react';

import ExImg1 from "../img/example2.jpeg";
import ExImg2 from "../img/example3.jpeg";
import ExImg3 from "../img/example4.jpeg";

const Landing = () => {
    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ExImg1} className="d-block w-100" alt="" />
                        <div class="hero-text">
                            <h1>Hello World 1</h1>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ExImg2} className="d-block w-100" alt="" />
                        <div class="hero-text">
                            <h1>Hello World 2</h1>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ExImg3} className="d-block w-100" alt="" />
                        <div class="hero-text">
                            <h1>Hello World 3</h1>
                            <button className="btn btn-primary">Learn More</button>
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
        </>
    );
};

export default Landing;