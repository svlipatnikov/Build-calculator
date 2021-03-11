/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
<<<<<<< HEAD
import theme from 'malerialUI/theme.js';
import PageLayout from 'layouts/page';
import routes from 'pages';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from 'redux/selectors/authInfoSelector';

function App() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

=======
import theme from './malerialUI/theme';
import PageLayout from './layouts/page';
import routes from './pages';

function App() {
>>>>>>> develop
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
<<<<<<< HEAD
          {!isAuthenticated && <Redirect to="/login" />}
=======
>>>>>>> develop
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
<<<<<<< HEAD
            {isAuthenticated && <Redirect to="/customers" />}
=======
>>>>>>> develop
          </Switch>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
