import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "../App";

import StarshipTable from "./table/starshiptable";

function Starships() {
    const [state, setData] = useState({
        users: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const api = await fetch("/api/starships");
        setData({
            users: await api.json(),
        });
        setIsLoading(false);

    };

    useEffect(() => {
        fetchData();
    }, []);
    const list = [];
    if (state.users.results != undefined) {
        state.users.results.forEach((product, key) => {
            list.push(
                <tr key={key}>
                    <th scope="row">{product.name}</th>
                    <td> {product.model}</td>
                    <td>{product.manufacturer}</td>
                    <td>{product.passengers}</td>
                </tr>
            );
        });
    }
    console.log(list);

    return (
        <React.Fragment>
            <App>
                {isLoading ? (
                    <p>Loading ...</p>
                ) : (
                    <StarshipTable list={list}></StarshipTable>
                )}
            </App>
            )
        </React.Fragment>
    );
}
export default Starships;
