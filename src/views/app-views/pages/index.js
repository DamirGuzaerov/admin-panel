import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/profile`} />
      <Route path={`${match.url}/user-list`} component={lazy(() => import(`./user-list`))} />
        <Route path={`${match.url}/scheduler`} component={lazy(() => import(`./scheduler`))} />
      <Route path={`${match.url}/setting/:userId`} component={lazy(() => import(`./setting`))} />
    </Switch>
  </Suspense>
);

export default Pages;