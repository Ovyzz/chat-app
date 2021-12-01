import React, {useState, useEffect} from "react";
import Logout from "./Logout";
import {database} from "./firebase";
import SendMsg from "./SendMsg";
import ShowMsg from "./ShowMsg";

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
            <ShowMsg msg={msg}/>
            <SendMsg/>
        </div>
    );
}

export default Chat;