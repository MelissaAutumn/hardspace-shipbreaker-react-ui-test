import React from 'react';
import PropTypes from 'prop-types';
import './Border.scss';

/**
 * Primary UI component for user interaction
 */
export const Border = ({ className, ...props }) => {
    return (
        <span className={['border', className].join(' ')} {...props}>
            { props.children }
        </span>
    );
};

Border.propTypes = {
    className: PropTypes.string,
};

Border.defaultProps = {
    className: '',
};
