import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import { Link } from 'react-router-dom';

import defaultLogo from '../img/defaultUser.png';

const UserProfile = () => {
    const [data, setData] = useState({
        "id": 0,
        "firstName": "First",
        "lastName": "Last",
        "location": "Location",
        "interests": [],
        "needs": []
    })

    const {id} =  useParams();

    useEffect(() => {
        const url = `https://gdaymatebackend.azurewebsites.net/api/Users/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(resData => {
                setData(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return(
        <>
            <div className="bg-s-color p-4">
                <img className="default__img rounded-circle m-center" src={defaultLogo} alt="Company Logo" />
                <h1 className="mt-2 mb-4">{data.firstName} {data.lastName}</h1>
            </div>
            <div className="container orgainization__card">
                <div className="card mb-5">
                    <div className="card-body">
                        <p><strong>Location</strong>: {data.location}</p>
                        <p>
                            <strong>Interests</strong>: {data.interests.map(i => i + ", ")}
                        </p>
                        <p>
                            <strong>Needs</strong>: {data.needs.map(i => i + ", ")}
                        </p>
                        <Link className="btn btn-info" to="/category">See recommendation</Link>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default UserProfile;