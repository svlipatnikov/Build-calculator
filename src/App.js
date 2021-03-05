import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './malerialUI/theme.js';

import Auth from './pages/Auth';
import Clients from './pages/Clients';

function App() {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default App;
