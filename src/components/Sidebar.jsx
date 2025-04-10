import { useContext, useEffect, useState } from "react";
import axiosInstance from "../helpers/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { GlobalContext } from "../contexts/global";
import socket from "../config/socket";
import './Sidebar.css'
// import socket from "../config/socket";

export default function Sidebar() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const navigate = useNavigate()

  const { data, fetchData, setGroupIdHandler, groupId } = useContext(GlobalContext)
  const { messages, fetchMessages } = useContext(GlobalContext)

  // useEffect(() => {
  //   socket.on("online:users", (arg) => {
  //     setOnlineUsers(arg);
  //   });

  //   return () => {
  //     socket.off("online:users");
  //   };
  // }, []);

  useEffect(() => {
    fetchData()
  }, [])


  const [showDialog, setShowDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [code, setCode] = useState("");

  // Dialog open/close handlers
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const openJoinDialog = () => setShowJoinDialog(true);
  const closeJoinDialog = () => setShowJoinDialog(false);

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
      fetchData()

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

  const handleJoin = async (e) => {
    e.preventDefault();

    try {

      const result = await axiosInstance({
        method: "GET",
        url: `/groups/join/${code}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Berhasil bergabung ke Group`,
      })
      setCode("");
      fetchData()

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
    closeJoinDialog();
  }

  return (
    <div className="w-64 md:w-96 border-r-2 border-gray-200 flex flex-col h-full">
      <div className="border-b-2 border-gray-200 p-3 flex flex-row justify-between">
        <h1 className="text-2xl">Chat Grup</h1>
        <div className="group-button-controller gap-2 flex flex-row">
          <button onClick={openDialog} className="px-2 py-2 bg bg-blue-400 text-white rounded">+ Grup Chat</button>
          <button className="px-2 py-2 bg bg-green-400 text-white rounded" onClick={openJoinDialog}>Join Group</button>
        </div>

      </div>

      <div className="overflow-y-auto flex-1">
        <ul>
          {data.map((group) => {
            return <li onClick={() => {
              fetchMessages(group.Group.id)
              socket.emit('join_group', group.Group.id);
              setGroupIdHandler(group.Group.id)
              // Swal.fire("Success", `Bergabung ke grup ${groupId}`, "success")

            }} className="flex items-center px-3 h-16 border-b-2 list-group" key={group.Group.id}>
              <span className="bg-green-600 mr-2 rounded-lg w-4 h-4"></span>{`${group.Group.name} - ${group.Group.inviteCode}`}
            </li>
          })}
        </ul>
      </div>

      <button onClick={() => {
        navigate('/login')
        Swal.fire("Success", "Logout berhasil", "success")
        localStorage.removeItem("access_token")
        localStorage.removeItem("userId")
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

      {/* Join Group Dialog */}
      {showJoinDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Join a new Group</h2>
              <button
                onClick={closeJoinDialog}
                className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <form onSubmit={handleJoin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupName">
                  Group Code
                </label>
                <input
                  id="groupName"
                  type="text"
                  placeholder="Enter group code"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeJoinDialog}
                  className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Join Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </div>
  );
}
