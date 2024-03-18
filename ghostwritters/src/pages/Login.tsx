import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api.ts";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });
  async function handlesubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const currentUser = await response.json();
      if (currentUser.error) {
        throw new Error("currentUser.error");
      }
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      return navigate("/");
    } catch (error) {
      alert("stupiddddddddddd");
      console.log("error: ", error.message);
    }
  }
  return (
    <div className="w-full h-screen grid place-content-center bg-black">
      <div className="bg-white text-black flex flex-col gap-20 p-28 border-2 rounded-xl">
        <h1 className="font-extralight text-7xl text-center">Login</h1>
        <form className="flex flex-col gap-8 px-10" onSubmit={handlesubmit}>
          <input
            className="p-4 rounded-2xl text-white bg-black"
            type="text"
            placeholder="username"
            name="userName"
            value={userInfo.userName}
            onChange={(e) => {
              setUserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <input
            className="p-4 rounded-2xl text-white bg-black"
            type="password"
            placeholder="password"
            name="password"
            value={userInfo.password}
            onChange={(e) => {
              setUserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <button className="py-2  rounded-2xl text-white bg-black">
            Send
          </button>
        </form>
        <div className="flex gap-2 justify-center font-medium">
          <Link className="text-blue-700 underline" to="/signup">
            Create Account
          </Link>
          <h1>Forgot PassWord?</h1>
        </div>
      </div>
    </div>
  );
}
