import React from 'react';
import PropTypes from 'prop-types';
import './Bar.scss';
import {Border} from '../Border/Border';

/**
 * Primary UI component for user interaction
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
        hasLabel,
        hasBorder,
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

    let labelClassName = ['bar-label'];
    let borderClassName = ['bar-border', 'progress-container'];

    if (hasLabel) {
        labelClassName.push('show');
    }
    if (hasBorder) {
        borderClassName.push('show');
    }

    return (
        <span className={['bar', className].join(' ')}>
            <label className={labelClassName.join(' ')}>
                {hasLabel && labelPosition === 'left' && <span className="label-left">{label}</span>}
                <Border className={borderClassName.join(' ')}>
                    <div className="progress-bar" style={{width: progressBarWidth}}>
                        {barType === 'solid' && <div className='progress-value' style={{width: valueWidth}}/>}
                        {barType === 'pips' && pipDivs}
                    </div>

                </Border>
                {hasLabel && labelPosition === 'right' && <span className="label-right">{label}</span>}
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

    hasBorder: PropTypes.bool,
    hasLabel: PropTypes.bool,
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

    hasLabel: true,
    hasBorder: true,
};
