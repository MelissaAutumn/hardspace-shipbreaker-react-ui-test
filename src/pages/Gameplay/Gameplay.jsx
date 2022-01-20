import React from 'react';
import PropTypes from 'prop-types';
import './Gameplay.scss';
import {Bar} from "../../components/Bar/Bar";
import {BoxedLabel} from "../../components/BoxedLabel/BoxedLabel";
import {ButtonPrompt} from "../../components/ButtonPrompt/ButtonPrompt";
import {SalvageInfo} from "../../components/SalvageInfo/SalvageInfo";

/**
 * Primary UI component for user interaction
 */
export const Gameplay = ({label, ...props}) => {
    return (
        <div className="background">
            <div className="salvage-info-panel">
                <BoxedLabel label="PROCESSOR" specialType="processor"/>
                <SalvageInfo />
            </div>
            <div className="left-button-prompts">
                <ButtonPrompt label="SCANNER" prompt="T"/>
                <ButtonPrompt label="HELMET LIGHT" prompt="5"/>

            </div>
            <div className="player-status">
                <Bar className="player-left" label="HLTH" currentValue={100}/>
                <Bar className="player-right" label="FUEL" currentValue={100} labelPosition="right"/>
                <Bar className="player-left" label="SUIT" maxPips={10} currentValue={75} barType="pips"/>
                <Bar className="player-right" label="O2" currentValue={100} labelPosition="right"/>
            </div>
            <div className="right-button-prompts">
                <div style={{position: "relative"}}>
                <ButtonPrompt labelPosition="right" label="MODE SWAP" prompt="V"/>
                </div>
            </div>
        </div>
    );
};

Gameplay.propTypes = {
    // Label for the ButtonPrompt
    label: PropTypes.string,
};

Gameplay.defaultProps = {
    label: '',
};
