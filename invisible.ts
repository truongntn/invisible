import * as cityTimeZones from "city-timezones";
import * as moment from "moment-timezone";

const inputLocation = "./weather New York, 10005, Tokyo, São Paulo, Berlin";
let arrLocation: string[] = inputLocation.split(",");
let numLocation: number = 0;
let i:number = 0;
numLocation = arrLocation.length;

function getWeather(cityName, countryCode) {
    const fetch = require("node-fetch");
    return (
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + countryCode + "&appid=01ee8e16309fecb0722fb9931922dc4a")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
    );
}

for (i = 0; i < numLocation; i++) {
    try {
        let cityLookup = cityTimeZones.lookupViaCity(arrLocation[i].replace(/\s/g, ""));
        console.log((i + 1) + ". " + cityLookup[0]["timezone"]);
        console.log("Current time: " + moment().tz(cityLookup[0]["timezone"]).format());
        getWeather(cityLookup[0]["city"], cityLookup[0]["iso2"]);
    } catch (e) {
        let result = e.Message;
        console.log((i +1) + ". Not find the city '" + arrLocation[i] + "'.");
    }
}