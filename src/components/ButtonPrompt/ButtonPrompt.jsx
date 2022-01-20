import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPrompt.scss';
import {Border} from "../Border/Border";

/**
 * Primary UI component for user interaction
 */
export const ButtonPrompt = ({label, prompt, hasBorder, hasLabel, labelPosition, ...props}) => {
    let labelClassName = ["button-prompt-label"];
    let borderClassName = ["button-prompt-border"];
    const isLabelPositionedLeft = labelPosition === 'left';

    if (hasLabel) {
        labelClassName.push('show');
    }
    if (hasBorder) {
        borderClassName.push('show');

        if (isLabelPositionedLeft) {
            borderClassName.push('left');
        } else {
            borderClassName.push('right');
        }
    }

    return (
        <label className={labelClassName.join(" ")}>
            {hasLabel && isLabelPositionedLeft && label}
            <Border className={borderClassName.join(" ")}>
                <div className="button-prompt" {...props} >
                    <span className="prompt">{prompt}</span>
                </div>
            </Border>
            {hasLabel && !isLabelPositionedLeft && label}
        </label>
    );
};

ButtonPrompt.propTypes = {
    // Label for the ButtonPrompt
    label: PropTypes.string,
    prompt: PropTypes.string,
    labelPosition: PropTypes.oneOf(['left', 'right']),

    hasBorder: PropTypes.bool,
    hasLabel: PropTypes.bool,
};

ButtonPrompt.defaultProps = {
    label: '',
    prompt: 'F',
    labelPosition: 'left',
    hasBorder: true,
    hasLabel: true,
};
