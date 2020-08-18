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

module.exports = {
    store,
    retrive,
    capitalize,
    isWaterBoiling,
};
