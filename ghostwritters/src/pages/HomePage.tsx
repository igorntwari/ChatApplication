import React from "react";

function HomePage() {
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
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">IN</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Ntwali Igor</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">KN</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">kevin</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">EN</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Eligrand</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">YN</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Yves</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">AI</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Artiste</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">LK</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Lion</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
          <div className="flex gap-4 items-center  text-white border-b-[2px] border-black hover:bg-white hover:text-black">
            <span className="bg-black py-3 m-4 px-4 rounded-full">YR</span>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Yrn</h1>
              <p className="font-light">hello thi was you first message</p>
            </div>
            <span>1:55 AM</span>
          </div>
        </div>
      </div>
      <div className="w-8/12 bg-white text-black gap-2 flex flex-col">
        <div className=" flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Igor Ntwali</h1>
          <span>Active Now</span>
          <hr className="h-[1px] bg-black w-[45rem]" />
        </div>

        <div className="bg-slate-100 flex flex-col items-center h-[30rem]">
          <p className="py-2">Today</p>
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
    </div>
  );
}

export default HomePage;
