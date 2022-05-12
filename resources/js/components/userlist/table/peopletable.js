function PeopleTable(props) {
    const renderRecords = () => {
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
    };

    const renderNoRecordFound = () => {
        return <div>No records found!</div>;
    };

    const render = () => {
        if (props.list.length === 0) return renderNoRecordFound();
        else return renderRecords();
    };

    return render();
}
export default PeopleTable;
