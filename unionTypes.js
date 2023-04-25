"use strict";
exports.__esModule = true;
var total = 200;
total = '300';
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else if (typeof value === 'string') {
        return false;
    }
}
console.log(isNumber(2));
