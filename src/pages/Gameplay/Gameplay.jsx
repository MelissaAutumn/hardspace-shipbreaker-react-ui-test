import React from 'react';
import PropTypes from 'prop-types';
import './Gameplay.scss';
import {Bar} from "../../components/Bar/Bar";

/**
 * Primary UI component for user interaction
 */
export const Gameplay = ({label, ...props}) => {
    return (
        <div className="background">
            <div className="player-status">
                <Bar className="player-left" label="HLTH" currentValue={100}/>
                <Bar className="player-right" label="FUEL" currentValue={100} labelPosition="right"/>
                <Bar className="player-left" label="SUIT" currentValue={75} barType="pips"/>
                <Bar className="player-right" label="O2" currentValue={100} labelPosition="right"/>
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
