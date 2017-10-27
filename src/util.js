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

export function updateTime({ gmtOffset, seconds, minutes, hour }) {
        const now = new Date();
        if (gmtOffset && gmtOffset !== 'undefined') {
            const offsetNow = new Date(now.valueOf() + (parseFloat(gmtOffset) * 1000 * 60 * 60));
            [seconds, minutes, hour] = [offsetNow.getUTCSeconds(), offsetNow.getUTCMinutes(), offsetNow.getUTCHours()];
            return { gmtOffset, seconds, minutes, hour };
        } else {
            [seconds, minutes, hour] = [now.getSeconds(), now.getMinutes(), now.getHours()];
            return { gmtOffset, seconds, minutes, hour };
        }
}
