import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                console.log('ERROR', error);
            });
    }
    return (
        <div className="full-container">
            <div className="half-container">
                <button onClick={handleGoogleSignIn}>GOOGLE SIGN IN</button>
                <button className="my-3" onClick={handleGoogleSignIn}>GOOGLE SIGN IN</button>
                <button onClick={handleGoogleSignIn}>GOOGLE SIGN IN</button>
            </div>
        </div>
    );
};

export default Login;