const paths = ["/interactive", "/plain"];

const iDontCareRoute = () => {
    const randomObject = paths[Math.floor(Math.random() * paths.length)];
    return randomObject;
}

module.exports = {
    iDontCareRoute
}
    