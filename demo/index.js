import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock, { Themes } from '../src/index';

const WIDTH = 200;
const GMTOFFSET= "+4";
const RELATIVEOFFSET = "-1500";

const Component = (
    <div>
        <span><AnalogClock width={WIDTH} theme={Themes.radio} relativeOffset={RELATIVEOFFSET} /></span>
    </div>
);

ReactDOM.render(Component, document.getElementById('app'));
