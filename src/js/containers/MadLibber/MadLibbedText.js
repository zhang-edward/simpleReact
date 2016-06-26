import React, { Component } from 'react';

export default class MadLibbedText extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mad-libbed-text">
                <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>
            </div>
        );
    }
}
