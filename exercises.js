let saved;

store = (x) => {
    saved = x;
    return saved;
};
retrive = () => {
    return saved;
};

capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

isWaterBoiling = (degrees) => {
    if (degrees < 100) {
        return false;
    } else if (isNaN(degrees)) {
        throw new Error('input must be a number');
    } else {
        return true;
    }
};

intToRoman = (num) => {
    if (typeof num !== 'number') {
        throw new Error('must be a number');
    } else if (num < 1) {
        throw new Error('error');
    } else if (num > 18) {
        throw new Error('error');
    } else return num.toString();
};

module.exports = {
    store,
    retrive,
    capitalize,
    isWaterBoiling,
    intToRoman,
};
