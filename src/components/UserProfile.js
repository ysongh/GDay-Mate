import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";

import defaultLogo from '../img/defaultUser.png';

const UserProfile = () => {
    const [data, setData] = useState({
        "id": 0,
        "firstName": "First Name",
        "lastName": "Last Name",
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
            <div className="bg-primary p-4">
                <img className="default__img rounded-circle m-center" src={defaultLogo} alt="Company Logo" />
                <h1 className="mt-2 mb-4">{data.firstName} {data.lastName}</h1>
            </div>
            <div className="container orgainization__card">
                <div className="card">
                    <div className="card-body">
                        <p><strong>Location</strong>: {data.location}</p>
                        <p>
                            <strong>Interests</strong>: {data.interests.map(i => i + ", ")}
                        </p>
                        <p>
                            <strong>Needs</strong>: {data.needs.map(i => i + ", ")}
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default UserProfile;