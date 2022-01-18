import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPrompt.scss';
import {Border} from "../Border/Border";

/**
 * Primary UI component for user interaction
 */
export const ButtonPrompt = ({ label, labelPosition, ButtonPromptType, ...props }) => {
    return (
        <Border>
            <div className="button-prompt" {...props}>
                <span className="label">{label}</span>
            </div>
        </Border>
    );
};

ButtonPrompt.propTypes = {
    // Max value for this ButtonPrompt
    max: PropTypes.number,
    // Current value of this ButtonPrompt
    value: PropTypes.number,

    // Label for the ButtonPrompt
    label: PropTypes.string,

    labelPosition: PropTypes.oneOf(['left', 'right']),

    ButtonPromptType: PropTypes.oneOf(['solid', 'pips']),
};

ButtonPrompt.defaultProps = {
    value: 0,
    max: 100,
    label: '',
    labelPosition: 'left',
    ButtonPromptType: 'solid',
};
