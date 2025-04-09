import { useEffect, useState } from "react";
import ChatItem from "../ChatItem";
import Sidebar from "../Sidebar";
import { GroupsProvider } from "../../contexts/groups";
// import socket from "../config/socket";

export default function HomePage() {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     socket.disconnect().connect();

    //     socket.on("chat:info", (arg) => {
    //         console.log(arg, "<<< ");

    //         setMessages(arg);
    //     });

    //     return () => {
    //         socket.off("chat:info");
    //     };
    // }, []);

    return (
        <GroupsProvider>
            <div className="flex-1 flex flex-row h-screen">
                {/* List Online Users */}
                <Sidebar />

                <div className="flex flex-1 flex-col">
                    <div className="flex sm:items-center justify-between p-3 border-b-2 border-gray-200">
                        <div className="relative flex items-center space-x-4">
                            <div className="flex flex-col leading-tight">
                                <div className="text-xl font-medium mt-1">
                                    <span className="text-center text-gray-700 mr-3">Messages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="chats"
                        className="flex flex-col flex-1 space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                    >
                        {messages.map((m, idx) => (
                            <ChatItem
                                key={`${m.socketId}-${m.sender}-${idx}`}
                                username={m.sender}
                                message={m.message}
                                isMe={localStorage.username === m.sender}
                            />
                        ))}
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            //kirim event ke server, yg berisi chat baru
                            socket.emit("chat:new", newMessage);
                            setNewMessage("")
                        }}
                        className="border-t-2 flex gap-4 border-gray-200 p-4"
                    >
                        <input
                            type="text"
                            placeholder="Write your message!"
                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md p-3"
                            value={newMessage}
                            onChange={(e) => {
                                setNewMessage(e.target.value);
                            }}
                        />
                        <button type="submit">send</button>
                    </form>
                </div>
            </div>
        </GroupsProvider>

    );
}

