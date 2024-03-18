const React = require("react");
const { createContext, useEffect, useState } = React;
const { io } = require("socket.io-client");

export const SocketContext = createContext();

const currentUser = JSON.parse(localStorage.getItem('currentUser')||'')

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineuser, setOnlineuser] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      query: {
        userId: currentUser._id,
      },
    });
    setSocket(socket);
    return () => socket.close();
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineuser }}>
      {children}
    </SocketContext.Provider>
  );
};
