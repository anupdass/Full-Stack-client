import React, { useContext } from 'react';

import firebase from "firebase/app";
import firebaseConfig from "./firebaseconfig"

import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//     firebase.initializeApp({});
//  }

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const [loginUser,setloginUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignin =()=>{
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
               
                var user = result.user;
                setloginUser(result.user)
                history.replace(from)
            }).catch((error) => {
             
                const errorMessage = error.message;
            
            });
    }
    return (
        <div className="d-flex mt-5 justify-content-center">
            <button className="btn btn-primary text-white"  onClick={handleSignin}>Continue With Google</button>
        </div>
    );
};

export default Login;