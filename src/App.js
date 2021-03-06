import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './malerialUI/theme.js';

import Auth from './pages/Auth';
import Clients from './pages/Clients';
import Estimate from './pages/Estimate/Estimate';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Auth} />
                    <Route exact path="/clients" component={Clients} />
                    <Route exact path="/estimates/:id" component={Estimate} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
