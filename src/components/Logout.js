import React from "react";
import {authentication} from "./firebase";

function Logout() {
    function signout() {
        authentication.signOut();
    }

    return (
        <div>
            <button onClick={signout}>Logout</button>
        </div>
    )
}

export default Logout;