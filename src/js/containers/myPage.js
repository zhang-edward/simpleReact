import React, { Component } from 'react';

export default class MyPage extends Component {


  constructor(props) {
    super(props);

  }

  chooseFile(){
    ("#fileInput")
  }


  render() {
    return (
      // html/CSS
      <div>
        //<button onClick={this.chooseFile}>Click Me!</button>
      </div>

    );
  }
}
