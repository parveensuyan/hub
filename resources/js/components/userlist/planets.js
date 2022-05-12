import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
function Planets() {
    const [state, setData] = useState({
        users: [],
    });
    const fetchData = async () => {
        const api = await fetch("/api/planets");
        setData({
            users: await api.json(),
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    return('');
}
export default Planets;
