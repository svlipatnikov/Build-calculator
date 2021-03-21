import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'malerialUI/theme';
import PageLayout from 'layouts/page';
import routes from 'routes';
import Loader from 'components/Loader';
import ServerMessage from 'components/ServerMessage';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector, isLoadingSelector, errorSelector } from 'redux/selectors/appStateSelector';

function App() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const isLoading = useSelector(isLoadingSelector);
  const { isError, isShown } = useSelector(errorSelector);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          {!isAuthenticated && <Redirect to="/login" />}
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
            <Route path="/*" render={() => <Redirect to="/customers" />} />
          </Switch>
          {isLoading && <Loader />}
          {isError && isShown && <ServerMessage />}
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
