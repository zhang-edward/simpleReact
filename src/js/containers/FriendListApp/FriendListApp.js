import './FriendListApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FriendsActions from '../../actions/FriendsActions';
import { AddFriendInput, FriendList } from '../../components';

var Dropzone = require('react-dropzone');

class FriendListApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };


  onDrop (files) {
  console.log('Received files: ', files);
  }


  render () {
    const { friendList: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">

        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>


        <h1>Agale App</h1>


        <AddFriendInput addFriend={actions.addFriend} />



        <FriendList friends={friendsById} actions={actions} />




      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FriendsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendListApp);
