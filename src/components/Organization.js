import React, { useState } from 'react';

const servicesList = ["Groceries", "Cleaning", "Social", "Depression"];

const Organization = () => {
    const [name, setName] = useState("");
    const [services, setServices] = useState([]);
    const [location, setlocation] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        console.log(name, services, location);

        const url = `https://gdaymatebackend.azurewebsites.net/api/Organisations`;

        fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                name: name,
                services: services,
                location: 'location'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => console.log(resData))
            .catch(err => console.log(err));
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
            <h1 className="text-center my-3">Organization Sign Up</h1>
            <form className="mt-5">
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
                <input type="submit" className="btn btn-primary btn-block" value="Sign Up" onClick={e => onSubmit(e)} />
            </form>
        </div>
    );
};

export default Organization;