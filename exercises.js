let saved;

store = (x) => {
    saved = x;
    return saved;
};
retrive = () => {
    return saved;
};

module.exports = {
    store,
    retrive,
};
