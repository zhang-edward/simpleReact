import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={FriendListApp} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
