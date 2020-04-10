import React, { useState } from 'react';

const Organization = () => {
    const [name, setName] = useState("");
    const [services, setServices] = useState(["groceries", "cleaning"]);
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
                    <label htmlFor="location">Services</label>
                    <input type="text" name="location" className="form-control" />
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">1ffjlsjs</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2">2jdskjfls</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                    <label class="form-check-label" for="inlineCheckbox3">3 fslmjdsl(disabled)</label>
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