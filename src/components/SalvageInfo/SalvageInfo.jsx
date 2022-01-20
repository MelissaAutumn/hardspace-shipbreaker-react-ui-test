import React from 'react';
import PropTypes from 'prop-types';
import './SalvageInfo.scss';
import {Panel} from "../Panel/Panel";
import {Bar} from "../Bar/Bar";

/**
 * Primary UI component for user interaction
 */
export const SalvageInfo = ({...props}) => {
    return (
        <Panel className="panel salvage-info">
            <p className='header'>PANEL   ( NANOCARBON )</p>
            <p className='weight'>50911   kg    [20  kg]</p>
            <Bar hasBorder={false} className="cut-lvl" label='CUT LVL' dangerPipCount={2} maxPips={5} barType="pips" />
            <Bar hasBorder={true} hasLabel={false} className="cutter-temp" currentValue={100} progressBarWidth={100} />
        </Panel>
    );
};

SalvageInfo.propTypes = {

};

SalvageInfo.defaultProps = {

};
