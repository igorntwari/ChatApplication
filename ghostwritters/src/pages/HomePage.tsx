import React from "react";

function HomePage() {
  return (
    <div className="bg-black text-white h-screen px-6">
      <h1 className="text-center py-4 text-3xl uppercase ">
        welcome to night of the ghost writers
      </h1>
      <h1 className="text-center underline text-xl">chats</h1>
      <div className="border-2 border-white rounded-sm flex justify-between">
        <div className="px-4">
          <h1 className="uppercase">igor ntwali</h1>

          <div className="flex flex-col  gap-4 py-8">
            <label className="uppercase" htmlFor="">
              Received message
            </label>
            <textarea
              className="h-20 rounded-lg bg-slate-50 border-none text-black text-left px-2 py-4"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
            ></textarea>
            <label className="uppercase" htmlFor="">
              Enter your message:
            </label>
            <textarea
              className="h-28 rounded-lg bg-slate-50 border-none text-black text-left px-2 pt-0"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button className="bg-blue-700 rounded-lg p-2 text-bold hover:bg-cyan-800 my-6">
            send message
          </button> 
        </div>
        <div className="px-4">
          <h1 className="uppercase">YRN:</h1>

          <div className="flex flex-col  gap-4 py-8">
            <label className="uppercase" htmlFor="">
              Received message
            </label>
            <textarea
              className="h-20 rounded-lg bg-slate-50 border-none text-black text-left px-2 py-4"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
            ></textarea>
            <label className="uppercase" htmlFor="">
              Enter your message:
            </label>
            <textarea
              className="h-28 rounded-lg bg-slate-50 border-none text-black text-left px-2 pt-0"
              rows={4}
              cols={50}
              style={{ resize: "none" }}
            ></textarea>
          </div>
         <div className = "flex gap-4 justify-center items-center">
         <button className="bg-blue-700 rounded-lg p-2 text-bold hover:bg-cyan-800 my-6">
            send message
          </button> 
          <div className="">
            <label htmlFor="">join Room</label>
            <select name="" id=""></select>
          </div>
           
         </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
