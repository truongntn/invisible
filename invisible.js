"use strict";
exports.__esModule = true;
var cityTimeZones = require("city-timezones");
var moment = require("moment-timezone");
var inputLocation = "./weather New York, 10005, Tokyo, São Paulo, Berlin";
var arrLocation = inputLocation.split(",");
var numLocation = 0;
var i = 0;
numLocation = arrLocation.length;
function getWeather(cityName, countryCode) {
    var fetch = require("node-fetch");
    return (fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + countryCode + "&appid=01ee8e16309fecb0722fb9931922dc4a")
        .then(function (res) { return res.json(); })
        .then(function (res) {
        console.log(res);
    }));
}
for (i = 0; i < numLocation; i++) {
    try {
        var cityLookup = cityTimeZones.lookupViaCity(arrLocation[i].replace(/\s/g, ""));
        console.log((i + 1) + ". " + cityLookup[0]["timezone"]);
        console.log("Current time: " + moment().tz(cityLookup[0]["timezone"]).format());
        getWeather(cityLookup[0]["city"], cityLookup[0]["iso2"]);
    }
    catch (e) {
        var result = e.Message;
        console.log((i + 1) + ". Not find the city '" + arrLocation[i] + "'.");
    }
}
