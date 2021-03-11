import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import theme from 'malerialUI/theme.js';
import PageLayout from 'layouts/page';
import routes from 'pages';
import { useSelector } from 'react-redux';
import { authFlagSelector } from 'redux/selectors/authInfoSelector';

function App() {
  const isAuth = useSelector(authFlagSelector);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageLayout>
          {!isAuth && <Redirect to="/login" />}
          <Switch>
            {routes.map((props) => (
              <Route key={props.path} {...props} exact />
            ))}
            {isAuth && <Redirect to="/customers" />}
          </Switch>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
