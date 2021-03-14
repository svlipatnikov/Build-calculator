/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'malerialUI/theme';
import PageLayout from 'layouts/page';
import routes from 'routes';

function App() {
  const token = localStorage.getItem('access_token');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          {!token && <Redirect to="/login" />}
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
            {token && <Redirect to="/customers" />}
          </Switch>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

App.propTypes = {
  path: PropTypes.string,
};

App.defaultProps = {
  path: '/',
};

export default App;
