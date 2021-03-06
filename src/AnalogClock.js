import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnalogClockLayout from './AnalogClockLayout';
import Styles from './styles';
import { cssTransform, updateTime } from './util';
import { dark } from './themes';

import { subscribeToTimer } from './api';

export default class AnalogClock extends Component {

    constructor(props) {
        super();

        this.state = updateTime(props);
        this.styles = cssTransform(Styles, props);
    }

    componentDidMount() {
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp,
        }));

        this.interval = setInterval(() => {
            this.setState((prevState) => {
                const newState = updateTime(prevState);
                if (prevState.seconds !== newState.seconds) {
                    return newState;
                } else {
                    return prevState;
                }
            });
        }, 50);
    }
    // TODO align clocks to reduce interval

    componentWillReceiveProps(nextProps) {
        this.styles = cssTransform(Styles, nextProps);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <AnalogClockLayout {...this.state} styles={this.styles} />;
    }
}

AnalogClock.propTypes = {
    theme: PropTypes.shape({
        background: PropTypes.string.isRequired,
        border: PropTypes.string.isRequired,
        center: PropTypes.string.isRequired,
        seconds: PropTypes.string.isRequired,
        minutes: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        tick: PropTypes.string.isRequired,
    }),
    width: PropTypes.number,
    gmtOffset: PropTypes.string,
    relativeOffset: PropTypes.string,
};

AnalogClock.defaultProps = {
    theme: dark,
    width: 400,
};
