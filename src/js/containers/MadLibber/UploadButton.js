import React, { Component } from 'react';

var Dropzone = require('react-dropzone');

export default class UploadButton extends Component {

    constructor(props){
        super(props);
    }

    onDrop (files) {
        console.log('Received files: ', files);
        this.callAPI(files);
    }

    callAPI(file) {
        var form = new FormData();
        form.append('apikey', '4449e888-6974-45a0-8d75-a93f09a76bf0');
        form.append('file', file[0]);

        var url="http://api.havenondemand.com/1/api/sync/ocrdocument/v1";
        fetch(url, {
            method: 'POST',
            body: form })
            .then(function(response) {
                return response.json()
            }).then((json) => {
                console.log('parsing success', json);
                this.props.onUploadPhoto(json);
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
        }


        render () {
            return (
              <div >
                <Dropzone onDrop={this.onDrop.bind(this)} className="classCenter" className="classBorder" className="whiteBackground">
                  <div className="upload-button">Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
              </div>
            );
        }
}
