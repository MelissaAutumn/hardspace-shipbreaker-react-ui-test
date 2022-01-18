import React from 'react';
import PropTypes from 'prop-types';
import './BoxedLabel.scss';

/**
 * Primary UI component for user interaction
 */
export const BoxedLabel = ({ label, specialType, ...props }) => {
    return (
        <span
            className={['boxedLabel', specialType].join(' ')}
            {...props}
        >
            <span className='label'>{label}</span>
        </span>
    );
};

BoxedLabel.propTypes = {
    label: PropTypes.string,
    // Special types are pre-determined colour cycles based off the game's HUD.
    specialType: PropTypes.oneOf([null, 'barge', 'furnace', 'processor']),
};

BoxedLabel.defaultProps = {
    label: '',
    specialType: null,
};
