'use strict'
var SunCalc = require('suncalc');

var times = SunCalc.getTimes(new Date(), 39.529633, -119.813803);

// format sunrise time from the Date object
var sunriseStr = times.sunsetStart.getHours() + ':' + times.sunrise.getMinutes();

module.exports = sunriseStr
