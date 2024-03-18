import React, { useEffect, useState } from "react";
import { useConvContext } from "../context/ConvContext.tsx";
import getconversation from "../hooks/getConversation.tsx";
import MessageComponent from "./message.tsx";
import { api } from "../api.ts";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext.jsx";

export default function Chat() {
  const [conversation, setConversation] = useState(null);
  const [sendMessage, setSendMessage] = useState("");
  const { selectedConversation, setSelectedConversation } = useConvContext();
  const { socket } = useContext(SocketContext);


  const currentUserId = JSON.parse(
    localStorage.getItem("currentUser") || ""
  )._id;

  useEffect(() => {
    socket?.on("newMessage", (new_Message) => {
      setConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, new_Message],
      }));
    });
    if (selectedConversation) {
      getconversation(selectedConversation)
        .then((data) => {
          setConversation(data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedConversation, socket]);

  const messages = conversation?.messages.map((message, index) => (
    <MessageComponent
      key={index}
      message={message.message}
      sender={
        conversation.participants.find((part) => part._id === message.senderId)
          ?.userName
      }
      senderId={message.senderId}
      time={message.createdAt}
    />
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}/messages/${selectedConversation}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: sendMessage, sender: currentUserId }),
      });
      if (response.ok) {
        const newMessage = await response.json();
        setConversation((prev) => {
          return { ...prev, messages: [...prev.messages, newMessage] };
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return selectedConversation ? (
    <div className="w-8/12 bg-white text-black gap-2 flex flex-col">
      <div className=" flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Igor Ntwali</h1>
        <span>Active Now</span>
        <hr className="h-[1px] bg-black w-[45rem]" />
      </div>

      <div className="bg-green-600 overflow-scroll flex flex-col h-[30rem]">
        {messages}
      </div>
      <div className="bg-slate-800 flex justify-between items-center p-4 h-14">
        <form method="post" onSubmit={handleSubmit}>
          <textarea
            className="h-10 w-[30rem] resize-none text-black"
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
            cols={1}
            rows={1}
          />
          <button
            className="bg-black py-3 m-4 px-4 rounded-full text-white"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div>no convo selected</div>
  );
}
