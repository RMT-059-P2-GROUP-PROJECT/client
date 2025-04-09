import axios from "axios";
import { createContext, useState } from "react";
import axiosInstance from "../helpers/axiosInstance";

export const GlobalContext = createContext({
    data: [],
    messages: []
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


    return (
        <GlobalContext.Provider
            value={
                {
                    data: groups,
                    fetchData,
                    messages: messages,
                    fetchMessages,
                }
            }
        >
            {props.children}
        </GlobalContext.Provider >
    );
}
