import React from 'react';
import {GoogleLogout} from 'react-google-login';
const clientId = '976297396353-3as58f3ss3h8ahim5vnjihq7ajpe632h.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };


    return (
        <div>
            <GoogleLogout
            clientId = {clientId}
            buttonText = "Logout"
            onLogoutSuccess = {onSuccess}
           ></GoogleLogout>
            </div>
    );

    
}

export default Logout;