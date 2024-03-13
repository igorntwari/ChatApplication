import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Conversation from "../components/Conversation.tsx";
import { getAllUsers } from "../hooks/getAllUsers.ts";

import Chat from "../components/chat.tsx";

export function loader() {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    return redirect("/");
  }
  return null;
}

function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(users)

  const usersConversations = users.map((user, ind) => <Conversation key={ind} id={user._id} name={user.userName} time={user.updatedAt} />)

  return (
    <div className="flex justify-between">
      <div className="text-white bg-indigo-950  px-4 py-10 border-2 border-teal-500">
        <span className="bg-black py-3 px-4 rounded-full">IN</span>
      </div>
      <div className="w-7/12 flex flex-col border-2">
        <div className="bg-teal-100 py-10 px-4 flex justify-center items-center">
          <input
            className="border-2 border-black py-1 rounded-xl pl-2"
            placeholder="search.."
            type="text"
          />
        </div>
        <div className="bg-cyan-600 flex flex-col gap-4 items-center justify-center">
          {usersConversations}
        </div>
      </div>     
      <Chat/>
    </div>
  );
}

export default HomePage;
