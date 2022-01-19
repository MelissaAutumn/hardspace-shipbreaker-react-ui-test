import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPrompt.scss';
import {Border} from "../Border/Border";

/**
 * Primary UI component for user interaction
 */
export const ButtonPrompt = ({ label, ...props }) => {
    return (
        <Border className="button-prompt-border">
            <div className="button-prompt" {...props}>
                <span className="label">{label}</span>
            </div>
        </Border>
    );
};

ButtonPrompt.propTypes = {
    // Label for the ButtonPrompt
    label: PropTypes.string,
};

ButtonPrompt.defaultProps = {
    label: '',
};
