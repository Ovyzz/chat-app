import React, {useState, useEffect} from "react";
import Logout from "./Logout";
import {database} from "./firebase";
import SendMsg from "./SendMsg";

function Chat() {
    const [msg, setMsg] = useState([]);
    useEffect(() =>{
        database.collection("msg").orderBy("createdAt").onSnapshot(snapshot => {
            setMsg(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div>
            <Logout/>
            {msg.map(({id, text, photoURL, displayName}) =>(
                <div key={id}>
                    <img src={photoURL} alt="Avatar"/>
                    <p>{displayName} : {text}</p>
                </div>
            ))}
            <SendMsg />
        </div>
    );
}

export default Chat;