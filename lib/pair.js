'use strict';

module.exports = pair;

/**
 * Transforms array into array of pairs [0, 1, 2, 3] => [[0, 1], [2, 3]]
 *
 * @param {array} array
 * @return {array}
 */
function pair(array) {
    return array.reduce(function (result, element, i) {
        i = parseInt(i / 2, 10);
        result[i] = result[i] || [];
        result[i].push(element);
        return result;
    }, []);
}
