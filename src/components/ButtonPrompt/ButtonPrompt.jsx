import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPrompt.scss';
import {Border} from "../Border/Border";

/**
 * Primary UI component for user interaction
 */
export const ButtonPrompt = ({label, prompt, hasBanner, hasLabel, ...props}) => {
    let labelClassName = ["button-prompt-label"];
    let borderClassName = ["button-prompt-border"];

    if (hasLabel) {
        labelClassName.push('show');
    }
    if (hasBanner) {
        borderClassName.push('show');
    }

    return (
        <label className={labelClassName.join(" ")}>
            {hasLabel && label}
            <Border className={borderClassName.join(" ")}>
                <div className="button-prompt" {...props} >
                    <span className="prompt">{prompt}</span>
                </div>
            </Border>
        </label>
    );
};

ButtonPrompt.propTypes = {
    // Label for the ButtonPrompt
    label: PropTypes.string,
    prompt: PropTypes.string,
    hasBanner: PropTypes.bool,
    hasLabel: PropTypes.bool,
};

ButtonPrompt.defaultProps = {
    label: 'PAY RESPECT',
    prompt: 'F',
    hasBanner: true,
    hasLabel: true,
};
