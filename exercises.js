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

module.exports = {
    store,
    retrive,
    capitalize,
};
