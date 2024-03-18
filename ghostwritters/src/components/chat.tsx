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
    localStorage.getItem("currentUser") || "[]"
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

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
  const DisplayedSender = conversation?.participants.find(
    (user) => {
      return user.userName !== currentUser.userName
    }
  );

  return selectedConversation ? (
    <div className="w-8/12 h-screen bg-white text-black flex flex-col">
      <div className=" flex flex-col gap-2 px-4">
        <h1 className="font-bold text-2xl"> {DisplayedSender?.userName} </h1>
        <span>Active Now</span>
      </div>
      <div className="bg-black overflow-scroll flex flex-col h-[40rem]">
        {messages}
      </div>
        <form method="post" className="flex justify-center items-center" onSubmit={handleSubmit}>
          <textarea
            className="h-full w-full border-4 border-white pl-2 pt-2 resize-none text-white"
            placeholder="Enter your Message here....."
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
            cols={1}
            rows={1}
          />
          <button
            className="bg-black py-4  px-4 font-bold text-2xl text-white"
            type="submit"
          >
            SEND
          </button>
        </form>
    </div>
  ) : (
    <div className="flex flex-col gap-4 items-center bg-black w-[45rem] py-10 font-bold text-lg">
      <h1>no selected conversation</h1>
      <h1>Tap to any conversation to start char</h1>
    </div>
  );
}
