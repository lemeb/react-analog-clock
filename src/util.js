export function cssTransform(styles, props) {
    return Object.keys(styles).reduce((newStyles, rootKey) => {
        const style = styles[rootKey];
        newStyles[rootKey] = Object.keys(style).reduce((newStyle, key) => {
            if (typeof style[key] === 'function') {
                newStyle[key] = style[key](props);
            } else {
                newStyle[key] = style[key];
            }
            return newStyle;
        }, {});
        return newStyles;
    }, {});
}

export function updateTime({ gmtOffset, relativeOffset, seconds, minutes, hour }) {
        const now = new Date();
        if (gmtOffset && gmtOffset !== 'undefined') {
            // GMT Offset
            const offsetNow = new Date(now.valueOf() + (parseFloat(gmtOffset) * 1000 * 60 * 60));
            [seconds, minutes, hour] = [offsetNow.getUTCSeconds(), offsetNow.getUTCMinutes(), offsetNow.getUTCHours()];
            return { gmtOffset, seconds, minutes, hour };
        } else if (relativeOffset && relativeOffset !== 'undefined'){ 
            // Relative Offset
            const offsetNow = new Date(now.valueOf() + (parseFloat(relativeOffset)));
            [seconds, minutes, hour] = [offsetNow.getSeconds(), offsetNow.getMinutes(), offsetNow.getHours()];
            return { relativeOffset, seconds, minutes, hour };
        } else {
            // No Offset
            [seconds, minutes, hour] = [now.getSeconds(), now.getMinutes(), now.getHours()];
            return { seconds, minutes, hour };
        }
}
