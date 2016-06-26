import React, { Component } from 'react';
import './MadLibbedText.scss';

export default class MadLibbedText extends Component {

    constructor(props) {
        super(props);

        this.state = { text: "" };
    }

    componentDidMount(){
        const blanks = 2;
        const root_url = 'http://libberfy.herokuapp.com/?html_form=1';

        var url = root_url + "&q=" + this.props.original_text;
        console.log(url);

        fetch(url)
            .then(function(response) {
                console.log(response);
                return response.json()
            }).then((json) => {
                this.setState({ text: json.madlib });
                console.log(this.state.text);
            }).catch(function(ex) {
                console.log('parsing failed', ex)
        })

    }

    render() {
        return (
            <div className="mad-libbed-text">
                <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
            </div>
        );
    }
}
