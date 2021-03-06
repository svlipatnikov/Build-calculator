import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import theme from './malerialUI/theme.js';
import PageLayout from './layouts/page';
import routes from './pages';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <PageLayout>
                    <Switch>
                        {routes.map(props => <Route key={props.path} {...props} exact />)}
                    </Switch>
                </PageLayout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
