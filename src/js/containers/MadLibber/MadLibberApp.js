import React, { Component } from 'react';
import MadLibbedText from './MadLibbedText';
import UploadButton from './UploadButton';
import PlaceholderInput from './placeholder_input';

export default class MadLibberApp extends Component {

    constructor(props){
        super(props);

        this.state = { original_text: "" };
    }


    setOriginalText(json) {
        console.log(json.text_block[0].text);

        //const blanks = 2;
        const root_url = 'http://libberfy.herokuapp.com/?html_form=1';

        var url = root_url + "&blanks=4" + "&q=" + json.text_block[0].text;
        // console.log(url);

        fetch(url)
            .then(function(response) {
                console.log(response);
                return response.json()
            }).then((json) => {
                this.setState({ original_text: json.madlib });
                //console.log(this.state.text);
            }).catch(function(ex) {
                console.log('parsing failed', ex)
        })
    }

    render() {
        return (
            <div>
                <div className="top-bar grooveBorder">
                    <div className="columns medium-centered">
                        <h1 className="website-title"><strong>Mad Libber</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="medium-9 medium-centered columns">
                        <UploadButton onUploadPhoto={this.setOriginalText.bind(this)}/>
                        <hr/>
                        <MadLibbedText text={this.state.original_text}/>;
                    </div>
                </div>
            </div>
        );
    }

    /* we tried
    renderMadlibText()
    {
        if (!this.state.original_text) {
            return;
        }

        var str = this.state.original_text.split(' ');
        console.log(str);
        str.map((word) => {
            if (word.startsWith('<')) {
                console.log("hello");
                return <PlaceholderInput placeholder={word} />;
            }
            else {
                return <p>{word}</p>;
            }
        })
    }*/

}
