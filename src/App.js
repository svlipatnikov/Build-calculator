import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Clients from './pages/Clients';
import Estimates from './pages/Estimates/Estimates';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route exact path="/clients" component={Clients} />
                <Route exact path="/estimates/:id" component={Estimates} />
            </Switch>
        </Router>
    );
}

export default App;
