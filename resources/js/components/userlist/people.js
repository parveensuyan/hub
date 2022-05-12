import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PeopleTable from "./table/peopletable";
import App from "../App";
function People() {
    const [search, setSearch] = useState("");
    const [state, setData] = useState({
        users: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const api = await fetch(`/api/people?search=${search}`);

        setData({
            users: await api.json(),
        });
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [search]);
    const list = [];
    if (state.users.results != undefined ) {
        state.users.results.forEach((product, key) => {
            list.push(
                <tr key={key}>
                    <th scope="row">{product.name}</th>
                    <td> {product.birth_year}</td>
                    <td>{product.gender}</td>
                    <td>{product.height}</td>
                </tr>
            );
        });
    }
    // console.log(list)
    return (
        <React.Fragment>
            <App
                componentName="People Component"
                getSearchKeyword={(value) => {
                    setSearch(value);
                }}
            >
                {isLoading ? (
                    <p>Loading ...</p>
                ) : (
                    <PeopleTable list={list}></PeopleTable>
                )}
            </App>
        </React.Fragment>
    );
}

export default People;
