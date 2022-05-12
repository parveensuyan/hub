import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PlanetsTable from "./table/planetstable";
import App from "../App";
function Planets() {
    const [state, setData] = useState({
        users   : [],
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
      if (state.users.results != undefined) {
          state.users.results.forEach((product, key) => {
              list.push(
                  <tr key={key}>
                      <th scope="row">{product.name}</th>
                      <td> {product.gravity}</td>
                      <td>{product.population}</td>
                      <td>{product.surface_water}</td>
                  </tr>
              );
          });
      }

    return (
        <React.Fragment>
            <App>
             {isLoading ? (
              <p>Loading ...</p>
          ) : (
                <PlanetsTable list={list}></PlanetsTable>
          )}
            </App>
        </React.Fragment>
    );
}
export default Planets;
