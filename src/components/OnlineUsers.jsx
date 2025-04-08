import { useEffect, useState } from "react";
// import socket from "../config/socket";

export default function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState([]);

  // useEffect(() => {
  //   socket.on("online:users", (arg) => {
  //     setOnlineUsers(arg);
  //   });

  //   return () => {
  //     socket.off("online:users");
  //   };
  // }, []);

  return (
    <div className="w-64 md:w-96 border-r-2 border-gray-200">
      <div className="border-b-2 border-gray-200 p-3">
        <h1 className="text-2xl">Online Users</h1>
      </div>
      <ul>
        {onlineUsers.map((ou) => (
          <li key={ou.socketId} className="flex items-center px-3 h-16 border-b-2">
            <span className="bg-green-600 mr-2 rounded-lg w-4 h-4"></span> {ou.socketId} {ou.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
