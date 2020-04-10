import React from 'react';

import ExImg from "../img/example1.jpeg";

const Categories = () => {
    return(
        <div className="container mt-3">
            <h1 className="text-center">Categories</h1>
            <div className="row">
                <div className="col-6 col-sm-6 my-2">
                    <div class="card">
                        <img src={ExImg} class="card-img-top" alt="Categoeries #1" />
                    </div>
                </div>
                <div className="col-6 col-sm-6 my-2">
                    <div class="card">
                        <img src={ExImg} class="card-img-top" alt="Categoeries #1" />
                    </div>
                </div>
                <div className="col-6 col-sm-6 my-2">
                    <div class="card">
                        <img src={ExImg} class="card-img-top" alt="Categoeries #1" />
                    </div>
                </div>
                <div className="col-6 col-sm-6 my-2">
                    <div class="card">
                        <img src={ExImg} class="card-img-top" alt="Categoeries #1" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Categories;