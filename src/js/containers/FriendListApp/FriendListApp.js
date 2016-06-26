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
  this.callAPI(files)

  }

  callAPI(file){
    var form = new FormData();
    form.append('apikey', '4449e888-6974-45a0-8d75-a93f09a76bf0');
    form.append('file', file);

    var url="http://api.havenondemand.com/1/api/sync/ocrdocument/v1";
    fetch(url, {
        method: 'POST',
        body: form })
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
  }


  render () {
    const { friendList: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">

        <Dropzone onDrop={this.onDrop.bind(this)}>
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
