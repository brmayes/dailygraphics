/*
 * Base Javascript code for graphics, including D3 helpers.
 */

// Global config
var DEFAULT_WIDTH = 300;
var MOBILE_THRESHOLD = 500;

// D3 formatters
let fmtComma = d3.format(',');
let fmtYearAbbrev = d3.timeParse('%y');
let fmtYearFull = d3.timeParse('%Y');
let fmtMonthNum = d3.timeParse('%m');

let formatFullDate = function(d) {
    // Output example: Dec. 23, 2014
    let fmtDayYear = d3.timeParse('%e, %Y');
    return getAPMonth(d) + ' ' + fmtDayYear(d).trim();
};
