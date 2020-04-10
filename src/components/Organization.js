import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Spinner from './common/Spinner';

const servicesList = ["Groceries", "Cleaning", "Social", "Depression"];

const Organization = () => {
    const [name, setName] = useState("");
    const [services, setServices] = useState([]);
    const [location, setlocation] = useState("");
    const [loading, setLoading] = useState(false);

    // for redirecting
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);

        const url = `https://gdaymatebackend.azurewebsites.net/api/Organisations`;

        fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                name: name,
                services: services,
                location: location
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => {
                history.push("/organization/profile/" + resData.id);
            })
            .catch(err => {
                console.log(err);
            });

        setLoading(false);
    }

    const handleCheckBoxservices = e => {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (services.indexOf(newSelection) > -1) {
            newSelectionArray = services.filter(s => s !== newSelection);
        } else {
            newSelectionArray = [...services, newSelection];
        }

        setServices(newSelectionArray);
    }
    
    return(
        <div className="container">
            <form className="mt-5 p-4 bg-light">
                <h1 className="mb-4">Organization Sign Up</h1>
                <div className="form-group">
                    <label htmlFor="name">Name of Organization</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="services">Services</label><br />
                    {servicesList.map(service => {
                        return(
                            <div className="form-check form-check-inline" key={service}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={service}
                                    value={service}
                                    onChange={e => handleCheckBoxservices(e)}/>
                                <label className="form-check-label" htmlFor={service}>{service}</label>
                            </div>
                        )
                    })}
                </div>
                
                <div className="form-group">
                    <label htmlFor="description">Location</label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        value={location} 
                        onChange={(e) => setlocation(e.target.value)}/>
                </div>
                {loading ? <Spinner /> : <input type="submit" className="btn btn-primary btn-block" value="Sign Up" onClick={e => onSubmit(e)} />}
            </form>
        </div>
    );
};

export default Organization;