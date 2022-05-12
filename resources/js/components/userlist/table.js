function Table(props){
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Height</th>
                </tr>
            </thead>
            <tbody>{props.list}</tbody>
        </table>
    );
}
export default Table;