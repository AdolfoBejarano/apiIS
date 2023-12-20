// module shared.js
function start() 
{
    return 'start';
}

var b = function() {
    return 'start';
}

module.exports = {
    start: start,
    b: b
};