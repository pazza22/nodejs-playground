/* global gapi */
import React from 'react';

class GoogleAuth extends React.Component {
    render() {
        return <div>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            <a href="#" onClick={this.signOut}>Sign out</a>
        </div>
    }

    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
}

export default GoogleAuth;