import { useEffect, useState } from "react";
import axiosInstance from "../helpers/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
// import socket from "../config/socket";

export default function Sidebar() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const navigate = useNavigate()

  // useEffect(() => {
  //   socket.on("online:users", (arg) => {
  //     setOnlineUsers(arg);
  //   });

  //   return () => {
  //     socket.off("online:users");
  //   };
  // }, []);


  const [showDialog, setShowDialog] = useState(false);
  const [groupName, setGroupName] = useState("");

  // Dialog open/close handlers
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axiosInstance({
        method: "POST",
        url: "/groups",
        data: {
          name: groupName,
        },
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Grup ${groupName} berhasil dibuat`,
      })
      setGroupName("");

    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Terjadi kesalahan. Silakan coba lagi`,
        })
      }
    }
    closeDialog();
  };

  return (
    <div className="w-64 md:w-96 border-r-2 border-gray-200 flex flex-col h-full">
      <div className="border-b-2 border-gray-200 p-3 flex flex-row justify-between">
        <h1 className="text-2xl">Chat Grup</h1>
        <button onClick={openDialog} className="px-2 py-2 bg bg-blue-400 text-white rounded">+ Grup Chat</button>
      </div>

      <div className="overflow-y-auto flex-1">
        <ul>
          {/* {onlineUsers.map((ou) => (
            <li key={ou.socketId} className="flex items-center px-3 h-16 border-b-2">
              <span className="bg-green-600 mr-2 rounded-lg w-4 h-4"></span> {ou.socketId} {ou.username}
            </li>
          ))} */}
          <li className="flex items-center px-3 h-16 border-b-2">
            <span className="bg-green-600 mr-2 rounded-lg w-4 h-4"></span> Bahas Cuan
          </li>
          <li className="flex items-center px-3 h-16 border-b-2">
            <span className="bg-green-600 mr-2 rounded-lg w-4 h-4"></span> Indonesia Gelap (?)
          </li>
          {/* Add more mock groups to test scrolling */}
          {Array.from({ length: 20 }).map((_, index) => (
            <li key={index} className="flex items-center px-3 h-16 border-b-2">
              <span className="bg-green-600 mr-2 rounded-lg w-4 h-4"></span> Test Group {index + 1}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => {
        navigate('/login')
        Swal.fire("Success", "Logout berhasil", "success")
        localStorage.removeItem("access_token")
      }} className="px-2 py-2 bg-red-500 text-white font-bold m-4 rounded">Logout</button>

      {/* Group Creation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create New Group</h2>
              <button
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupName">
                  Group Name
                </label>
                <input
                  id="groupName"
                  type="text"
                  placeholder="Enter group name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </div>
  );
}
