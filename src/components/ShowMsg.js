import React from "react";

function ShowMsg({msg}) {
    return (
        msg.map(({id, text, photoURL, displayName}) =>(
                <div key={id}>
                    <img src={photoURL} alt="Avatar"/>
                    <p>{displayName} : {text}</p>
                </div>
            ))
    );
}

export default ShowMsg;