import React from 'react';
import PropTypes from 'prop-types';
import './Panel.scss';
import {Border} from "../Border/Border";

/**
 * Primary UI component for user interaction
 */
export const Panel = ({hasBorder, ...props}) => {
    let borderClassName = ['panel-border', 'hide'];

    if (hasBorder) {
        borderClassName = ['panel-border', 'show'];
    }

    return (
        <Border className={borderClassName.join(" ")}>
            <div className="panel" {...props} >
                {props.children}
            </div>
        </Border>
    );
};

Panel.propTypes = {
    hasBorder: PropTypes.bool,
};

Panel.defaultProps = {
    hasBorder: true,
};
