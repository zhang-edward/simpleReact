import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import MadLibberApp from './containers/MadLibber/MadLibberApp';
export default (
  <Route path="/" component={Root}>
      <IndexRoute component={MadLibberApp}/>
  </Route>
);
    //<Redirect from="*" to="404" />
    //<Route path="404" component={NotFoundView} />
