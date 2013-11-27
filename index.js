// Requires
var _ = require('underscore');

var plist = require('plist');

// Color names
var C = {
    r: 'Red Component',
    g: 'Green Component',
    b: 'Blue Component'
};

// Utility func from : http://stackoverflow.com/a/10073764
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

// Convert real number to hex string
function _color(realnumColor) {
    return pad(parseInt(realnumColor * 255, 10).toString(16), 2);
}

function parseColor(color) {
    return '#' + [
        color[C.r],
        color[C.g],
        color[C.b],
    ].map(_color).join('');
}

function isAnsi(colorKey) {
    return colorKey.indexOf('Ansi ') === 0;
}

function parse(plistStr) {
    // Build JS object from plist file's data
    var pObj = plist.parseStringSync(plistStr.toString());

    // Get ainsi colors in order
    var ainsi = _.chain(pObj)
    .pairs()
    .filter(function(pair) {
        return isAnsi(pair[0]);
    })
    .sortBy(function(pair) {
        // "Ansi X Color"
        // Extract X
        return parseInt(pair[0].split(' ')[1], 10);
    })
    .pluck(1)
    .map(parseColor)
    .value();

    return ainsi;
}

// Exports
module.exports = parse;
