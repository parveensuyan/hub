import { Link } from "react-router-dom";
import "../css/app.css";
function App(props) {
    let timeout = 0;

    const triggerSearch = (event) => {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            if (props.getSearchKeyword)
                props.getSearchKeyword(event.target.value);
        }, 500);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Component</div>
                        <div className="card-body">
                            <nav className="nav-bar-nn">
                                <Link to="/">People</Link>
                                <Link to="/planets">Planets</Link>
                                <Link to="/starships">Starships</Link>
                                <form className="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        onChange={triggerSearch}
                                    />
                                </form>
                            </nav>
                        </div>
                        <div className="card-body">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
