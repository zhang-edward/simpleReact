import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import NotFoundView from './views/NotFoundView';
import HiApp from './containers/hiApp/HiApp'
import MyPage from './containers/myPage'
export default (
  <Route path="/" component={Root}>
    <IndexRoute component={FriendListApp} />


    <Route path="/hi" component={HiApp}/>
    <Route path="/friends" component={FriendListApp}/>

    <Route path="/myPage" component={MyPage}/>
  </Route>
);
    //<Redirect from="*" to="404" />
    //<Route path="404" component={NotFoundView} />
