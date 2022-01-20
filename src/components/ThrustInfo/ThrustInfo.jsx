import React from 'react';
import PropTypes from 'prop-types';
import './ThrustInfo.scss';
import {Bar} from "../Bar/Bar";
import {ButtonPrompt} from "../ButtonPrompt/ButtonPrompt";

/**
 * Primary UI component for user interaction
 */
export const ThrustInfo = ({...props}) => {
    return (
        <div className='thrust-info'>
            <p>0.<span className='small-text'>00 M/S</span></p>
            <p>THRUSTERS</p>
            <span className='bar-wrapper'>
                <span>+</span>
                <Bar hasBorder={false} labelPosition="right" barType='pips' maxPips='4' dangerPipCount={0}
                     progressBarWidth={90} label='100%'/>
            </span>
        </div>
    )
};

ThrustInfo.propTypes = {
    hasBorder: PropTypes.bool,
};

ThrustInfo.defaultProps = {
    hasBorder: true,
};
