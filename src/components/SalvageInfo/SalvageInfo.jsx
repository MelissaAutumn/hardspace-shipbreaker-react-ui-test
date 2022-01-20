import React from 'react';
import PropTypes from 'prop-types';
import './SalvageInfo.scss';
import {Panel} from "../Panel/Panel";

/**
 * Primary UI component for user interaction
 */
export const SalvageInfo = ({label, prompt, hasBorder, hasLabel, labelPosition, ...props}) => {
    let borderClassName = ['panel-border', 'hide'];

    if (hasBorder) {
        borderClassName = ['panel-border', 'show'];
    }

    return (
        <Panel>
        </Panel>
    );
};

SalvageInfo.propTypes = {
    hasBorder: PropTypes.bool,
};

SalvageInfo.defaultProps = {
    hasBorder: true,
};
