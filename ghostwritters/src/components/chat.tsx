import React, { useEffect, useState } from "react";
import { useConvContext } from "../context/ConvContext.tsx";
import getconversation from "../hooks/getConversation.tsx";
import MessageComponent from "./message.tsx";

export default function Chat() {
  const [conversation, setConversation] = useState(null);
 
  const { selectedConversation, setSelectedConversation } = useConvContext();
  console.log(conversation)
  useEffect(() => {
      if(selectedConversation){
          
        getconversation(selectedConversation)
        .then((data) => {
            setConversation(data);
        })
        .catch((error) => console.log(error));
    }
  },[selectedConversation]);
  const messages = conversation?.messages.map((message,index)=><MessageComponent key={index} message={message.message} sender={message.sender} time={message.createdAt}/> )
  return selectedConversation ? (
    <div className="w-8/12 bg-white text-black gap-2 flex flex-col">
      <div className=" flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Igor Ntwali</h1>
        <span>Active Now</span>
        <hr className="h-[1px] bg-black w-[45rem]" />
      </div>

      <div className="bg-slate-100 flex flex-col items-center h-[30rem]">
      {messages}

     </div>
      <div className="bg-slate-800 flex justify-between items-center p-4 h-14">
        <textarea
          className="h-10 w-[30rem] resize-none text-black"
          name=""
          id=""
          cols={1}
          rows={1}
        ></textarea>
        <span className="bg-black py-3 m-4 px-4 rounded-full text-white">
          SEND
        </span>
      </div>
    </div>
  ) : (
    <div>no convo selected</div>
  );
}
