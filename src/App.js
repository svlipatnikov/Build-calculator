import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import theme from './malerialUI/theme.js';
import PageLayout from './layouts/page';
import routes from './pages';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/selectors/index.js';

function App() {
  const isAuth = useSelector(authSelector);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
            <Redirect to="/customers" />
          </Switch>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
