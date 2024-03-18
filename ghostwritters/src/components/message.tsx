import dayjs from "dayjs";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
// import getconversation from "../hooks/getConversation.tsx";
// import { json } from "react-router-dom";
// import Chat from "./chat.tsx";
dayjs.extend(relativeTime);
interface message {
  message: string;
  sender: string;
  time: string;
}
function MessageComponent({ message, sender, time, senderId }): message {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")||'');
 const issender =  senderId === currentUser?._id
  return (
    <div className={`chat ${issender?'chat-end':'chat-start'}`}>
      <div className="chat-header">
        {sender}
        <time className="text-xs opacity-50">{dayjs(time).fromNow()}</time>
      </div>
      <div className="chat-bubble">{message}</div>
      <div className="chat-footer opacity-50">Seen</div>
    </div>
  );
}

export default MessageComponent;
