import React, { FormEvent, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export function loader(){
    const currentUser = localStorage.getItem('currentUser')
    if(currentUser){
        return redirect('/')
    }
    return null
}

export default function Signup() {
    const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });

  async function handlesubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
        await fetch("http://localhost:3000/auth/signup", {
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
    <div className="w-full h-screen grid place-content-center bg-gray-400">
      <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
        <input
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
        <button>Send</button>
      </form>
    </div>
  );
}
