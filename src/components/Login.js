import React from "react";
import firebase from "firebase/compat";
import {authentication} from "./firebase";

function Login() {
    function login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        authentication.signInWithPopup(provider);
    }

    return (
        <div>
            <button onClick={login}>LOGIN</button>
        </div>
    );
}

export default Login;