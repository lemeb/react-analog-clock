import React from 'react';
import PropTypes from 'prop-types';

function renderNotches({ smallTick, largeTick, hiddenTicks }, seconds) {
    const notches = [];
    for (let i = 0; i < 60; i++) {
        let style = Object.assign({}, i % 5 === 0 ? largeTick : smallTick, {
            transform: `translateX(-50%) translateY(-100%) rotate(${i * 6}deg)`,
            visibility: `${i > seconds && hiddenTicks.property ? 'hidden' : 'visible'}`,
        });
        notches.push(<span key={i} style={style} />);
    }
    return notches;
}

export default function AnalogClockLayout({ hour, minutes, seconds, styles }) {
    // +1 to center align
    const secondStyle = Object.assign({}, styles.second, {
        transform: `translateX(-50%) translateY(-100%) rotate(${seconds * 6 + 1}deg)`,
    });
    // +1 to center align
    const minuteStyle = Object.assign({}, styles.minute, {
        transform: `translateX(-50%) translateY(-100%) rotate(${minutes * 6 + 1}deg)`,
    });
    // +1.5 to center align
    const hourStyle = Object.assign({}, styles.hour, {
        transform: `translateX(-50%) translateY(-100%) rotate(${hour * 30 + 1.5}deg)`,
    });
    var addZeroIfNeeded = function (digit) {
        return (digit < 10 ? '0':'') + digit.toString();
    };
    return (
        <div style={styles.base}>
            <div data-testid="seconds" style={secondStyle}></div>
            <div data-testid="minutes" style={minuteStyle}></div>
            <div data-testid="hour" style={hourStyle}></div>
            <div style={styles.center}> </div>
            <div style={styles.time}>
            {addZeroIfNeeded(hour)}:{addZeroIfNeeded(minutes)}
            <div style={styles.secondsTime}>{addZeroIfNeeded(seconds)}</div></div>
            {renderNotches(styles, seconds)}
        </div>
    );
}

AnalogClockLayout.propTypes = {
    hour: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    styles: PropTypes.shape({
        second: PropTypes.object.isRequired,
        minute: PropTypes.object.isRequired,
        hour: PropTypes.object.isRequired,
    }).isRequired,
};
