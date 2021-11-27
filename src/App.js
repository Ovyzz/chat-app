import React from "react";
import './App.css';
import Login from "./components/Login";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {authentication} from "./components/firebase";

function App() {
    const [user] = useAuthState(authentication);

    return (
        <>
            {user ? <Chat/> : <Login/>}
        </>
    );
}

export default App;
