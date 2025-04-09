import axios from "axios";
import { createContext, useState } from "react";
import axiosInstance from "../helpers/axiosInstance";

export const GroupsContext = createContext({
    data: [],
    setData: () => { },
});

export function GroupsProvider(props) {
    console.log(props);
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
        console.log(response)
        setGroups(response);
    }

    // async function createTodo() {

    // }

    return (
        <GroupsContext.Provider
            value={{
                data: groups,
                fetchData,
                // createTodo
            }
            }
        >
            {props.children}
        </GroupsContext.Provider >
    );
}
