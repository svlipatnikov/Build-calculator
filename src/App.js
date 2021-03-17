import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'malerialUI/theme';
import PageLayout from 'layouts/page';
import routes from 'routes';
import loaderSelector from 'redux/selectors/loaderSelector';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';

function App() {
  const token = localStorage.getItem('access_token');
  const isLoading = useSelector(loaderSelector);

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
          {isLoading && <Loader />}
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
