import axios from "axios";
import { createContext, useState } from "react";
import axiosInstance from "../helpers/axiosInstance";

export const GlobalContext = createContext({
    data: [],
    messages: [],
    groupId: 0
});

export function GlobalProvider(props) {

    const [groups, setGroups] = useState([]);
    async function fetchData() {
        const result = await axiosInstance({
            method: "GET",
            url: "/groups",
            headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
            }
        })
        const response = result.data
        setGroups(response);
    }

    // groupId
    const [groupId, setGroupId] = useState(null)
    function setGroupIdHandler(id) {
        setGroupId(id)
    }

    // messages
    const [messages, setMessages] = useState([]);
    async function fetchMessages(id) {
        const result = await axiosInstance({
            method: "GET",
            url: `/groups/${id}`,
            headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
            }
        })
        const response = result.data
        setMessages(response);
    }

    // create mssage
    async function createMessage(id, message) {
        await axiosInstance({
            method: "POST",
            url: `/groups/${id}`,
            data: {
                message: message
            },
            headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
            }
        })
    }


    return (
        <GlobalContext.Provider
            value={
                {
                    data: groups,
                    fetchData,
                    messages: messages,
                    fetchMessages,
                    createMessage,
                    groupId,
                    setGroupIdHandler
                }
            }
        >
            {props.children}
        </GlobalContext.Provider >
    );
}
