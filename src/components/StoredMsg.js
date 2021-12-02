import React, {useEffect, useState} from "react";
import {database} from "./firebase";

function StoredMsg() {
    const [msg, setMsg] = useState([]);
    useEffect(() =>{
        database.collection("msg").orderBy("createdAt").onSnapshot(snapshot => {
            setMsg(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        msg.map(({id, text, photoURL, displayName}) =>(
            <div key={id}>
                <img src={photoURL} alt="Avatar"/>
                <p>{displayName} : {text}</p>
            </div>
        ))
    );
}

export default StoredMsg;