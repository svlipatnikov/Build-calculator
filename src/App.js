import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Clients from './pages/Clients';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/" component={Auth} />
                        <Route exact path="/clients" component={Clients} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
