import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Spinner from './common/Spinner';

const interestsList = ["Adventure", "Bars", "Biking", "Concerts", "Dancing", "Events", "Food", "Games", "Hiking",
                       "Indoor", "Karaoke", "Movies", "Music", "Museums", "Night Life", "Outdoor", "Party", "Photography", "Social", "Sports", "Theater"]
const needsList = ["Cleaning", "Cooking", "Delivery", "Depression", "Groceries", "Medicine", "Social", "Translate", "Transportation"];

const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [location, setlocation] = useState("");
    const [interests, setInterests] = useState([]);
    const [needs, setNeeds] = useState([]);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);
        
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            location: location,
            interests: interests,
            needs: needs
        }

        const url = `https://gdaymatebackend.azurewebsites.net/api/Users`;

        fetch(url, {
                method: 'POST',
                body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => {
                history.push("/user/profile/" + resData.id);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });

        console.log(newUser);
    }

    const handleCheckBoxInterests = e => {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (interests.indexOf(newSelection) > -1) {
            newSelectionArray = interests.filter(s => s !== newSelection);
        } else {
            newSelectionArray = [...interests, newSelection];
        }

        setInterests(newSelectionArray);
    }

    const handleCheckBoxNeeds = e => {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (needs.indexOf(newSelection) > -1) {
            newSelectionArray = needs.filter(s => s !== newSelection);
        } else {
            newSelectionArray = [...needs, newSelection];
        }

        setNeeds(newSelectionArray);
    }
    
    return(
        <div className="container">
            <form className="my-5 p-4 bg-light">
                <h1 className="mb-4">User Sign Up</h1>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={location} 
                        onChange={(e) => setlocation(e.target.value)}/>
                </div>
                <div className="form-group ">
                    <label htmlFor="interests">Interests</label><br />
                    <div className="checkbox-group">
                        {interestsList.map(interest => {
                            return(
                                <div className="form-check form-check-inline" key={interest}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={interest}
                                        value={interest}
                                        onChange={e => handleCheckBoxInterests(e)}/>
                                    <label className="form-check-label" htmlFor={interest}>{interest}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="needs">Needs</label><br />
                    <div className="checkbox-group">
                        {needsList.map(need => {
                            return(
                                <div className="form-check form-check-inline" key={need}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={need}
                                        value={need}
                                        onChange={e => handleCheckBoxNeeds(e)}/>
                                    <label className="form-check-label" htmlFor={need}>{need}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {loading ? <Spinner /> : <input type="submit" className="btn btn-info btn-lg px-5 mt-3" value="Sign Up" onClick={e => onSubmit(e)} />}
            </form>
        </div>
    );
};

export default User;