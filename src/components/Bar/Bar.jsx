import React from 'react';
import PropTypes from 'prop-types';
import './Bar.scss';

/**
 * Primary UI component for user interaction
 * TODO: Re-write to use a div instead of progress, so we can have barred progress along-side solid progress!
 */
export const Bar = ({ label, labelPosition, barType, ...props }) => {
    return (
        <span className="bar">
            <label>
                {labelPosition === 'left' && <span className="label-left">{label}</span>}
                <span className="progress-container">
                    {barType === 'solid' && <progress className="progress"  {...props}/>}
                </span>
                {labelPosition === 'right' && <span className="label-right">{label}</span>}
            </label>
        </span>
    );
};

Bar.propTypes = {
    // Max value for this bar
    max: PropTypes.number,
    // Current value of this bar
    value: PropTypes.number,

    // Label for the bar
    label: PropTypes.string,

    labelPosition: PropTypes.oneOf(['left', 'right']),

    barType: PropTypes.oneOf(['solid', 'pips']),
};

Bar.defaultProps = {
    value: 0,
    max: 100,
    label: '',
    labelPosition: 'left',
    barType: 'solid',
};
