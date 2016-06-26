import React, { Component } from 'react';
import UploadButton from './upload_button';
import MadLibbedText from './mad_libbed_text';

export default class MadLibberApp extends Component {

    render() {
        return (
            <div>
                <UploadButton />
                <div className="row">
                    <MadLibbedText original_text={`To speak the truth, I had no
                            especial relish for such amusement at any time, and,
                            at that particular moment, would most willingly have
                            declined it; for the night was coming on, and I felt
                            much fatigued with the exercise already taken; but I
                            saw no mode of escape, and was fearful of disturbing
                            my poor friend's equanimity by a refusal. Could I
                            have depended, indeed, upon Jupiter's aid, I would
                            have had no hesitation in attempting to get the
                            lunatic home by force; but I was too well assured of
                            the old negro's disposition, to hope that he would
                            assist me, under any circumstances, in a personal
                            contest with his master. I made no doubt that the
                            latter had been infected with some of the
                            innumerable Southern superstitions about money
                            buried, and that his phantasy had received
                            confirmation by the finding of the scarabaeus, or,
                            perhaps, by Jupiter's obstinacy in maintaining it to
                            be "a bug of real gold." A mind disposed to lunacy
                            would readily be led away by such suggestions
                            -especially if chiming in with favorite preconceived
                            ideas -and then I called to mind the poor fellow's
                            speech about the beetle's being "the index of his
                            fortune." Upon the whole, I was sadly vexed and puzzled,
                            but, at length, I concluded to make a virtue of necessity
                            -to dig with a good will, and thus the sooner to convince
                            the visionary, by ocular demonstration, of the fallacy of
                            the opinions he entertained.`}/>
                </div>
            </div>
        );
    }

}
