import React, { Component, PropTypes } from 'react';


//container of route
export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    );
  }
}
