import { useContext, useEffect, useState, useRef } from "react";
import ChatItem from "../ChatItem";
import Sidebar from "../Sidebar";
import { GlobalContext } from "../../contexts/global";
import socket from "../../config/socket";
import axiosInstance from "../../helpers/axiosInstance";

export default function HomePage() {
    const { messages, fetchMessages, createMessage, groupId } = useContext(GlobalContext)
    const [newMessage, setNewMessage] = useState("");
    const [summaryPopup, setSummaryPopup] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef(null);

    useEffect(() => {
        socket.on("mySocketId", (arg) => {
            console.log(`socketId:`, arg);
        });

        socket.on("handShakeAuth", (arg) => {
            console.log(`handShakeAuth:`, arg);
        });

        // Listen for new messages
        socket.on('new_message', (fromSrv) => {
            // push new message to messages array
            console.log(`${groupId}`)
            fetchMessages(groupId)
        });

        if (chatRef.current) {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: "smooth"
            })
        }
        return () => {
            socket.off("mySocketId");
            socket.off("handShakeAuth");
            socket.off("new_message");
        }
    }, [groupId, messages])

    const handleSummerize = async () => {
        setIsLoading(true);
        try {
            const result = await axiosInstance({
                method: "GET",
                url: `/summerize-AI/${groupId}`,
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                }
            })
            console.log(result.data.summary)
            setSummaryPopup(result.data.summary);
            setShowPopup(true);
        } catch (err) {
            console.log(err);
            // 
        } finally {
            setIsLoading(false);
        }
    }

    return (
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
                    ref={chatRef}
                    className="flex flex-col flex-1 space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    {messages.map((m, idx) => (
                        <ChatItem
                            key={`${idx}-${m.SenderId}`}
                            username={m.User.username}
                            message={m.message}
                            isMe={m.SenderId == localStorage.userId}
                        />
                    ))}
                </div>
                <button
                    onClick={handleSummerize}
                    disabled={isLoading}
                    className={`px-4 py-2 ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded transition flex items-center justify-center`}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : (
                        'Summarize'
                    )}
                </button>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        //kirim event ke server, yg berisi chat baru
                        // socket.emit("chat:new", newMessage);
                        setNewMessage("")
                        createMessage(groupId, newMessage)
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
                {showPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Ringkasan AI</h2>
                            <textarea
                                className="w-full h-40 p-3 border rounded-md text-gray-700 bg-gray-100 resize-none"
                                value={summaryPopup}
                                readOnly
                            />
                            <div className="mt-4 flex justify-end space-x-2">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(summaryPopup);
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                >
                                    Salin
                                </button>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}