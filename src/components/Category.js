import React from 'react';

import ExImg from "../img/example1.jpeg";

const list = [
    {
        id: 1,
        title: "Push Up",
        description: "This is a really helpful and fun. Great way to feel happy",
        url: "https://mymorningroutine.com/",
        img: "",
        text: "Life balance",
        ResourceType: "Article",
    },
    {
        id:2,
        title: "Morning Routing",
        description: "This is a really helpful and fun. Great way to feel happy",
        url: "https://mymorningroutine.com/",
        img: "",
        text: "Life balance",
        ResourceType: "Article",
    },
    {
        id:2,
        title: "Jumping",
        description: "This is a really helpful and fun. Great way to feel happy",
        url: "https://mymorningroutine.com/",
        img: "",
        text: "Life balance",
        ResourceType: "Article",
    },
];

const Category = () => {
    return(
        <div className="container my-4">
            <h1 className="text-center">List</h1>
            <div className="row mt-5">
                {list.map(item => {
                    return(
                              <div key={item.id}>
                                <div className="row justify-content-center">
                                  <div className="col-5 col-sm-5 col-md-5">
                                    <div className="">
                                      <img
                                        src={ExImg}
                                        className="img-thumbnail thumbnail-review"
                                        alt="details"
                                      />
                                    </div>
                                  </div>
                
                                  <div className="col-7 col-sm-7 col-md-7">
                                    <h2 className="date">
                                      <a to={`#`} className="author-name">
                                        {item.title}
                                      </a>{" "}
                                    </h2>
                
                                    <div className="comment">
                                      <p>{item.description}</p>
                                    </div>

                                  </div>
                                </div>
                                <hr />
                              </div>
                    )
                })} 
            </div>
        </div>
    );
};

export default Category;