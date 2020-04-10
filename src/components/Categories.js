import React from 'react';

import ExImg from "../img/example1.jpeg";

const list = [
    {
        id: 1,
        imageS: ExImg
    },
    {
        id: 2,
        imageS: ExImg
    },
    {
        id: 3,
        imageS: ExImg
    },
    {
        id: 4,
        imageS: ExImg
    },
    {
        id: 5,
        imageS: ExImg
    },
    {
        id: 6,
        imageS: ExImg
    },
    {
        id: 7,
        imageS: ExImg
    },
    {
        id: 8,
        imageS: ExImg
    },
]

const Categories = () => {
    return(
        <div className="container mt-3">
            <h1 className="text-center">Categories</h1>
            <div className="row">
                {list.map(item => {
                    return(
                        <div className="col-6 col-md-4 my-2">
                            <div class="card" key={item.id}>
                                <img src={item.imageS} class="card-img-top" alt={`Categoeries  #${item.id}`} />
                            </div>
                        </div>
                    )
                })} 
            </div>
            
        </div>
    );
};

export default Categories;