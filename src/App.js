/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import theme from './malerialUI/theme';
import PageLayout from './layouts/page';
import routes from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
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
