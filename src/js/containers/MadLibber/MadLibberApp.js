import React, { Component } from 'react';
import UploadButton from './upload_button';
import MadLibbedText from './mad_libbed_text';

export default class MadLibberApp extends Component {

    render() {
        return (
            <div>
                <UploadButton />
                <div>
                    <MadLibbedText original_text={`AngelHack, a female-owned,
                        female-majority company, is the world’s largest and most
                        diverse global hacker community, helping to drive open
                        innovation of tech products, platforms and brands with
                        extraordinary smarts, scale and speed. Known as pioneers
                        of global hackathons for more than four years,
                        AngelHack’s more than 97,000 developers, designers,
                        and entrepreneurs compete to build, test and launch new
                        solutions over the course of a weekend.`}/>
                </div>
            </div>
        );
    }

}
