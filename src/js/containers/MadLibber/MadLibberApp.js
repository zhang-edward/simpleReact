import React, { Component } from 'react';
import MadLibbedText from './MadLibbedText';
import UploadButton from './UploadButton';

export default class MadLibberApp extends Component {

    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="columns medium-centered">
                        <h1 className="website-title">Gold + Sigma</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="medium-9 medium-centered columns">
                        <UploadButton />
                        <MadLibbedText original_text={"I am testing this hello world."}/>
                    </div>
                </div>
            </div>
        );
    }

}
