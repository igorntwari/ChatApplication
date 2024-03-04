import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function HomePage() {
  const [selectedRoom, setSelectedRoom] = useState("room_1"); // Default value
  const [textAreas, setTextAreas] = useState({
    textArea1: "",
    textArea2: "",
  });
  const [textAreaValues, setTextAreaValues] = useState({ textAreaValue1: '', textAreaValue2: '' });

  const handleTextAreaChange = (event) => {
    const { id, value } = event.target;
    setTextAreas((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };


  const handleClick = () => {
    console.log(textAreas.textArea1);
    console.log(textAreas.textArea2);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const roomClick = () => {
    console.log(`Joined room: ${selectedRoom}`);
  };

  useEffect(() => {
    const socket1 = io("http://localhost:3000");
    const socket2 = io("http://localhost:3000");
   
    const handleConnect = (socket, idKey) => {
       socket.on("connect", () => {
         setTextAreaValues(prevValues => ({
           ...prevValues,
           [idKey]: `Connected with ID: ${socket.id}`,
         }));
       });
    };
   
    handleConnect(socket1, "textAreaValue1");
    handleConnect(socket2, "textAreaValue2");
   
    return () => {
       socket1.disconnect();
       socket2.disconnect();
    };
   }, []);
   

  return (
    <div className="bg-black text-white h-screen px-6">
      <h1 className="text-center py-4 text-3xl uppercase ">
        welcome to night of the ghost writers
      </h1>
      <h1 className="text-center underline text-xl">chats</h1>
      <div className="border-2 border-white rounded-sm flex justify-between">
        <div className="px-4">
          <h1 className="uppercase">YRN:</h1>

          <div className="flex flex-col  gap-4 py-8">
            <label className="uppercase">
              Received message
            </label>
            <textarea
              className="h-20 rounded-lg bg-slate-50 border-none text-black text-left px-2 py-4"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
              id="Receive_1"
              value={textAreaValues.textAreaValue1}
              readOnly 
            ></textarea>
            <label className="uppercase">
              Enter your message:
            </label>
            <textarea
              className="h-28 rounded-lg bg-slate-50 border-none text-black text-left px-2 pt-0"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
              id="textArea1"
              value={textAreas.textArea1}
              onChange={handleTextAreaChange}
            ></textarea>
            <button
              onClick={handleClick}
              className="bg-blue-700 rounded-lg p-2 text-bold hover:bg-cyan-800 my-6"
            >
              Send message
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className=" flex justify-center items-center gap-2">
              <button
                onClick={roomClick}
                className="bg-blue-700 rounded-lg p-2 text-bold hover:bg-cyan-800 my-6"
              >
                Join The Room
              </button>
              <select
                id="room_1"
                value={selectedRoom}
                onChange={handleRoomChange}
                className="rounded-lg text-black"
              >
                <option value="room_1">Room 1</option>
                <option value="room_2">Room 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        {/* this is the end of this chat room and the beginning of the second room  */}

        <div className="px-4">
          <h1 className="uppercase">YRN:</h1>

          <div className="flex flex-col  gap-4 py-8">
            <label id="received_2" className="uppercase">
              Received message
            </label>
            <textarea
              className="h-20 rounded-lg bg-slate-50 border-none text-black text-left px-2 py-4"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
              id="Receive_2"
              value={textAreaValues.textAreaValue2}
              readOnly
            ></textarea>
            <label className="uppercase">
              Enter your message:
            </label>
            <textarea
              className="h-28 rounded-lg bg-slate-50 border-none text-black text-left px-2 pt-0"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
              id="textArea2"
              value={textAreas.textArea2}
              onChange={handleTextAreaChange}
            ></textarea>
            <button
              onClick={handleClick}
              className="bg-blue-700 rounded-lg p-2 text-bold hover:bg-cyan-800 my-6"
            >
              Send message
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className=" flex justify-center items-center gap-2">
              <select
                id="room_2"
                value={selectedRoom}
                onChange={handleRoomChange}
                className="rounded-lg text-black"
              >
                <option value="room_1">Room 1</option>
                <option value="room_2">Room 2</option>
                {/* Add more options as needed */}
              </select>
              <button
                onClick={roomClick}
                className="bg-blue-700 rounded-lg p-2 text-bold hover:bg-cyan-800 my-6"
              >
                Join The Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
