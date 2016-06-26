import React, { Component } from 'react';
import MadLibbedText from './MadLibbedText';
import UploadButton from './UploadButton';

export default class MadLibberApp extends Component {

    render() {
        return (
            <div>
                <UploadButton />
                <MadLibbedText original_text={"I am testing this hello world."}/>
            </div>
        );
    }

}
