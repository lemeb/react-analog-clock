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

function convertToUTC(date) {
    return new Date(
        date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(),
        date.getUTCMilliseconds()
    );
}

export function updateTime({ gmtOffset, relativeOffset, timestamp }) {
    // Note: timestamp as input and output is a STRING
    const now = ((timestamp && timestamp !== 'undefined') ?
                    new Date(timestamp)
                    : new Date()); // Date obj of now
    timestamp = ((timestamp && timestamp !== 'undefined') ?
                    timestamp : now.toISOString()); // Convert to string
    let [milliseconds, seconds, minutes, hour] = [0, 0, 0, 0];
    let dateToDisplay = now;

    if (gmtOffset && gmtOffset !== 'undefined') {
        // GMT Offset
        const ots = now.valueOf() + (parseFloat(gmtOffset) * 1000 * 60 * 60);
        const offsetNow = new Date(ots);
        dateToDisplay = convertToUTC(offsetNow);
    } else if (relativeOffset && relativeOffset !== 'undefined') {
        // Relative Offset
        dateToDisplay = new Date(now.valueOf() + (parseFloat(relativeOffset)));
    }

    [milliseconds, seconds, minutes, hour] = [
        dateToDisplay.getMilliseconds(), dateToDisplay.getSeconds(),
        dateToDisplay.getMinutes(), dateToDisplay.getHours()];

    return { milliseconds, seconds, minutes, hour,
        relativeOffset, gmtOffset, timestamp };

}
