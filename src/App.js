import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { Redirect } from 'react-router';

import Layout from './components/Layout/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthContext from './store/AuthContext';
import ProfilePage from './pages/ProfilePage';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <IndexPage />
        </Route>
        <Route path="/signup">
          {authCtx.isLoggedIn && <Redirect to="/" />}
          {!authCtx.isLoggedIn && <SignupPage />}
        </Route>
        <Route path="/login">
          {authCtx.isLoggedIn && <Redirect to="/" />}
          {!authCtx.isLoggedIn && <LoginPage />}
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
