import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import { Link } from 'react-router-dom';

import defaultLogo from '../img/defaultCompanyLogo.png';

const OrganizationProfile = () => {
    const [data, setData] = useState({
        "id": 0,
        "name": "Company Name",
        "location": "Location",
        "services": []
    })

    const [usersData, setUsersData] = useState([]);

    const {id} =  useParams();

    useEffect(() => {
        const url = `https://gdaymatebackend.azurewebsites.net/api/Organisations/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(resData => {
                setData(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const url = `https://gdaymatebackend.azurewebsites.net/api/Organisations/${id}/matches`;

        fetch(url)
            .then(res => res.json())
            .then(resData => {
                setUsersData(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return(
        <>
            <div className="bg-primary p-4">
                <img className="default__img rounded-circle m-center" src={defaultLogo} alt="Company Logo" />
                <h1 className="mt-2">{data.name}</h1>
                <p>
                    {data.services.map(i => i + ", ")}
                </p>
                <p className="mb-4">{data.location}</p>
            </div>
            <div className="container orgainization__card">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Individuals who might need your help</h2>
                        {usersData.length > 0 ? (
                            usersData.map(user => {
                                return (
                                    <Link key={user.id} to={`/user/profile/${user.id}`}>
                                        <p >&#9786; {user.firstName} {user.lastName}</p>
                                    </Link>
                                    
                                )
                            })
                        ) : <p>No match yet!</p>}
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default OrganizationProfile;