import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import FriendListApp from './containers/FriendListApp/FriendListApp'
import MadLibberApp from './containers/MadLibber/MadLibberApp';
import HiApp from './containers/hiApp/HiApp'
export default (
  <Route path="/" component={Root}>
      <IndexRoute component={MadLibberApp}/>
    < Route path="friends" component={FriendListApp}/>
    < Route path="hi" component={HiApp}/>
  </Route>
);
    //<Redirect from="*" to="404" />
    //<Route path="404" component={NotFoundView} />
