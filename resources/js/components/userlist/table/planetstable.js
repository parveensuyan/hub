function PlanetsTable(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gravity</th>
                    <th scope="col">Population</th>
                    <th scope="col">Surface Water</th>
                </tr>
            </thead>
            <tbody>{props.list}</tbody>
        </table>
    );
}
export default PlanetsTable;
