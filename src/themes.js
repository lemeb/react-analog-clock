export const classicWatch = {
    timeInCenter: false,
    hiddenTicks: false,
    time: '#000',
}; // params for classic watch faces

export const light = Object.assign({}, classicWatch, {
    background: '#fff',
    border: '#ececec',
    center: '#000',
    seconds: '#f56c6c',
    minutes: '#ccc',
    hour: '#000',
    tick: '#000',
});

export const dark = Object.assign({}, classicWatch, {
    background: '#000',
    border: '#000',
    center: '#fff',
    seconds: '#fff',
    minutes: '#ccc',
    hour: '#fff',
    tick: '#fff',
});

export const aqua = Object.assign({}, classicWatch, {
    background: '#eaeaea',
    border: '#3dd4c1',
    center: '#000',
    seconds: '#f56c6c',
    minutes: '#9c9c9c',
    hour: '#000',
    tick: '#000',
});

export const lime = Object.assign({}, classicWatch, {
    background: '#a4f181',
    border: '#fff',
    center: '#ccc',
    seconds: '#fff',
    minutes: '#ccc',
    hour: '#fff',
    tick: '#fff',
});

export const sherbert = Object.assign({}, classicWatch, {
    background: 'linear-gradient(to left, #fee , #ddefbb)',
    border: '#fff',
    center: '#fff',
    seconds: '#fff',
    minutes: '#ccc',
    hour: '#fff',
    tick: '#fff',
});

export const navy = Object.assign({}, classicWatch, {
    background: 'linear-gradient(#2a70a0,#102d42)',
    border: '#fff',
    center: '#fff',
    seconds: '#fff',
    minutes: '#ccc',
    hour: '#fff',
    tick: '#fff',
});

export const radio = Object.assign({}, classicWatch, {
    background: '#000',
    border: '#000',
    center: '#000',
    seconds: 'red',
    minutes: 'red',
    hour: 'red',
    tick: 'red',
    timeInCenter: true,
    time: 'red',
    hiddenTicks: true,
});
