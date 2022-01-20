import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.scss';

/**
 * SideBar
 */
export const SideBar = ({className, position, ...props}) => {
    return (
        <div className={['side-bar', position, className].join(' ')} {...props}>
            <span className="inner-pips">
                {Array(12).fill(<span className="mark"/>)}
            </span>
        </div>
    );
};

SideBar.propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right'])
};

SideBar.defaultProps = {
    className: '',
    position: 'left',
};
