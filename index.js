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

//
// pObj: Parsed plist object
// filter: Regex or filter function
// sorter: Optional sorting functon
function getColorset(pObj, filter, sorter) {
    var filterFunc = (
        // Regex to a function
        (filter.test && filter.test.bind(filter)) ||

        // Fallback to a normal function
        filter
    );

    return _.chain(pObj)
    .pairs()
    .filter(_.compose(filterFunc, _.first))
    .sortBy(sorter)
    .pluck(1)
    .map(parseColor)
    .value();
}

function parse(plistStr) {
    // Build JS object from plist file's data
    var pObj = plist.parseStringSync(plistStr.toString());

    // Quick function
    var get = _.partial(getColorset, pObj);

    return {
        // Special colors
        foreground: get(/Foreground Color/)[0],
        background: get(/Background Color/)[0],

        // Cursor colors
        cursor: get(/Cursor Color/)[0],
        cursor_text: get(/Cursor Text Color/)[0],

        // Standard 16 colors
        palette: get(/Ansi .*/, function(pair) {
            // "Ansi X Color"
            // Extract X
            return parseInt(pair[0].split(' ')[1], 10);
        }),

    };
}

// Exports
module.exports = parse;
