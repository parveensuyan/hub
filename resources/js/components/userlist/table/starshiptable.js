function StarshipTable(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Passengers</th>
                </tr>
            </thead>
            <tbody>{props.list}</tbody>
        </table>
    );
}
export default StarshipTable;
