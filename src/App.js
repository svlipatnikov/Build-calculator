import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'malerialUI/theme';
import PageLayout from 'layouts/page';
import routes from 'pages';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from 'redux/selectors/authInfoSelector';

function App() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          {!isAuthenticated && <Redirect to="/login" />}
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
            {isAuthenticated && <Redirect to="/customers" />}
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
