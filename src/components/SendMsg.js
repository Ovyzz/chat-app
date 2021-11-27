import React, {useState} from "react";
import {authentication, database} from "./firebase";
import firebase from "firebase/compat";

function SendMsg() {
    const [msg, setMsg] = useState('');

    async function sendMsg(e) {
        e.preventDefault();
        const {uid, photoURL, displayName} = authentication.currentUser;

        await database.collection('msg').add({
            text: msg,
            photoURL,
            displayName,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setMsg('');
    }

    return (
        <div>
            <form onSubmit={sendMsg}>
                <input placeholder="Type a message" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SendMsg;