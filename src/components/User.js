import React, { useState } from 'react';

const interestsList = ["Reading", "Writing", "Knitting", "Gardening"];
const needsList = ["Groceries", "Cleaning", "Social", "Depression"];

const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [location, setlocation] = useState("");
    const [interests, setInterests] = useState([]);
    const [needs, setNeeds] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            location: location,
            interests: interests,
            needs: needs
        }

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
            <h1 className="text-center my-3">User Sign Up</h1>
            <form className="mt-5">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
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
                <div className="form-group">
                    <label htmlFor="interests">Interests</label><br />
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
                <div className="form-group">
                    <label htmlFor="needs">Needs</label><br />
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
                <input type="submit" className="btn btn-primary btn-block" value="Sign Up" onClick={e => onSubmit(e)} />
            </form>
        </div>
    );
};

export default User;