const data = require('./data.json');

const validate = (color, weight) => {
    if (typeof data[color] === 'undefined') {
        throw "Color '" + color + "' is not recognised. Use a value from 'colors' array.";
    } else if (weight && typeof data[color][weight] === 'undefined'){
        throw "Weight '" + weight + "' is not valid for color '" + color + "'.";
    }
}

let colors = {};
Object.keys(data).forEach(key => {
    colors.key = key;
});
export const colors;

export const weights = {
    'W50': 'W50',
    'W100': 'W100',
    'W200': 'W200',
    'W300': 'W300',
    'W400': 'W400',
    'W500': 'W500',
    'W600': 'W600',
    'W700': 'W700',
    'W800': 'W800',
    'W900': 'W900',
    'A100': 'A100',
    'A200': 'A200',
    'A400': 'A400',
    'A700': 'A700'
};

export const getTextClass = (color, weight) => {
    validate(color, weight);
    if (weight) {
        return data[color][weight].textClass;
    } else {
        return data[color].textClass;
    }
};

export const getColorClass = (color, weight) => {
    validate(color, weight);
    if (weight) {
        return data[color][weight].colorClass;
    } else {
        return data[color].colorClass;
    }
};

export const getHex = (color, weight) => {
    validate(color, weight);
    if (weight) {
        return data[color][weight].hex;
    } else {
        return data[color].hex;
    }
};
