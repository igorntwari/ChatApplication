import React from "react";
import dayjs from "dayjs";
import { useConvContext } from "../context/ConvContext.tsx";

interface Props{
    id: string
    name: string
    time: string
}
function Conversation({id,name, time}:Props) {
  const {selectedConversation, setSelectedConversation} = useConvContext()

  const isSelected = selectedConversation === id

  return (
    <div onClick={()=> setSelectedConversation(id) } className={`${isSelected ? 'bg-red-500' : ''} flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black`}>
      <span className="bg-black py-3 m-4 px-4 rounded-full">IN</span>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">{name}</h1>
      </div>
      <span>{dayjs(time).hour()}:{dayjs(time).minute()}</span>
    </div>
  );
}

export default Conversation;
