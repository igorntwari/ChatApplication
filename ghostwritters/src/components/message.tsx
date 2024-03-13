import dayjs from "dayjs";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
interface message {
  message: string;
  sender: string;
  time: string;
}
function MessageComponent({ message, sender, time }) {
  return (
    <div className="bg-blue-200">
      <p>{message}</p>
      <p>{sender}</p>
      <p>{dayjs(time).fromNow()}</p>
    </div>
  );
}

export default MessageComponent;
