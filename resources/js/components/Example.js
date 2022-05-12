import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import People from './userlist/people';
import App from "./App";
import Planets from './userlist/planets';
import Starships from './userlist/starships';
function Example() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Routes>
                        <Route
                            path="people"
                            element={<People />}
                            component={<People/>}
                        />
                        <Route path="planets" element={<Planets />} />
                        <Route path="starships" element={<Starships />} />
                    </Routes>
                    <App></App>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
