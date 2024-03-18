import React, { useContext, useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import Conversation from "../components/Conversation.tsx";
import { getAllUsers } from "../hooks/getAllUsers.ts";

import Chat from "../components/chat.tsx";
import { SocketContext } from "../context/SocketContext.jsx";

export function loader() {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    return redirect("/login");
  }
  return JSON.parse(currentUser);
}

function HomePage() {
  const { socket } = useContext(SocketContext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, [socket]);

  const usersConversations = users.map((user, ind) => (
    <Conversation
    key={ind}
    id={user._id}
    name={user.userName}
    time={user.updatedAt}
    />
    ));


  return (
    <div className="flex h-screen">
      <div className="text-white bg-black  px-4 py-10 w-64">
        <span className="text-white flex justify-center font-bold text-xl border-2 border-white rounded-full bg-cyan-950">
          {currentUser?.userName}
        </span>
      </div>
      <div className="w-[25rem] flex flex-col border border-black">
        <div className="bg-white py-10 px-4 flex flex-col gap-6 justify-start">
          <label className="text-2xl text-black font-bold">Chats</label>
          <input
            className="border-2 border-black py-1 rounded-xl pl-2 text-white"
            placeholder="search..."
            type="text"
          />
        </div>
        <div className="bg-blue-950 flex flex-col justify-start">
          {usersConversations}
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default HomePage;
