"use strict";
exports.__esModule = true;
var cityTimeZones = require("city-timezones");
var moment = require("moment-timezone");
var inputLocation = "./weather New York, 10005, Tokyo, São Paulo, Berlin";
var arrLocation = inputLocation.split(",");
var cityLookup = cityTimeZones.lookupViaCity(arrLocation[1].replace(/\s/g, ""));
try {
    function getUsers() {
        var fetch = require("node-fetch");
        return (fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityLookup[0]["city"] + "," + cityLookup[0]["iso2"] + "&appid=01ee8e16309fecb0722fb9931922dc4a")
            .then(function (res) { return res.json(); })
            .then(function (res) {
            console.log(res);
        }));
    }
    function getWeather(query) {
        var that = this;
        var endpoint = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=01ee8e16309fecb0722fb9931922dc4a";
        return that.http
            .get(endpoint) //, {search: searchParams})
            .map(function (res) { return res.json().main; })
            .subscribe(function (res) {
            console.log(res);
        });
    }
    console.log(getUsers());
    console.log(cityLookup[0]["timezone"]);
    console.log(moment().tz(cityLookup[0]["timezone"]).format());
}
catch (e) {
    var result = e.Message;
    console.log("Not find the city.");
}
