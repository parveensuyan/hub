import Example from "./Example";
import People from "./userlist/people";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">People Component</div>
                        <div className="card-body">
                            <nav
                                style={{
                                    borderBottom: "solid 1px",
                                    paddingBottom: "1rem",
                                }}
                            >
                                <Link to="/people">People</Link> |{" "}
                                <Link to="/planets">Planets</Link>|{" "}
                                <Link to="/starships">Starships</Link> |{" "}
                                <Link to="/home-api">Home</Link>
                            </nav>
                        </div>
                        <div className="card-body">
                            {/* <People></People> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
