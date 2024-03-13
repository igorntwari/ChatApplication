import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });

  async function handlesubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const currentUser = await response.json();
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      return navigate("/");
    } catch (error) {
      console.log("error: ", error);
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
