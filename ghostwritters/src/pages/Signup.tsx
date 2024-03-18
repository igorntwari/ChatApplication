import React, { FormEvent, useState } from "react";
import { redirect, useNavigate,Link } from "react-router-dom";
import { api } from "../api.ts";

export function loader(){
    const currentUser = localStorage.getItem('currentUser')
    if(currentUser){
        return redirect('/')
    }
    return null
}

export default function Signup() {
    const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({ userName: "", password: "", confirmPassword:'' });

  async function handlesubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(userInfo.password !== userInfo.confirmPassword){
      alert('password dont match')
      return
    }
    try {
        await fetch(`${api}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
    
        return navigate('/login')
        
    } catch (error) {
        console.log('error: ', error)
    }

  }
  return (
    <div className="w-full h-screen grid place-content-center bg-black">
    <div className="bg-white text-black flex flex-col gap-20 p-28 border-2 rounded-xl">
      <h1 className="font-extralight text-7xl text-center">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
        <input
         className="p-2 rounded-xl text-white bg-black"
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
         className="p-2 rounded-xl text-white bg-black"
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
         <input
         className="p-2 rounded-xl text-white bg-black"
          type="password"
          placeholder="confirm-password"
          name="confirmPassword"
          value={userInfo.confirmPassword}
          onChange={(e) => {
            setUserInfo((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
       <button className="py-2  rounded-2xl text-white bg-black font-black text-xl">
            Sign Up
          </button>
      </form>
      <div className="flex gap-2 justify-center font-medium">
          <h1>Already have an Account?</h1>
          <Link className="text-blue-700 underline" to="/login">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
