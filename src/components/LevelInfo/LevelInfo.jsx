import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './LevelInfo.scss';
import {Panel} from "../Panel/Panel";
import {Bar} from "../Bar/Bar";

/**
 * Primary UI component for user interaction
 */
export const LevelInfo = ({...props}) => {
    const [timer, setTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    useEffect(() => {
        if (timerInterval) {
            return;
        }

        setTimerInterval(setInterval(() => {
            setTimer((count) => count + 1);
        }, 1000));
    }, [timerInterval]);

    const formatTimer = (timer) => {
        const minutes = timer / 60.0;
        const seconds = timer % 60;
        const time = [Math.floor(minutes), seconds.toString().padStart(2, '0')];
        return time.join(':');
    }

    return (
        <div className="level-info">
            <p className="timer">{formatTimer(timer)}</p>
            <span className="left">THE FREDDI MK V</span>
            <span className="right">HAZARD LEVEL 8 - MACKEREL - LIGHT CARGO</span>
            <Bar className="salvage-rating" hasLabel={false} progressBarWidth={1000} currentValue={100}/>
        </div>
    );
};

LevelInfo.propTypes = {
    hasBorder: PropTypes.bool,
};

LevelInfo.defaultProps = {
    hasBorder: true,
};
