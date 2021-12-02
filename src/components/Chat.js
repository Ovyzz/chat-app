import React from "react";
import Logout from "./Logout";
import SendMsg from "./SendMsg";
import StoredMsg from "./StoredMsg";

function Chat() {
    return (
        <div>
            <Logout/>
            <StoredMsg />
            <SendMsg/>
        </div>
    );
}

export default Chat;