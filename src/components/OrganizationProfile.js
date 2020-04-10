import React from 'react';

import defaultLogo from '../img/defaultCompanyLogo.png';

const OrganizationProfile = () => {
    return(
        <>
            <div className="bg-primary p-4">
                <img className="w-25 rounded-circle m-center" src={defaultLogo} alt="Company Logo" />
                <h1 className="mt-2">Company Name</h1>
                <p>Groceries, Cleaning</p>
                <p className="mb-4">Location</p>
            </div>
            <div className="container orgainization__card">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title mb-4">Individuals who might need your help</h2>
                        <p>&#9786; Bob Park</p>
                        <p>&#9786; Joe Doe</p>
                        <p>&#9786; Rob Car</p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default OrganizationProfile;