import React from 'react';
import PropTypes from 'prop-types';
import './Gameplay.scss';
import {Bar} from "../../components/Bar/Bar";
import {BoxedLabel} from "../../components/BoxedLabel/BoxedLabel";
import {ButtonPrompt} from "../../components/ButtonPrompt/ButtonPrompt";
import {SalvageInfo} from "../../components/SalvageInfo/SalvageInfo";
import {LevelInfo} from "../../components/LevelInfo/LevelInfo";
import {SideBar} from "../../components/SideBar/SideBar";
import {ThrustInfo} from "../../components/ThrustInfo/ThrustInfo";
import {ToolInfo} from "../../components/ToolInfo/ToolInfo";

/**
 * Primary UI component for user interaction
 */
export const Gameplay = ({label, ...props}) => {
    return (
        <div className="background">
            <div className="left-side-bar">
                <SideBar position='left'/>
            </div>
            <div className="thrust-info-panel">
                <ThrustInfo/>
            </div>
            <div className="level-info-panel">
                <LevelInfo/>
            </div>
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
                <ToolInfo/>
            </div>
            <div className="right-side-bar">
                <SideBar position='right'/>
            </div>
            <div className='unpressurized-warning'>
                <BoxedLabel specialType={null} label='UNPRESSURIZED' />
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
