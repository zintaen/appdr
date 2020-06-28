import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout';
import AuthLayout from 'layouts/AuthLayout';

import Page404 from './pages/Static/Page404';
import Page500 from './pages/Static/Page500';
import SignInPage from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Coupon from './pages/Coupon';

const AppRoute = memo(({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return (
          <Layout {...routeProps}>
            <Component />
          </Layout>
        );
      }}
    />
  );
});

function Routes() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/404" layout={DefaultLayout} component={Page404} />
        <AppRoute exact path="/500" layout={DefaultLayout} component={Page500} />
        <AppRoute exact path="/dashboard" layout={DefaultLayout} component={Dashboard} />
        <AppRoute exact path="/coupon" layout={DefaultLayout} component={Coupon} />
        <AppRoute exact path="/login" layout={AuthLayout} component={SignInPage} />
        <AppRoute path="/" layout={DefaultLayout} component={Page404} />
      </Switch>
      <Redirect from="/" to="/dashboard" />
    </Router>
  );
}

export default memo(Routes);
