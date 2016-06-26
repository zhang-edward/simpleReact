import React, { Component } from 'react';
import MadLibbedText from './MadLibbedText';
import UploadButton from './UploadButton';
import './MadLibberApp.scss';

export default class MadLibberApp extends Component {

    render() {
        return (
            <div style="background-color:blue">
                <h1 className= "title"> Mad Libber </h1>
                <UploadButton className = "classRight"/>
                <MadLibbedText original_text={"I am testing this hello world."}
                className="classRight"/>
            </div>
        );
    }

}
