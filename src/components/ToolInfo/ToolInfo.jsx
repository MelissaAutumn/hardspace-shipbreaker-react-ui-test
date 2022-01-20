import React from 'react';
import PropTypes from 'prop-types';
import './ToolInfo.scss';
import {Bar} from "../Bar/Bar";
import {ButtonPrompt} from "../ButtonPrompt/ButtonPrompt";

/**
 * Primary UI component for user interaction
 */
export const ToolInfo = ({...props}) => {
    return (
        <div className='tool-info'>

            <ButtonPrompt hasBorder={false} labelPosition="right" label="MODE SWAP" prompt="V"/>

            <span className='temp-bar-wrapper'>
                <Bar className='temp-bar' label='CUTTER TEMP' barType='pips' maxPips={4} progressBarWidth={250}
                     dangerPipCount={0}/>
            </span>

            <span className='bar-wrapper'>
                <span>+</span>
                <Bar hasBorder={false} labelPosition="right" barType='pips' maxPips='4' dangerPipCount={0}
                     progressBarWidth={90} label='100%'/>
            </span>
            <span className='tool-name'>
                <span className='fancy-border'/>
                <p>CUTTER</p>
            </span>

        </div>
    )
};

ToolInfo.propTypes = {
    hasBorder: PropTypes.bool,
};

ToolInfo.defaultProps = {
    hasBorder: true,
};
