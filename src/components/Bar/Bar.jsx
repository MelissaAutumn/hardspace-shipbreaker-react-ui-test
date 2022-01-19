import React from 'react';
import PropTypes from 'prop-types';
import './Bar.scss';
import {Border} from '../Border/Border';

/**
 * Primary UI component for user interaction
 * TODO: Re-write to use a div instead of progress, so we can have barred progress along-side solid progress!
 */
export const Bar = (
    {
        label,
        labelPosition,
        barType,
        currentValue,
        maxValue,
        progressBarWidth,
        pipWidth,
        dangerPipCount,
        maxPips,
        className,
        ...props
    }) => {
    // Make sure the progress bar doesn't exceed `progressBarWidth`,
    // Also y'know calculate the inner div width.
    const valueWidth = Math.min((currentValue / maxValue), 1.0) * progressBarWidth;
    // Cap off danger pips to the amount of max pips allowed
    dangerPipCount = Math.min(maxPips, dangerPipCount);

    let pipDivs = [];

    if (barType === 'pips') {

        const divsLeftToPrint = maxPips - dangerPipCount;
        pipDivs = Array(dangerPipCount).fill(<div className='progress-value-pips danger-pip'/>);
        if (divsLeftToPrint > 0) {
            pipDivs.push(...Array(divsLeftToPrint).fill(<div className='progress-value-pips'/>));
        }
    }

    console.log(pipDivs);
    return (
        <span className={['bar', className].join(' ')}>
            <label>
                {labelPosition === 'left' && <span className="label-left">{label}</span>}
                <Border className="progress-container">
                    {/* barType === 'solid' && <progress className="progress"  {...props}/> */}

                    <div className="progress-bar" style={{width: progressBarWidth}}>
                        {barType === 'solid' && <div className='progress-value' style={{width: valueWidth}}/>}
                        {barType === 'pips' && pipDivs}
                    </div>

                </Border>
                {labelPosition === 'right' && <span className="label-right">{label}</span>}
            </label>
        </span>
    );
};

Bar.propTypes = {
    progressBarWidth: PropTypes.number,

    // Only valid if barType === 'pips'
    // Width size of the pips
    pipWidth: PropTypes.number,
    // Amount of pips that are coloured dangerously (Used to represent low suit values in-game)
    // Note: This is part of maxPips, not in addition to!
    dangerPipCount: PropTypes.number,
    // Maximum amount of pips
    maxPips: PropTypes.number,

    // Max value for this bar
    maxValue: PropTypes.number,
    // Current value of this bar
    currentValue: PropTypes.number,

    // Label for the bar
    label: PropTypes.string,

    labelPosition: PropTypes.oneOf(['left', 'right']),

    barType: PropTypes.oneOf(['solid', 'pips']),
};

Bar.defaultProps = {
    progressBarWidth: 172,
    pipWidth: 10,
    dangerPipCount: 2,
    maxPips: 14,
    currentValue: 0,
    maxValue: 100,
    label: '',
    labelPosition: 'left',
    barType: 'solid',
};
