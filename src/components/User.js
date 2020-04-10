import React, { useState } from 'react';

const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [location, setlocation] = useState("");
    const [interests] = useState(["reading", "writing"]);
    const [needs] = useState(["groceries", "cleaning"]);

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
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Reading</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Writing</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Knitting</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="needs">Needs</label><br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Groceries</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Cleaning</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Depression</label>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Sign Up" onClick={e => onSubmit(e)} />
            </form>
        </div>
    );
};

export default User;